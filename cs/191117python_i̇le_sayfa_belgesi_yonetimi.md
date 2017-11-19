---
title: Python İle Sayfa Belgesi Yönetimi
comments: true
---
<a href="../CSmain.html">&#8592; **BİLGİSAYAR BİLİMLERİ**</a><p2>19.11.2017 Paz 22:40:58</p2><br><br>
<html><head>
<link rel="stylesheet" type="text/css" href="../markdownStyle.css">
<link rel="icon" href="../coloricon.png">
<link rel="stylesheet" href="../githubSH-Dark.css">
</head></html>
## Python İle Sayfa Belgesi Yönetimi

`Create_Page` diye bir python programı yazdım. Siteme yazı eklerken kullandığım ufak ve tatlı bir program oldu. Jekyll kullanmayan, normal php-kontrollü serverlarda `php` ile yapılan işi ben kendi bilgisayarımda python çalıştırarak yapıyorum diye düşünülebilir. Ben Markdown editörden, word dosyasına yazı yazar gibi yazımı tamamlıyorum. Ardından Programın yaptıkları şöyle: 


1) O Word'e yazı yazar gibi yazıyorum dediğim belgenin adını her zaman için `empty_md_page.md` koydum. Program bu belgeyi okunmak açıyor. 


2) Markdown sayfalarında kullandığım en büyük başlık `##` ile başladığından, program bu işaret ile başlayan satırı bulup bunun markdown belgesinin ismi olacağını varsayıyor ve bana soruyor: `belge ismin baslik gibi olsun mu? (y/n)`


3) "y" cevabını verdiğim anda, örneğin bu sayfada, "Python İle Sayfa Belgesi Yönetimi" stringini alıp büyük harfleri küçültüyor, Türkçe karakterleri latin versiyonlarıyla değiştiriyor, boşlukların yerine de alttire koyuyor: `python_ile_sayfa_belgesi_yonetimi`


4) Program çalıştığı anda bigisayardan aldığı zaman ile sayfaya bir yazılma/oluşturulma zamanı atıyor. Bunun belge adının başına koyulacak kısmı da "19.11.2017" bilgisinden aldığı, aralarda noktasız bir şekliyle şöyle: `191117`. Bunu da belge adının başına ekliyor Ardından markdown sayfalarının uzantısı olan  `.md`'yi de eklediğinde belge adımız hazır: `191117python_ile_sayfa_belgesi_yonetimi.md`
	- 2. maddede "n" cevabını verseydim ikinci soruyla karşılaşacaktım: `peki ne olsun?`. Ardından girdimi isim olarak alacaktı (_ gibi şeyleri koyup koymamak bana kalmış) ve kendisi başına tarihi, sonuna da .md'yi ekleyecekti.


5) Daha sonra bana sorduğu soru: `directory?` (Windows'ta klasör isimleri "folder"dır ama Linux dili kullanmayı hep daha çok sevmişimdir). Klasör adını `cs` (computer science) ya da `blog` şeklinde giriyorum. Bu belge adını kullanarak daha sonra bir *link adı*, bir de *yol adı* oluşturuyor. Örneğin oluşturduğu link şu: `https://caglayandemirci.github.io/cs/191117python_ile_sayfa_belgesi_yonetimi.md`. Öte yandan path_name'de tuttuğum isim ise, bu siteyi offline şekilde barındırdığım klasörümün yolunu ifade ediyor. Orada cs ve blog adında iki klasör var, program belgeyi oluşturup onu bu klasörlerden uygun olanın içine koyuyor.  


6) Markdownda, browser sekmesi ismi koymak şu şakilde yapılır:

```
---
title: 
---
```
html'de `<header>` içindeki `<title>` yani bu. 3. maddede ## önünde görerek aldığı başlık adını buraya olduğu gibi koyuyor. Türkçesiyle falan.


7) 
```python
if cs:
    file_content += "<a href=\"../CSmain.html\">&#8592; **BİLGİSAYAR BİLİMLERİ**</a><p2>" + text_date + "</p2><br><br>"
else:
    file_content += "<a href=\"../index.html\">&#8592; **BLOG**</a><p2>" + text_date + "</p2><br><br>"
```

sayesinde, bu sayfanın başında gördüğünüz, uygun olan ana sayfaya (cs ya da blog, burada cs) link veren "**BİLGİSAYAR BİLİMLERİ**" ve sağa yapışık (`markdownStyle.css` belgesinde `float: right;`) tarihler bu şekilde oluşturuluyor.


