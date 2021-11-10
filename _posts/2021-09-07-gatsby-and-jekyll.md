---
layout: post
tags: [web programming, Jekyll, Ruby, Gatsby, JavaScript, React, SSG]
category: Software
is-serie: false
excerpt: >-
    Static website programming with a Ruby framework Jekyll -which this webpage is written in- and a JavaScript framework Gatsby.
title: About Frameworks Gatsby and Jekyll 
---


Gatsby is a SSG (Static Site Generator) framework of JavaScript. It rises from the base of React and works with the same logic. On the other hand, there is
a similar framework called Jekyll and it belongs to Ruby. Plus, this website, where you are reading it on, is coded with and powered by Jekyll. [Here is a link](https://www.gatsbyjs.com/features/jamstack/gatsby-vs-jekyll-vs-hugo) to compare them (with another -> Hugo).

If I were writing my personal website in that days, I would definitely prefer to code it in Gatsby. I will explain why.

### JavaScript Framework

Gatsby is written in JS. I want to say that, in year 2021, I don't like to code JS like below as in Jekyll:

```javascript
window.addEventListener('DOMContentLoaded', () => {
  var something = document.getElementById('someDivID')
  // ... codes ...
}
```

I want my JS code to be the essence of the code, I mean JS should be de main logic language of a webpage in the first place. I don't want to write it 
as an alternative, as nearly an unexpected guest of my page. Instead, it should be placed like this (this is Gatsby):

```javascript
export default Page() {
  const something = 'someCountedVariable'
  return (
    <section>
      <p> here is the value { something } </p>
      {/* content code coming from GraphQL */}
    </section>
  )
}

// Ignore the error blacks of syntax highlighting, probably Gatsby syntax rules 
// is not included into Jekyll syntax highlighting analyzer. I don't know how 
// hard to understand if something is fit to a closing tag stack or not though 
// but anyways. Although I coded the color theme and can change the black and 
// red colors, nevermind.
```

Here, section is your template. To do this in Jekyll, hilariously, you must do this:

```html
<head>
  <script type="text/javascript" src="js-file.js"></script>
</head>
```

```liquid
{ % include head.html % }
<p> here is the value <span id="someText"></p>
{ { page.content } }
```

```javascript
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('someText').innerText = 'someCountedVariable'
}
```

It looks a bit primitive.

### Component Technology

I think the logic of `component` is one of the most important things in the modern frontend development. It makes the code to be very clear, understandable,
maintainable. Moreover, it brings things like `hot module replacement` and routing sugars like `Link` in React or `router-link` in Vue, therefore it is
more developed style of frontend coding.

***

If I code a static webpage today, I would do it in Gatsby. But this website (`cademirci.com`) will remain in Jekyll. I explained it in one of my notes:

> I have written the website you are currently reading on nearly 3-4 years ago. At the moment, I designed and coded some pages with Jekyll and changed for absurdly many times. I used to name these versions of my personal webpage project after Greek alphabet, when I was lastly counting I guess it was version Epsilon (5) or Zeta (6) or something, not sure. Anyways :) <br/><br/>At the times, I was a computer science student who were constucting Java data structures all the time, out of school times learning and coding to be a fullstack dev (HTML/CSS/JavaScript), and constantly thinking about it would be very nice if I learn JavaScript frameworks like Node, React and Angular (Vue wasn't popular back then). But never did it. If I did, this webpage would surely be written in Gatsby which is the little brother of React. I don't regret it though, I learned a great deal while I was working on Jekyll but as I said I will definitely use Gatsby next time I need to use a SSG. <br/><br/>I don't want to migrate my webpage from Jekyll to Gatsby, I know there are ways of it, but it would be a waste of time. First of all, cademirci.com is a CSS website before it is a complete frontend framework's one. I have spent a lot of time for its looking in order for it to be stylish, original and professional at the same time. I painted and drew Adobe Illustrator files, I mixed colors for thousands of times, I changed fonts, margins and everything. The result still doesn't satisfy me :) But okay. Anyway, it hasn't an impressingly complex technical infrastructure and it doesn't have to be another framework's system at the moment. From now on, I will be publishing posts and drawing somethings again in order to try to catch the perfect (I know I won't be able to do it but again, it's ok).