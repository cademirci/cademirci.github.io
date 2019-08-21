---
layout: post
title: Linux'ta Ptyhon İle GitHub Page Otomasyonu
---

## Linux'ta Ptyhon İle GitHub Page Otomasyonu

Linux işletim sistemi kullanan ve sık sık GitHub güncelleyenler için temel olabilecek, değiştirilerek kendilerine uygun hale getirilebilecek ufak bir otomasyon programı.

**README file**:

```
# GitHub Page Automation On Linux via Python 3

You may want to edit ~/.bashrc as I do:

    alias gh='cd ~/ThePage/caglayandemirci.github.io'
    # (g)it(h)ub(p)age
    alias ghp='cd ~/ThePage/caglayandemirci.github.io/_posts && python3 ~/ThePage/AutomatePage.py'
    # (g)it(h)ub(p)age(p)ush
    alias ghpp='gh && python3 ~/ThePage/AutomaticPush.py'

You have to edit your paths according to your GitHub Repository directory in your system machine.

### Usage

On Linux terminal:

    ~$ ghp My New Post About Something

After type that, a markdown file with usage date as *2019-08-20-my-new-post-about-something.md* appears in the GitHub Page's *_posts* directory, filled within:

    ---
    layout: post
    title: My New Post About Something
    ---

    ## My New Post About Something

Then on Linux terminal:

    ~$ ghpp

After type that, you have to type your authentication (user name and password) on the same terminal window.

So that is an easy way to add new post for your Jekyll site. Or, if you replace *_posts* with a Respository path, this program can be used for any GitHub Repository on a machine, easily.

```

**AutomatePage.py**:

```python
from datetime import date
import sys
import os

def get_date():
    # gets a date string like "2019-12-30-"

    today = date.today()
    return today.strftime("%Y-%m-%d-")

def create_title_part(title):
    # returns a string that will be the title part
    # of the markdown file name

    title = title.lower()
    title = title[:len(title)-1]
    title_part = ""

    # control part to latinize Turkish characters
    # if they exist
    for i in range (0, len(title)):
        if title[i] == 'ç':
            title_part = title_part + 'c'
        elif title[i] == 'ğ':
            title_part = title_part + 'g'
        elif title[i] == 'ı':
            title_part = title_part + 'i'
        elif title[i] == 'ö':
            title_part = title_part + 'o'
        elif title[i] == 'ü':
            title_part = title_part + 'u'
        elif title[i] == 'ş':
            title_part = title_part + 's'
        else:
            title_part = title_part + title[i]
    return title_part

def create_file_name():
    # returns a string that will be the file name
    # like "2019-12-30-my-post-about-automation.md"

    title = ""
    for i in range (1, len(sys.argv)):
        title = title + sys.argv[i] + "-"
    return get_date() + create_title_part(title) + ".md"


file_name = create_file_name()
content = "---\nlayout: post\ntitle: "
title = ""
for i in range (1, len(sys.argv)):
    title = title + sys.argv[i] + " "
content = content + title + "\n---\n\n## " + title
file = open(file_name, 'w+')
file.write(content)
os.system("atom " + file_name)

```

**AutomaticPush.py**:

```python
import os
import sys

os.system("git add .")
os.system("git commit -m \"new post added\"")
os.system("git push origin master")
```