8) Markdown da html taglerini kabul ettiğinden, ben şu ana kadar css, kod renklendirme, browser sekmesi ikonu gibi belgeleri burada atadım. **Kramdown** gibi yapılarda daha basit şekilde yapılıyor ama ihtiyaç duymadım. Başından beri böyle yaptım. Böylece program belgeye şunu da doğruca ekliyor:

```html
<html><head>
	<link rel="stylesheet" type="text/css" href="../markdownStyle.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="../tomorrow-night.css">
	<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
</head></html>
```


9) empy_md_page'de yazdığım içeriği ekliyor.

10) Disqus yazılım markası taşıyan yorum kutularının sayfa yerleşim kodunu ekliyor:

```html
<br><br><br>
<script id="dsq-count-scr" src="//caglayandemirci-github-io.disqus.com/count.js" async></script>
<a href="http://foo.com/bar.html#disqus_thread"></a>
{% if page.comments %}
<div id="disqus_thread"></div>
<script>
(function() { 
var d = document, s = d.createElement('script');
s.src = 'https://caglayandemirci-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>                       
{% endif %} 
<br>
```

11) Program, sitede `index.html` (blog) veya `csmain.html` için bir html tagi sunuyor. Ana sayfalarımdaki "SON YAZILAR" başlığı altındaki linklerin şekli şemali tam olarak bu. Program bana `ufak bi description?` sorusu yönelterek "Bu siteden örneklerle kısaca:" gibi şeyler yazmama olanak tanıyor. Boş kalmasını tercih edersem de souyla birlikte enter'a basıyorum. 

`<p>19.11.2017 - Bu siteden örneklerle kısaca: <a href="https://caglayandemirci.github.io/cs/191117python_ile_sayfa_belgesi_yonetimi.md">Python İle Sayfa Belgesi Yönetimi</a></p>`

12) Son olarak, eğer bu linki tam o anda kopyalayıp sayfaya koymak istemezsem, bu işi daha sonra yapmak istersem diye, linki alıp bilgisayarımda bir txt dosyasının içine koyuyor. 

