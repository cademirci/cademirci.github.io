---
layout: post
title: Little Things About CSS Animations
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

### CSS vs JavaScript

JavaScript is one of my favorite languages; it is strong on almost all sides of modern technologies. In first times of my web designing adventure, I tried to animate things with JS every time. Even I never thought about CSS on that, like CSS is only used for declare certain features of a view, never for manipulating living things. So I started to use `animate` function of jQuery. Before that, I implemented some moving things on a page with `setInterval` of vanilla JS a couple of years ago. Now I can see that; first was clearly a mistake, second can be used only for some times.

Formerly, I thought jQuery was very popular and as better way to use JavaScript as ten years ago. However, jQuery is an outdated library and it is odd to exist on a modern website now. Since I learned that, I have removed all jQuery codes in my working space and changed my mindset into create animations with CSS animations.

If we have come to versus vanilla JavaScript and CSS, I have explained this in my previous blog post. I quote the paragraph from it:

> First of all I want to say that, if CSS provides a solution for something about style, never write a JavaScript code. CSS is always stronger, cleaner and faster on that. It stands for “Cascade Style Sheet” in the first place and it is probably one of the most well-designed languages in the world. I love JavaScript but I can surely say that, JavaScript’s style functions should be used if and only if there is not a CSS solution, or we do not know how to do it with CSS. Actually the second is more possibly.

Nowadays I use `transition`s a lot, and `@keyframes` sometimes.

<br>

### A Bug

Now I want to write about an issue: The biggest Company and the greatest software storage in the world, Google, has an annoying bug in its browser. If you want to use `@keyframes` animation tool, be carefully.

```css
@keyframes everytingFadeIn {
    from {
      transform: rotateX(-10deg);
      opacity: 0;
    }
    to {
      transform: rotateX();
      opacity: 1;
    }
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

These headers are my big illustration headers. I make them fade in, instead of all elements or the whole body.
