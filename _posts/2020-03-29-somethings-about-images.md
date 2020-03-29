---
layout: post
title: Somethings About Images
tags: [web programming, image manipulating]
---

# {{ page.title }}

<div class="post_date">{{ page.date | date: "%d.%m.%Y" }}</div>
<div class="post_tags">{{ page.tags | sort | join: ", " }}</div>

***

Sometimes a web user may wants images in a page to be wider than the container division. But the problem is, because of the images and the text are in the same container, simple solutions like `img { width: }` with whatever number or ratio in CSS does not work. Even if you arrange some settings like `with: 120%` or `max-with: 120%`, these are not the solutions because in such a situation, image would overflow to right, because probably its margin-left is not negative. Even if it is, you cannot be sure how much the negative number should be. CSS has a `calc()` function but what you should calculate is unclear. For such an issue, we understand that some code has to be written. 

First of all I want to say that, if CSS provides a solution for something about style, never write a Javascript code. CSS is always stronger, cleaner and faster on that. It stands for "Cascade *Style* Sheet" in the first place and it is probably one of the most well-designed languages in the world. I love javascript but I can surely say that, javascript's `style` functions should be used if and only if there is not a CSS solution, or we do not know how to do it with CSS. Actually the second is more possibly. 

### A Race Condition 

Here we come to collect the images in the page and analyze them, calculate their widths and manage them. The code given below has a surprise:

```javascript 
const images = document.querySelectorAll('img');
for (let i = 0; i < images.length; i++) {
    let image = images[i];
    alert(image.width);
}
```

The surprise is some of the widths may will be 0. The reason is, when this code runs, js realize that there is some images on the page, html says so. But the browser is not ready enough to load the images and show them with their proper widths and heights. Thus javascript's `document` object cannot measure the width at the moment, then assign the default value which is 0 to them. Discovering a `race condition` was fun. 

To avoid that, better to wait all of the images be loaded. The function below works for it.

```javascript
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    ...
})
```

For general purpose I use and suggest `DOMContentLoaded` instead of `load`, because without first, some items can flash out in first seconds of the loading of the page. First one prevents that. But if this function only be written for images, the page remains clear.

### Using Negative Margins

We were looking for that image widths be wide. To solve this, if there is an image which has bigger width from the container's one, we can set the image's left and right margins equally and negatively, and set its maximum width to sum of the margins and container width. 

```javascript
var container = document.querySelector('.container');
var containerWidth = container.clientWidth;
var extra = 25;
image.maxWidth = 2 * extra + containerWidth;
image.style.marginLeft = -extra + 'px';
image.style.marginRight = -extra + 'px';
```

Thanks to this code the image will be 50px extra wider. In this point may be it is good to remember some of tricks while manipulating images. For both js and css:

- To get centered images, `display: block` must be written for images alongside their left and right margins `auto`.
- If divide operator being used for calculate image dimensions, always `Math.floor(value)` must be there. Height and width values are integer, not float. 
- To get an image's real dimensions, `image.naturalWidth` can be used. `width` will return its current width inside the container.
- Adding an extra event listener `resize` is good. Otherwise while user is resizing the window, images will stay steady until they refresh the page. This is ugly.
- While doing an assignment, pay attention to this: where `image.style.width = value` the value must be string like `'100px'`. `image.width = value` takes an integer like `100`.
- Difference between `clientWidth` and `offsetWidth` are important if your images have a border or something. Here they are:

![](https://tr.javascript.info/article/size-and-scroll/metric-all.svg)

- To protect the images shape, if one of the dimensions' settings is changed by the user, the other must not be set. Otherwise the image's width/height ratio will be broken and it will seem creepy. For example while writing like `width = width + 100` (this is representation of course, it would'n run), `height` in the CSS must not be set. So that the CSS can automatically adjust the height.

Good codings!