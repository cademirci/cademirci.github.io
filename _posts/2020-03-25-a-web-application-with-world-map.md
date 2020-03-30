---
layout: post
title: A Web Application With World Map
tags: [web app, back-end, python, django, leaflet.js]
---

# {{ page.title }}

<div class="post_date">{{ page.date | date: "%d.%m.%Y" }}</div>
<div class="post_tags">{{ page.tags | sort | join: ", " }}</div>

***

I wrote a web application called *been-and-mark*, I explained it on Github:

> been-and-mark application allows you to mark with a pin somewhere you have been on an open world map; put a photo and a text related with there and the memory. <br><br>In this respect, it can be thought as some kind of very simple Foursquare clone. Only been-and-mark is written for personal usage, like a blog or a diary let's say. I have written a web application with an interactive map in my internship; then I wanted to rewrite and put a simpler and joyful version of it into Github, as a self development. Plus this is a totally different idea actually.

![](https://raw.githubusercontent.com/cademirci/been-and-mark/master/screenshots/map.png)

I want to write my falses down here. Let it be a little documentation: I will write about alternatives, mistakes and right things I have made.

***

### Django/GeoDjango

I used Django as back-end framework. Actually, for my exact purpose, there is a django version called [GeoDjango](https://realpython.com/location-based-app-with-geodjango-tutorial/) which allows you to make open world map applications. PostGIS/PosgreSQL is recommended as database with it, thus spatial model fields can be used like `PointField`, `PolygonField` and `GeometryField`. In this way I could use a single `point` in my json data (it is also called geoJson in such a project) to show a point on the map, which means using data that hold `latitude` and `longitude` at a single time. I thought that is unnecessary. Reasons:

PostgreSQL is extremely large and powerful database management system that requires Docker. May be Docker is a good thing, but I was trying to a simple, personal application at the moment. If I will supposed to work on a company-level, interactive, huge map application, I may use GeoDjango and PostgreSQL, accepted. But I just intended to learn some Django at the moment, not such a great deal.

Sometimes, it is better that make things simple. Django does not provide `pointField` that holds a world point coordinates. If so, then I figure it out with this way: can be hold that two data instead of PointField: these are two `FloatField`s one of them holding `latitude`, and `longitude` the other does. And done.

### Map

After a back-end framework that can serve a map management system, you need a map management system which allows you to manage map and map items like pin, field, pin popups and things like that. I found and thought to use [Google Maps Platform](https://developers.google.com/maps/documentation) first. You have to get an API key and a billing account for using GMP. Then when keep searching, an open source javascript library called [Leafletjs](https://leafletjs.com/) and I decided to use it instead of Google's API.

### Communication Between Django and Leaflet

At the end, in my HTML templates, I run a Django Jinja for loop and geoJson object within, all of them framed with Leaflet javascript code:

{% raw %}
```javascript
{% for point in points %}
// points is an array holds Django database model "Place"
  "geometry": {
    "type": "Point",
    "coordinates": [
      {{ point.longitude }},
      // it can look like a reverse order but it works that way.
      {{ point.latitude }}
    ]
  }
{% endfor %}
```
{% endraw %}

I could not find a way for writing and using Django variables (I mean Jinja template variables) inside external Javascript files or a Json file. I think the reason is that I do not use any frontend framework organizes such things. I write almost everything related with Javascript down in `template` files. May be it became a little dirty code. By the way this is the same reason that it seems in the GitHub repository of my project the second most used language after python is HTML. Actually they are not HTML, almost all of them are Leaflet JS in Jinja blocks.

### A Bug I Could Not Handle

I do not like force the user to do something I provide. Provision should be used as an addition, a better way. Not an obligation. I wrote a feature that the pins on the map can keep an image, a photograph alongside the text. My `add-new-place` page screenshot is given below:

![](https://raw.githubusercontent.com/cademirci/been-and-mark/master/screenshots/add-new-place.png)

The user is about to enter a pin keeping a Coffee Shop. They may does not want to add a photo about here, but as can be seem, the input filed `Image` forces him/her to browse an image, otherwise the record will not be added into the database. To avoid that, my Django model is created with attributes such `null=True` and a default value:

```python
image = models.ImageField( default="/place_pictures/iconbl.png",
                           upload_to="place_pictures",
                           null=True )
```

That means you can leave it empty, in this case the field will be filled by `iconbl.png` which is a notebook image I drawed which represents this is not a graphical memory, it contains text only. But this feature does not work. I thought may be the reason of it that not python but HTML forces the user to fill the field. In this way I would use `default value` attribute of HTML. But this should be nonsense in the first place, because `form` fields are being initialized by python itself, because I use Django Jinja's {% raw %}`{{ form }}`{% endraw %} tool in my HTML template. Another absurd thing about this situation, is that I can leave the filed empty in my admin page (django administration), but the same framework does not allow me to leave the field empty in its own form templates.

Current program forces the user to put an image to all of the pins, unless they do not create and use an admin account. In this point, I am explaining how to use an admin account.

### Use the App As an Admin

Django administration is easy to use. I already wrote the admin urlpattern, a user just should do the following bellow:

```terminal
python manage.py createsuperuser
```

Then create an account. Finally type in the browser url bar that `localhost:8000/admin`. The app can be managed from there.
