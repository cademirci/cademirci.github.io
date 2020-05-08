---
layout: post
title: Some Things About CSS Animations
excerpt: >-
    A little bit about web page animating, old fashions, some bugs...
tags: [web design, web programming, front-end, CSS]
---

# {{ page.title }}

<div class="post_date">{{ page.date | date: "%d.%m.%Y" }}</div>
<div class="post_tags">{{ page.tags | sort | join: ", " }}</div>

***

A web programmer starts with implementing solid pages: Nothing moves, all changes occur directly. After a while, the time has come to develop the page like a professional, modern web designer, which requires some knowledge about page animations. Animating page elements, soft and smooth changes, etc.

*Modern web designing* here does not refer to absurdly festive pages, lightnings comes out from everywhere, unnecessarily moving some little unicorn emojis at the end of some sentences. But a good page is simple with all the animations that it includes; make it simple and make the simple looks amazing.

### CSS or JavaScript?

When I started web design, I tried to animate things with JavaScript. Even I never thought about CSS on that, like CSS is only used for declare certain features of a view, never for manipulating living things. Indeed, in first times, you can think like JS is in order for page elements to behave and move, CSS on the other hand is just to adjust spaces and colors. So I started to use `animate` function of jQuery. Because I thought that jQuery was very popular and as better way to use JavaScript as ten years ago. However that was a mistake. JQuery is an outdated library and it is odd to exist on a modern website now. Since I learned that, I have removed all jQuery codes in my working space and changed my mindset into create animations with CSS animations. Before that, I implemented some moving things on a page with `setInterval` of vanilla JavaScript also.

Shortly I can say that, internet may mislead person about animation issue. Worse, some coders underestimate CSS sometimes. I have explained something about this in my previous blog post. I quote the paragraph from it:

> First of all I want to say that, if CSS provides a solution for something about style, never write a JavaScript code. CSS is always stronger, cleaner and faster on that. It stands for “Cascade Style Sheet” in the first place and it is probably one of the most well-designed languages in the world. I love JavaScript but I can surely say that, JavaScript’s style functions should be used if and only if there is not a CSS solution, or we do not know how to do it with CSS. Actually the second is more possibly.

So I changed my mindset into use CSS animations as soon as I able to do it. Here is some little examples:

### Transition

Transition property is being used in this website, when hovering over links for example.

Below, I have changed the changing (transforming) behavior of six things by a single `transition` line. I added a different line also: things like `padding` adjustment to `padding-left` can also can be written. But pay attention: Because of we did that, box transformed into an ellipse instead of a perfect circle, we stretched it extra 50px from left.

<div class="box1">HOVER ME!</div>
<style>
.box1 {
  height: 100px;
  width:100px;
  padding: 25px;
  background: black;
  color: red;
  border-radius: 0;
  transition: 2.5s ease;
  margin-top: 35px;
  margin-bottom: -35px;
}
.box1:hover {
  height: 200px;
  width: 200px;
  padding-left: 75px;
  background: orange;
  color: white;
  border-radius: 50%;
}
</style>

```css
.box1 {
  height: 100px;
  width:100px;
  padding: 25px;
  background: black;
  color: red;
  border-radius: 0;

  transition: 2.5s ease;
}
.box1:hover {
  height: 200px;
  width: 200px;
  padding-left: 75px;
  background: orange;
  color: white;
  border-radius: 50%;
}
```

### Keyframes

I use `@keyframes` for first seconds after opening of a page, or infinite movements.

<div class="box2"></div>
<style>
@keyframes patrol {
  0%   { left: 0; }
  50%  { left: 75%; background: blue; }
  65%  { left: 25%; background: red; }
  100% { left: 0; }
}
.box2 {
  height: 100px;
  width: 100px;
  background: #3bc45f;
  border-radius: 50%;
  position: relative;
  margin-top: 35px;
  margin-bottom: -35px;

  animation-name: patrol;
  animation-duration: 7s;
  animation-iteration-count: infinite;
}
</style>
```css
@keyframes patrol {
  0%   { left: 0; }
  50%  { left: 75%; background: blue; }
  65%  { left: 25%; background: red; }
  100% { left: 0; }
}
.box2 {
  height: 100px;
  width: 100px;
  background: #3bc45f; /* soft green */
  border-radius: 50%;
  position: relative;

  animation-name: patrol;
  animation-duration: 7s;
  animation-iteration-count: infinite;
}
```
<br><br>

### A Bug

Now I want to write about an issue: One of the biggest companies and the greatest software storage in the world, Google, has an annoying bug in its browser. If you want to use `@keyframes` animation tool on Chrome, be careful.

```css
@keyframes everytingFadeIn {
    from { transform: rotateX(-10deg); opacity: 0; }
    to   { transform: rotateX();       opacity: 1; }
}
html, body {
  animation: everytingFadeIn .5s;
}
```

I wrote this code for opening of my page. I thought it was a smooth fading in from nothing, and with a little settling in movement. But I saw a white color flashing out like an old camera does. You can find something about this issue on the web: [link1 (tried and did not work)](https://www.sitepoint.com/fix-chrome-animation-flash-bug/), [link2](https://9to5google.com/2019/01/18/google-chrome-fix-white-flash/), [reddit](https://www.reddit.com/r/chrome/comments/b1tkxv/weird_white_flashes/)

Opera does the same thing. Firefox does not. Firefox runs the animation exactly as I wanted. Thanks Mozilla.

For now, I changed my code into this:

```css
.home_header,
.blog_header,
.default_header {
    animation: headersFadeIn 1s;
}
@keyframes headersFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
}
```

These headers are my big illustration headers. I make them fade in, instead of the whole body.
