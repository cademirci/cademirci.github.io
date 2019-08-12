---
layout: post
title: Python İle Exiftool Kullanarak Dosya Sıralama
tags: ['bilgisayar bilimleri', 'python']
---

## Python İle Exiftool Kullanarak Dosya Sıralama

Exiftool adlı araç, herhangi bir dosyanın bütün özelliklerini, dosya türünü, en son ne zaman değiştirildiğini ve buna benzer bütün geçmişini ekrana getiren bir yazılım. Python kullanarak, bu yazılımın bize verdiği verilerden (*data*) yararlanarak, bir klasörde dosyaları hangi dosyanın ne zaman değiştirilmiş olduğuna göre sıralayabiliriz. Bu işlem, basit gibi ya da çoğu işletim siteminde zaten default olarak görülebiliyor gibi düşünülebilir. Ama siber güvenlik alanında temel kodlardan biri olarak yazdırılabilir: Bir kullanıcı tarafından hangi işlemin ne zaman yapıldığının takibi, büyük bir veridir.

**README file**:

    Author: Çağlayan Demirci

    A basic Python program that sorts the files in a given directory by date.

    The program uses [Exiftool](https://github.com/exiftool/exiftool) as an assist tool. Exiftool must be exist in the system that sort_by_date.py will be used in.

    It takes an absolute path (of the directory) as program argument.

    Usage is given below:

    ```
        $ python3 sort_by_date.py <directory-path>
    ```

    When the program is executed, every single file in the directory appears per line from newest to oldest. Then it can be given a file name as user input, which prints all details about the file.

    This program is written and executed on Ubuntu. Windows paths may include whitespaces, which causes that the program takes the substring after the whitespace in given line as another argument. When this happens, the program does not run properly.


**sort_by_date.py**:

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
