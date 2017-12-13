---
layout: post
title: Bloğumda Python İle Sayfa Otomasyonu
---
<p class="date">13.12.2017 Çar 20:08</p>

Kullanım:
```
$ python createpage.py blog tirelerle-latin-harfli-yazi-ismi
```

Python programları argüman vererek çalıştırılacağı zaman, .py uzantılı belge ismi 0. argüman, sonraki argümanlar da 1., 2. argüman... şeklindedir. dolayısıyla yukarıdaki komutumuzda 3 tane argüman var; belge adını kullanmayacağım için, son iki argüman olan args[1] ve args[2] gerekli olacak.
  ```python
  import sys

  args = list(sys.argv) # 3 elemanlı bir argümanlar listesi olarak args elimizde.
  ```

Python'da sistemden zaman çekmek için iki satırlık bir kod gereklidir:

  ```python
  import time

  localtime = time.asctime(time.localtime(time.time()))
  ```
Burada `print(localtime)` bize `Wed Dec 13 19:20:53 2017` çıktısını verecektir.

Bu tarih formatını, biraazcık string manipülasyonu bildiğimiz zaman istediğimiz gibi şekillendirebiliriz. Bunun için şöyle bir fonksiyon yazılabilir:

  ```python
  def turkish_localtime(time):
      # converting Sat Nov 18 14:41:01 2017 output
      # to format 18.11.2017 Cmt 14:41:01
      tr_time = time[8:10] + "."
      month = ""
      if time[4:7] == "Jun": month = "01"
      if time[4:7] == "Feb": month = "02"
      if time[4:7] == "Mar": month = "03"
      if time[4:7] == "Apr": month = "04"
      if time[4:7] == "May": month = "05"
      if time[4:7] == "Jun": month = "06"
      if time[4:7] == "Jul": month = "07"
      if time[4:7] == "Aug": month = "08"
      if time[4:7] == "Sep": month = "09"
      if time[4:7] == "Oct": month = "10"
      if time[4:7] == "Nov": month = "11"
      if time[4:7] == "Dec": month = "12"
      tr_time += month + "."
      weekday = ""
      if time[:3] == "Sat": weekday = "Cmt"
      if time[:3] == "Sun": weekday = "Paz"
      if time[:3] == "Mon": weekday = "Pzt"
      if time[:3] == "Tue": weekday = "Sal"
      if time[:3] == "Wed": weekday = "Çar"
      if time[:3] == "Thu": weekday = "Per"
      if time[:3] == "Fri": weekday = "Cum"
      year = time[20:]
      tr_time += year + " " + weekday + " "
      clock_time = time[11:16]
      tr_time += clock_time
      return tr_time
  ```
  Amacım kodda baştaki iki yorum satırında görülüyor.
  
Programın yaptıkları:

1. `args[1]`'in içindeki data `blog` ya da `cs` olabilir. Bu keyword, yazı belgesinin hangi klasörde olacağını işaret ediyor. Üreteceği linklerin tümüne bunu koyacak. 
2. blog/belge-ismi şeklinde URL üretiyor.
3. Program "Yazının adı ne olsun?" sorusunu soruyor, yazı adını aldıktan sonra bir Markdown linki üretiyor: `[Yazı adı](blog/belge-ismi)`
4. Yazıyı temsilen bir görsel istiyor. 
5. Yazıyı temsilen bir demo cümlesi istiyor.
6. Bunları aldıktan sonra Ana Sayfa'daki Son Yazılar kısmı için resimli ve tarihli bir HTML division'u üretiyor:

```html
<div class="lastone">
<a href="blog/hayalle-gercek-arasinda"><img src="https://s.mxmcdn.net/images-storage/albums/4/6/3/8/0/2/28208364_800_800.jpg"></a>
<p>
<a href="blog/hayalle-gercek-arasinda">Hayalle Gerçek Arasında</a>
<br>13.12.2017<br>Pickpocket'in 2008'de çıkan canavar gibi albümü</p>
</div>
```
not: Markdown içindeki HTML bölümlerinde indentation yapılmaz. Şu an ne kadar uygunsuz göründüğü mühim değil.

7. belge-ismi'nin sonuna `.md` uzantısı koyarak bu belgeyi üretiyor ve kendisini alıp siteye koymam için programla aynı klasörün içine koyuyor. Aslında önceden doğrudan sitenin içine koyuyordum ama bu işten vazgeçtim. 
8. Markdown belgesini açıp başına `layout: default` ve `title: Yazı Adı` gibi gerekli şeyleri ve hemen ardından yazı tarihini belgeye koyuyor.
9. Bütün bu linkleri ve div'leri, daha sonra istediğim zaman kullanmam için programımın olduğu klasördeki *TextLinks.txt* belgesine öncekileri silmeden yazıyor. 

Böylece programın geri kalanı burada:

> createpage.py
>```python
>text_date = turkish_localtime(localtime)
>
># implementing: 
>#          {{ IMAGE }}
>#           text name. 
>#             date.
># description or demo sentence
>url = args[1] + "/" + args[2] 
>lastone = "<div class=\"lastone\">\n<a href=\"" + url + "\"><img src=\""
>img_url = input("yaziyi temsilen hangi resmi koyalim?")
>lastone += img_url + "\"></a>\n<p>\n" + "<a href=\"" + url + "\">"
>text_name = input("yazinin adi ne?")
>lastone += text_name + "</a>\n"
>text_desc = input("yazi icin kisa bir cumle?")
>lastone += "<br>" + text_date[:10] + "<br>"
>lastone += text_desc + "</p>\n</div>"
>
>top_of_the_text = "---\nlayout: post\ntitle: " + text_name + "\n---\n" 
>top_of_the_text += "<p class=\"date\">" + text_date + "</p>"
>
>markdown_link = "[" + text_name + "]" + "(" + url + ")\n"
>
>filename = args[2] + ".md"
>file = open(filename, 'w', encoding="utf-8")
>file.write(top_of_the_text)
>file.close()
>file = open("TextLinks.txt", "a", encoding="utf-8")
>file.write("\n\n" + markdown_link + "\n" + lastone + "\n\n")
>file.close()
>```


