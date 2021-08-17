---
layout: post
title: Compare
excerpt: >-
    Static website programming with a Ruby framework Jekyll -which this webpage is written in- and a JavaScript framework Gatsby.
tags: [web programming, web design, Jekyll, Ruby, Gatsby, JavaScript, React, SSG]
category: Software
is-serie: true
serie-title: Gatsby & Jekyll 
episode-number: 2
---

### Coding 

Year is 2021. Therefore I do not like this:

```js
window.addEventListener('DOMContentLoaded', () => {
    // code
}
```

I don't want to start to write JS like this. JavaScript is very, **very** important for coding pages. Yes, you can code Ruby solutions in Jekyll and that would be cool but hey, I want to write JavaScript. How can I code my `[####------]` "you-have-read-page-ratio" graphic at the top here or anchor jumpers in the home page without JavaScript? JS is important, JS is good, I love JS :)

Jekyll structure is basically combining pieces of a primitive html file, where you call the CSS and JS files from `<head>`. In `_includes` and `_layouts` directories, you code whatever you want in html blocks, with `Liquid` programming inside them (languageCount++), then you go to another folder where you keep your JavaScript files, you add an event listener like above. After that, you go to the `include` file where you keep your `<head>` in, call your JS file. Then, Ruby program combines these pieces into a HTML page without touching it. Eventually,  you get a fat and dirty html file. The chart of the way is like below, basically.

<div class="codefile-head">
A.html in <b>_includes</b>
</div>

```html
<div class="myDiv">
    { { Liquid something } }
</div>
<p id="variableText"></p>
```

&darr;

<div class="codefile-head">
B.css
</div>

```css
.myDiv {
    display: block;
}
```

<div class="codefile-head">
C.js
</div>

```javascript
window.addEventListener('DOMContenLoaded', () => {
    var varText = document.getElementByID('#variableText')
    varText = 'I am coding like it is year 2000s'
})
```

<div class="codefile-head">
head.html in <b>_includes</b>
</div>

```html
<link rel="stylesheet" href="../B.css">
<script type="text/javascript" src="../C.js"></script>
```

<div class="codefile-head">
D.html in <b>_layouts</b>
</div>

```html
{ % include head.html % }
{ % include A.html % }
```

The alternative approach of that, is writing CSS and JS for individually for every single page but it is not in the logic of `component`. I will talk about component lately.

```html
<div>
    <!-- ... -->
</div>

<script>
    // ...
</script>

<style>
    /* ... */
</style>
```

I can hear you saying "yeah, it is similar to Vue now. That's the correct way". No. Because the one above isn't a component.

Here is Gatsby. In the paragraph above, I mean that these pieces aren't `component`s. In a component, programmer can decide the exact behavior of the piece, JS and JS variables are clear in *the* component, CSS and elements it declare are clear in the component (`module` css), , you can easily see the purpose of the piece (component)