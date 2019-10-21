---
layout: subpage-light
title: Notes
---

[pymotw.com link](https://pymotw.com/2/socket/tcp.html)

**TCP/IP Client and Server**, explaining and example codes 
@python

---

**Intro to Programming** self-implementing `Integer.parseInt(String)` code asked by a friend. 
@java
```java
public int parseInteger(String str) {

// controls
for (int i = 0; i < str.length(); i++) {
    if ((str.charAt(i) == '-' && i != 0) || (str.charAt(i) == '+' && i != 0))
        throw new IllegalArgumentException("invalid sign placement");
    if ((i != 0) && (str.charAt(i) < 48 || str.charAt(i) > 57))
        throw new IllegalArgumentException("not a number");
}

// computing
int number = 0, dec = 0;
for (int i = str.length() - 1; i >= 0; i--) {
    if (str.charAt(i) == '-' || str.charAt(i) == '+')
        break;
    dec = str.charAt(i) - 48;
    dec *= Math.pow(10, str.length() - i-1);
    number += dec;
}
if (str.charAt(0) == '-')
    number *= -1;

return number;
}
```