Programı çalıştırdığımda ve yazacaklarımı yazdığımda, terminal ekranının son hali şu:
![](http://i67.tinypic.com/azcggp.png)

Böylece birazcık daha profesyonel bir site yönetimine sahip olmuş oluyoruz. Ama her zamanki gibi çokça eksik var. Bunlar zamanla giderilebilir. Adamların bir yazılıma neden sürekli update getirdiklerini, insan yazılımla uğraşınca anlıyor.

Kodun tamamı, kendi bilgisayarımın içindeki yolları gösteren yerlerde " _path_ " olacak şekilde en aşağıda.

*

### Zaman Yazdırma ve Şekillendirme

Python'da aşağıdaki kodu yazdığınızda:

```python
import time

localtime = time.asctime(time.localtime(time.time()))
print (localtime)
```

`Sat Nov 18 14:41:01 2017` çıktısını verir. Bu çıktı şu an `localtime` stringinin içinde. Aslında bunu bu şekilde kullanmak da bir seçenek; ilk bakışta akla gelebilecek "İngilizce bilmeyenler için okunması zor" gibi bir mazereti yok, az çok anlaşılıyor. Ancak biraz kendi baharatımızı katmak adına, bunu istediğimiz gibi şekillendirebiliriz. String kontrolü, yazılımda önemli yeri olan konulardan biridir. 

Ben bunun için şu fonksiyonu yazdım:

```python
def turkish_localtime(time):
    # converting Sat Nov 18 14:41:01 2017 localtime output
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
    clock_time = time[11:19]
    tr_time += clock_time
    return tr_time

text_date = turkish_localtime(localtime)
```

Artık `text_date` değişkeni, `18.11.2017 Cmt 14:41:01` şeklindeki stringi tutuyor. Kısa bir Python String öğretisi:

5 random bir sayı ve `str` stringimizin ismi olmak üzere;

`str[5]`: 5. indexteki karakter
`str[:5]`: 5. indexe kadar olan substring (5. dahil değil)
`str[5:]`: 5. indexten sonraki substring (5. dahil)
`str[5:7]`: 5. ve 7. indexler arasındaki substring
`len(str)`: str'nin uzunluğu
`str + another_str` veya `str + "dogrudan string icerigi"`: Bu da stringlerin birleşiminin nasıl yapılacağını gösteriyor.

Kesip biçmek, sağa sola eklemek, farklı isimler vermek size kalmış.

*

```python
import time
#-*-coding:utf-8-*-

localtime = time.asctime(time.localtime(time.time()))

def turkish_localtime(time):
    # converting Sat Nov 18 14:41:01 2017 localtime output
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
    clock_time = time[11:19]
    tr_time += clock_time
    return tr_time
text_date = turkish_localtime(localtime)
# converted.

text = open("empty_md_page.md", "r", encoding="utf-8")
strTxt = text.read()
lines = (strTxt.split("\n"))

ans = input("belge ismin baslik gibi olsun mu? (y/n)")
name_date = text_date[:2] + text_date[3:5] + text_date[8:10]
# name_date: ddmmyy

title, name, link_name = "", "", ""
while True:
    if ans == "y":
        for i in range (0, len(lines)):
            if lines[i][:3] == "## ":
                title = lines[i]
        title = title[3:]
        # title: Test İçin Başlık
        mdp_title = title 
        title = title.lower()
        for i in range (0, len(title)):
            if title[i] == 'ç': name += 'c'
            elif title[i] == 'ı': name += 'i'
            elif title[i] == 'ğ': name += 'g'
            elif title[i] == 'ö': name += 'o'
            elif title[i] == 'ü': name += 'u'
            elif title[i] == 'ş': name += 's'
            elif title[i] == " ": name += "_"
            else: name += title[i]
        break
    elif ans == "n":
        name = input("oyleyse ne olsun?")
        mdp_title = name
        break
    else:
        ans = input("adam gibi 'y' ya da 'n' yazar misin?")
# name: test_icin_baslik
name = name_date + name

cs = True
while True:
    directory = input("directory?")
    if directory == "cs":
        path = " _path_ " + name + ".md"
        link_name = "https://caglayandemirci.github.io/cs/" + name
        break
    elif directory == "blog":
        path = " _path_ " + name + ".md"
        link_name = "https://caglayandemirci.github.io/blog/" + name
        cs = False
        break
    else:
        print("dayrektori'yi yalnis yazdin galiba.")
        
# final file name (name): 181117test_icin_baslik
# final file path (path):  _path_ 
# final link name (link_name): https://caglayandemirci.github.io/cs/181117test_icin_baslik

file = open(path, 'w', encoding="utf-8")
file_content = "---\ntitle: " + mdp_title + "\ncomments: true\n---\n"

if cs:
    file_content += "<a href=\"../CSmain.html\">&#8592; **BİLGİSAYAR BİLİMLERİ**</a><p2>" + text_date + "</p2><br><br>"
else:
    file_content += "<a href=\"../index.html\">&#8592; **BLOG**</a><p2>" + text_date + "</p2><br><br>"

header = open(" _path_ ", "r", encoding="utf-8")
header_content = header.read()
file_content += "\n" + header_content + "\n"
header.close()
# html header codes added.

for i in range (0, len(lines)):
    file_content += lines[i] + "\n"
# text content added.

disqus = open(" _path_ ", "r")
disqus_codes = disqus.read()
file_content += "\n" + disqus_codes
disqus.close()
# comment box codes added.

file.write(file_content)
text.close()
file.close()
# we are done with the markdown file

desc = input("ufak bi description?")
html_link = "<p>" + text_date[:10] + " - " + desc + " " + "<a href=\""
html_link += link_name + "\">" + mdp_title + "</a></p>"
print ("\n\n" + html_link + "\n\n")
print ("yazini basariyla offline sitene upload ettik. O da html linki.")
print ("daha sonra kopyalayacagim: support_dir/html_links.txt")
file = open("../html_links.txt", "a")
file.write(html_link + "\n")
file.close()
ans = input("enter for ok")
```




<br><br><br>
<script id="dsq-count-scr" src="//caglayandemirci-github-io.disqus.com/count.js" async></script>
<a href="http://foo.com/bar.html#disqus_thread"></a>
{% if page.comments %}
<div id="disqus_thread"></div>
<script>
(function() { 
var d = document, s = d.createElement('script');
s.src = 'https://caglayandemirci-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>                       
{% endif %} 
<br>