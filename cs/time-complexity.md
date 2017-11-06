---
title:
comments: true
---
<a href="../CSmain.html">&#8592; BİLGİSAYAR BİLİMLERİ</a><p2>06.11.2017</p2><br><br>
<html><head>
	<link rel="stylesheet" type="text/css" href="../markdownStyle.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="../tomorrow-night.css">
	<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
</head></html>

## Zaman Karmaşıklığı

Büyük inputlarla uğraşıldığı zaman, Dynamic Programming kavramının büyük önemi oluyor. Halihazırda doğru çalışan bir kodun zaman karmaşıklığını (Time Complexity) azaltabilmek, yazılım mühendisliğde çok önemli çalışma alanlarından biri. Bu başlık altında bu işlerin nasıl yapıldığına dair birkaç çok temel örnek göstereceğim.

Bu üç örnek de geçen yıl aldığım Data Structures dersinde gördüğüm örneklerdi. Bir yerlere not etmişim, gördüm ve bloğuma koyayım dedim. İlk örnekteki yöntemler sadece cümle ile ifade edilmişti. Onları bugün **Python** ile kodladım. Diğer iki örnek geçen yıl yazdığım **Java** kodları.

#### ex#1

A: {0, 1} matrisinin tanım gereği her satırı önce 1'lerden, sonra 0'lardan oluşuyor. Her satırdaki 1 sayısı altındaki satırdakinden büyük veya eşittir. Bu matris şuna benzer;

	11111111111000
	11111111000000
	11111111000000
	11111000000000
	11110000000000
	11000000000000

Problemimizde 1'lerin sayısı isteniyor. Bu problem brute force ile kolaylıkla çözülebilir: nested iki adet for loop döndürerek 1'leri sayarsınız. 

```python
num_of_1s = 0
loop_count = 0
for i in plane:
    for j in i:
        loop_count += 1
        if (j == '1'):
            num_of_1s += 1
print("number of 1s:", num_of_1s)
print("Loop", loop_count, "times turned.")
```

	number of 1s: 38
	Loop 84 times turned.
*Time Complexity: O(n^2)*

Bunun ikinci çözümü şudur:

```python
num_of_1s = 0
loop_count = 0
col = len(plane[0]) # number of columns
row = len(plane) # number of rows
for i in range (0,row):
    for j in range (0, col):
        loop_count+= 1
        if (plane[i][(col - j - 1)] == '1'):
            num_of_1s += (col - j)
            col -= (j-1)
            break
print("number of 1s:",num_of_1s)
print("Loop", loop_count, "times turned.")
```

	number of 1s: 38
	Loop 23 times turned.
*Time Complexity: O(nlogn)*

84 ile 23 sayıları arasındaki fark bilgisayar açısından yok denecek kadar az olabilir. Ancak bunun sebebi inputumuzun çok küçük olması. milyarXmilyar'lık bir matristeki farkı düşünmekte yarar var.

İki kodun izlediği yollar aşağıdaki gibi: Kırmızı olanlar, kodun kontrol ettiği sayıları temsil ediyor:

![](http://i64.tinypic.com/25ibuqe.png)

#### ex#2

Java ile iki şekilde üstel fonksiyon kodlayalım:

```java
public static int pow(int base, int p) {
    if (p == 0)
        return 1;
    else return base*pow(base, p-1);
}
```
*Time Complexity: O(N)*

```java
public static int pow(int base, int p) {
    if(p == 1)
        return base;
    else if(p == 0)
        return 1;
    else if(p % 2 == 0) {
        int a = pow(base, p/2);
        return a*a;
    }
    else {
        int a = pow(base, p/2);
        return a*a*base;
    }
}
```
*Time Complexity: O(logN)*

#### ex#3

Üçüncü örneğimizde iki adet aynı boyutlu array olsun. arr2'nin her bir elemanı, arr1'de 0'dan eleman numarasına kadar olan sayıların ortalamasıdır. yani:

arr1: 0 4 2 6 ... i ... N
arr2: 0 2 3 3 ... Sigma(0'dan i'ye) / i ... Sigma(0'dan N'ye) / N

```java
int a = 0;
for (int i = 0; i < arr2.length; i++) {
    for (int j = 0; j <= i; j++) {
        a += arr1[j];
        arr2[i] = a/(i+1);
    }
    a = 0;
}
```
*Time Complexity: O(N^2)*

```java
int a = 0;
for (int i = 0; i < arr1.length; i++) {
    a += arr1[i];
    arr2[i] = a/(i+1);
}
```
*Time Complexity: O(N)*


<br><br><br>
<script id="dsq-count-scr" src="//caglayandemirci-github-io.disqus.com/count.js" async></script>
<a href="http://foo.com/bar.html#disqus_thread"></a>
{% if page.comments %}
<div id="disqus_thread"></div>
<script>
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://caglayandemirci-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>                       
{% endif %} 
<br>