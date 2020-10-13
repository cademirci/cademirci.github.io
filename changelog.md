---
layout: default
title: Changelog
is_navlink: false
---

# Changelog

<br>

This changelog begins at October 11, 2020. The changes before the date are undocumented (except GitHub commit messages).

1. The color of Navigation Bar changed into pure grey `lighten(#1a1a1a, 10%)` instead of a blueish-purple-grey. 
2. Similarly (1), blog container and reading area (post pages) colors were a heavy blue-purple `#1a1a1e`, so they have been changed into colder dark blue color `#191c1f`.<br>These two changes made a colder and easier-to-eye appearance for the website.
3. Search bar has been written and styled for the blog page. Users are able to find a post by searching any word in the title, excerpt or tags of it.
4. In order to avoid a bug, searchs "A " and "a " are cancelled for the search bar, Because code used to replace the link keyword `<a href>` with `<<span>a </span>href>`, thus the link used to be broken.
5. In Recent 3 Posts in Home Page, mobile screen adjustment has been made. Post lines are not inline but title (br) date and tags now.
6. Added `Inspect My GitHub Profile` button into About Me.

<br>

### TODO

- Change default and post header image (planets). Draw something and replace them.
- Change 404 Not Found page header image (inside). 
