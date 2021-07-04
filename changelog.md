---
layout: default
title: Changelog
is_navlink: false
---

# Changelog

<br>

This changelog begins at October 11, 2020. The updates before that date are undocumented (except GitHub commit messages). Entries are sorted by the newest through the oldest.

<!--<span id="entryCount"></span> entries are displaying.-->

- (20) changelog is added into the footer. Font size in the footer fixed as 0.9em.  
- (19) Two images are added into the gallery.
- (18) Excerpts are added to post pages as pale and big texts. (those were existing only in the blog page's post entries before)
- (17) Title "Posts" in the blog main page is changed to "All Posts (POST_COUNT)".
- Project `ghost-theme` is upgraded and its name changed to `jekyll-code-style`. So the theme file in `assets/css` is `jekyll-code-style.css` now.

__ 2021 &uarr; __

- PascalCa1se.js file names are changed into kebab-case.js
- (16) Implemented and added navigation markers which are marking the current location. (Green '<' signs)
- (15) [Gallery](/gallery) page is designed and implemented. Now there is a little Instagram in the page, mainly for digital paintings I made.
- (ABSTRACT)(15) Clearer code. Removed unnecessary comment lines, old test files, etc.
- (14) Inline code color changed from pale green-blue `#35b099` to pale pink `#dd828c`.
- (13) Post *Some Examples of Introduction to Programming* is published.
- (12) Post *(TUR) Birkaç Basit Programlama Sorusu* is published.
- (11) Syntax highlighting style `ghost-theme` is changed. Bold font weights are cancelled.
- (10) Header image of the blog post pages has been drawn and replaced with the old one. But converting png-jpg has disrupt the original file. I will figure it out some time.
- (9) Header image of the 404 not found page has been drawn and replaced with the old one.
- (8) `MathJax` library has been added as a script into the page, in order for it to have mathematical literacy via `LaTex`. Now the page is able to display math equations like $$\sum_{i=1}^n x = \int_{x=1}^n xdx$$
- (BUGFIX)(7) Bugfix 4 is cancelled, search string adjusted to minimum 3 length istead. Searchs "a ", "as" and "or" comes up with a bug. Added: except "js" and "py".
- (6) Added `Inspect My GitHub Profile` button into About Me.
- (5) In Recent 3 Posts in Home Page, mobile screen adjustment has been made. Post lines are not inline but title (br) date and tags now.
- (BUGFIX)(4) Searchs "A " and "a " are cancelled for the search bar, Because code used to replace the link keyword `<a href>` with `<<span>a </span>href>`, thus the link used to be broken.
- (3) Search bar has been written and styled for the blog page. Users are able to find a post by searching any word in the title, excerpt or tags of it.
- (2) Similarly to (1), blog container and reading area (post pages) colors were a heavy blue-purple `#1a1a1e`, so they have been changed into colder dark blue color `#191c1f`.<br>These two changes made a colder and easier-to-eye appearance for the website.
- (1) The color of Navigation Bar changed into pure grey `lighten(#1a1a1a, 10%)` instead of a blueish-purple-grey. 

<br>

### TODO

- Better README.
- Change the welcome header. That "paint"ed computer with that purple bg is not good. 
- Change the little person in the "about", the sattelite in the contact. Notebook in the blog is not bad.
- Change the gallery view. Appearance in the main page is not satisfyable, the representing painting isn't good. 
- Draw a default post header. Change it.
- You may add changelog as a small `log` word into the footer. This may make the page more dynamic (for you).
- Maintain the width and height adjustments. Sometimes the heaeder picture heights seems absurd to me. Containers also, aren't perfect for 13" screens. 

<!--
<script>
window.addEventListener('DOMContentLoaded', (event) => {
    var count = document.querySelectorAll('li').length
    document.querySelector('#entryCount').textContent = count
})
</script>
-->
