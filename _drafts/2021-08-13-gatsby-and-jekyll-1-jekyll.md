---
layout: post
title: Gatsby & Jekyll part ii. Comparing
excerpt: >-
    Static website programming with a Ruby framework Jekyll -which this webpage is written in- and a JavaScript framework Gatsby.
tags: [web programming, web design, jekyll, ruby, gatsby, JavaScript, react, ssg]
category: Software
---

### Coding 

Year is 2021. Therefore I do not like this:

```js
window.addEventListener('DOMContentLoaded', () => {
    // code
}
```

I don't want to start to write JS like this. JavaScript is very, **very** important for coding pages. Yes, you can code Ruby solutions in Jekyll and that would be cool but hey, I want to write JavaScript. How can I code my `[####------]` "you-have-read-page-ratio" graphic at the top here or anchor jumpers in the home page without JavaScript? JS is important, JS is good, I love JS :)

Jekyll structure is basically combining a pieces of a primitive html file, where you call the CSS and JS files from `<head>`. In `_includes` and `_layouts` directories, you code whatever you want in html blocks, with `Liquid` programming inside them (languageCount++), then you go to another folder where you keep your JavaScript files, you add an event listener like above. After that, you go to the `include` file where you keep your `<head>` in, call your JS file. Then, Ruby program combines these pieces into a basic HTML page. And these all come up with a requesting crowd where the whole page (which is a fat, dirty html file) is being refreshed all the time, even in the development process.

```html

```

Here is Gatsby. In the paragraph above, I mean that these pieces aren't `component`s. In a component, programmer can decide the exact behavior of the piece, JS and JS variables are clear in *the* component, CSS and elements it declare are clear in the component (`module` css), , you can easily see the purpose of the piece of the component