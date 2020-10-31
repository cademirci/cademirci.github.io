---
layout: post
title: Some Examples of Introduction to Programming
excerpt: >-
    Some Java and Python examples and a basic analyze tool I wrote in Python.
tags: [Java, Python, basic programming, general programming]
---

# {{ page.title }}

<div class="post_date">{{ page.date | date: "%d.%m.%Y" }}</div>
<div class="post_tags">{{ page.tags | sort | join: ", " }}</div>

***

While browsing my old folders, I saw some coding examples and I decided to publish them. I thought perhaps these do not worth to be a blog post (there are millions and billions similar example on the web) but when I thought for a second time, I wanted to write an old program that I wrote with Python and Exiftool which I barely remember. It does not worth to be a GitHub repository, so I am putting it here now as an addition.

***

**1**

A basic Java program to compute maximum, minimum ones and the average of the all numbers that the user's inputs until they enter -1. Assuming the numbers will be between 0 to 1000.

```java
import java.util.Scanner;

public class Q2 {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int count = 0, sum = 0, min = 1000, max = 0; 
    double avg = 0;
    while (true) {
      int n = s.nextInt();
      if (n == -1) break;
      if (n < min) min = n;
      if (n > max) max = n;
      count++;
      sum += n;
      avg = double(sum / count);
    }
    System.out.println("min: " + min);
    System.out.println("max: " + max);
    System.out.println("average: " + avg);
  }

}
```

**2** 

Three Java methods about strings.

```java
// returns if two strings are anagrams or not
public static boolean isAnagram(String s1, String s2) {
  if (s1.length() != s2.length())
    return false;
  for (int i = 0; i < s1.length(); i++) {
    if (s2.indexOf(s1.charAt(i)) == -1)
      return false;
  }
  return true;
}

// A reimplementing of Integer.parseInt() method
public static int parseInteger(String str) {
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

// counting how many times every single 
// alphabet letter in a string appears
public static void countLetters(String str) {
  String counted = "";
  for (int i = 0; i < str.length(); i++) {
    int count = 0;
    if (counted.indexOf("" + str.charAt(i)) == -1)
      System.out.print("count of " + str.charAt(i) + ": ");
    else continue;
    for (int j = i; j < str.length(); j++) {
      if (str.charAt(j) == str.charAt(i))
        count++;
    }
    System.out.println(count);
    counted += str.charAt(i);
  }
}
```

**3**

A recursive Python program that find out if the given character list is an array of a palindrome string or not. Palindrome means a string that a word or phrase spelled forward is the same word or phrase spelled backward. For instance "wow racecar wow".

```python
def rec_palindrome(char_list):
  if len(char_list) < 2:
    return true
  head = 0
  tail = len(char_list) - 1
  if char_list[head] != char_list[tail]:
    return false
  head = head + 1
  tail = tail - 1
  if head == tail:
    return true
  rec_palindrome(char_list)

char_list = ['a', 'd', 'a', 'n', 'a', 'd', 'a']
rec_palindrome(char_list)
```


## An Intermediate Bonus: sort_by_date.py

A basic Python program that sorts the files in a given directory by date.

The program uses [Exiftool](https://github.com/exiftool/exiftool) as an assist tool. Exiftool must be exist in the system that sort_by_date.py will be used in.

It takes an absolute path (of the directory) as program argument.

Usage is given below:

```terminal
python3 sort_by_date.py <DIRECTORY_PATH>
```

When the program is executed, every single file in the directory appears per line from newest to oldest. Then it can be given a file name as user input, which prints all details about the file.

This program is written and executed on Ubuntu/Linux. Windows paths may include whitespaces, which causes that the program takes the substring after the whitespace in given line as another argument. When this happens, the program does not run properly. I suppose MacOS (Darwin) would not be problem.

```python
import sys
import os


class File:
  def __init__(self, name, modification_date, details):
    self.name = name
    self.modification_date = modification_date
    self.details = details


number_of_arguments = len(sys.argv)
path = ""
for i in range(1, number_of_arguments):
  path = path + "\ " + sys.argv[i]
path = path[1:]
files = []
# print(path)
file_list = os.popen("cd " + path + " && ls").read()
file_list = file_list.splitlines()
for i in range(0, len(file_list)):
  exifed_file = os.popen("cd " + path + " && exiftool " + file_list[i]).read()
  f = File("", "", exifed_file)
  exifed_file_details = exifed_file.splitlines()
  for j in range(0, len(exifed_file_details)):
    line = exifed_file_details[j]
    if line[:9] == "File Name":
      f.name = line[34:]
    if line[:27] == "File Modification Date/Time":
      f.modification_date = line[34:]
  files.append(f)

files.sort(key=lambda r: r.modification_date)
files.reverse()

print("\nFiles in this directory (" + path + ")\nis sorted -from newest to oldest- as: \n")
for i in range(0, len(files)):
  if len(files[i].name) != 0:
    print(files[i].name + ", " + files[i].modification_date)

while (True):
  print("\nYou can give a file name to see its details...")
  command = input()
  for i in range(0, len(files)):
    if files[i].name == command:
      print(files[i].details)
      break
```

