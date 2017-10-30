---
title: Temel Düzeyde HTML ve CSS
comments: true
---
<a href="../CSmain.html">&#8592; BİLGİSAYAR BİLİMLERİ</a><p2>29.10.2017</p2><br><br>
<html><head>
	<link rel="stylesheet" type="text/css" href="../markdownStyle.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="../tomorrow-night.css">
	<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
</head></html>

### Temel Düzeyde HTML ve CSS

Bir arkadaş aracılığıyla, benden eğer uygun olursam bir yerlerde buluşup bir iki saat internet sitesi tasarımı konusunda bilgi vermemin mümkün olup olmayacağı sorulmuştu. Ben de bundan zevk duyacağımı söylediysem de, daha sonra bu buluşma mümkün olmadı. Ben de geçenlerde, yalnız onun için değil, soracak olan herkes için neden bloğuma temel bir site taslağı hazırlayıp onun üzerinden birkaç bilgi vermiyorum diye düşündüm. 

Başta şunu belirtmeliyim ki, internette hiç yokmuş gibi sıfırdan bir HTML ve CSS dersi sunmaya çalışmanın tabi ki bir anlamı yok. Yeri gelmişken [w3schools.com](https://www.w3schools.com/html/) bu iki dil için çok iyi, çok tatlı bir yerdir. Zamanında çok kullandığım bir siteydi. Benim amacım ise, internette pek karşıma çıkmayan şekilde, size hazırdan bir internet sitesi taslağı sunacağım (draftSite). Bunu kurcalamanız, değiştirmeniz ve bu doğrultuda sayfada nelerin değiştiğini incelemeniz çok faydalı olabilir. Açıklamalarım ise kısa ve işin mantığını göstermeye çalışır şekilde olacak. 

Faydalı olmak dileğiyle.

**

Şimdi basit şekilde, şu web sayfasını oluşturmanın aşamalarını anlatacağım:

<img src="http://i68.tinypic.com/10wta2p.png" border="0" alt="Image and video hosting by TinyPic">

HTML sayfalarında her bir bölmeye division anlamında **div** denir. Ben de yukarıdaki görselde her bir div'in hangisi olduğunu kırmızı ile sayfa screenshot'ının üzerine yazdım.

Başlarken, Linux veya MacOs işletim sistemi üzerinde çalışıyorsanız zaten sorun yok, ancak Windows'ta iseniz, birazdan sunacağım belgeleri görüntüleyebilmek ve değiştirebilmek için, Notepad++ adlı editörü yüklemenizi öneririm. Yoksa HTML sayfalarını browser'ınızın simgesinde görüp yalnızca hazır halini görüntüleyebilecek, CSS belgesini ise hiç açamayacaksınız. Notepad++'ı [buradan](https://notepad-plus-plus.org/download/v7.5.1.html) indirebilirsiniz.

Şimdi hazırladığım çok basit bir internet sitesini size sunayım: [draftSite.rar](draftSite.rar)

Girdiğiniz tüm o internet siteleri serverlarda temelde bu şekilde depolanır. HTML, CSS, Javascript, PHP sayfaları, görseller ve klasörleri barındıran bir klasör olarak.

Yukarıdaki görseldeki gibi bir sayfayı yapmamızı sağlayan, biri HTML biri CSS olmak üzere iki kod belgesi aşağıda yer alıyor. draftSite'ın içinde de aynen bu şekilde varlar. İngilizceden anlaşılabilecek bazı şeyleri (`background-color` gibi) açıklamadım, çok kısa açıklanabilecek şeyleri de kodların içinde yorum satırı olarak açıkladım. Bunun dışındakileri burada kısaca açıklamaya çalışacağım.

```html
<!DOCTYPE html> 
<!-- Bu satır hiçbir işe yaramaz. HTML sayfalarının başına bunu yazmak gelenektir. -->

<html>
<!-- Tüm HTML sayfaları en başta bu tagle açılır, </html> tagiyle kapanır. -->
<!-- bu arada html: Hyper Text Markup Language. -->

	<head> <!-- Sayfanızın browser ve web dünyası ile konuşacağı yer burasıdır. -->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
                <!-- Sayfanızda Türkçe karakterler kullanabilmenizi sağlar. -->

		<title>Ana Sayfa (ya da başlığınız neyse o)</title>
		<link rel="stylesheet" type="text/css" href="draftStyle.css">
		<link rel="icon" href="iconResim.jpg">
	</head>
	<body><!-- Sayfanızın içeriği buradadır. -->
		<div class="header">
			<h1 style="margin-left: 25%">Websitemin Mükemmel İsmi</h1>
			<h3 style="text-align: center"><i>Websitemin Aşırı Çarpıcı Sloganı</i></h3>
		</div>
		<div class="navMenu">
			<a href="">ANA SAYFA</a> &emsp;
			<a href="digerSayfa.html">DİĞER SAYFA (buraya tıklayın)</a> &emsp;
			<a href="">İLETİŞİM</a> &emsp;
			<a href="">HAKKIMIZDA</a> &emsp;
			<a href="">FALAN</a>
		</div>
		<div class="mainZone">
			<div class="rightFrame">
				<ul>
					<li><a href="">link</a></li>
					<li><a href="">link</a></li>
					<li>maddeler</li>
					<li>maddeler</li>
				</ul>
			</div>
			<p>	
				game of thrones'a adanmış bir eser:<br><br>

				reyizin piçi çıktı büyük duvara<br>
				sarı cüce düştü karıya kumara<br>
				haber salın ceymi denen davara<br>
				winterfellden yola çıktı yiğitler<br><br>

				yola çıkın çadırları toplayın<br>
				atlarılan ovaları kaplayın<br>
				drogo derler yiğit öldü ağlayın<br>
				winterfellden yola çıktı yiğitler<br><br>

				kuzeyde mavi gözlü iblis ürüdü<br>
				winterfelli bembeyaz kar bürüdü<br>
				reyiz öldü bir boz kurt uludu<br>
				winterfellden yola çıktı yiğitler...<br><br>

				anan vermiş öz dayına meyili<br>
				yok nasılsa olsa zinanın delili<br>
				cofri piçi senin günlerin sayılı<br>
				winterfellden yola çıktı yiğitler<br><br>

				ibne imiş şol lordların hepisi<br>
				yılan imiş robert reyizin karısı<br>
				seni bulacaam olm cofri sarısı<br>
				winterfellden yola çıktı yiğitler<br><br>

				jorah reyiz ak saçlıya boş değil<br>
				taze dula bu yaptığı hoş değil<br>
				gönül sevmiş,gizli sevda suç değil<br>
				winterfellden yola çıktı yiğitler<br><br>
				
			</p>
		</div>
		<div class="footer">
			<ul>
				<li><a href="">Footer için linkler</a></li>
				<li><a href="">Footer için linkler</a></li>
			</ul>
			Kimse benim sitemin içeriğini bana para vermeden kullanamaz. Vesaire.
		</div>
	</body>
</html>
```

Bu arada sayfadaki şiir Ekşi Sözlük'ten hieron adlı yazardan bir alıntıdır.

`<link rel="stylesheet" type="text/css" href="draftStyle.css">`: HTML sayfamızın, şekillendirici olan CSS sayfamızla bağlantısını kuracak olan satır bu. Sayfamızın, style komutlarını bil css belgesinden okuyacağını, bu belgenin adının da **draftStyle.css** olacağını ifade ediyor. Ben genelde CSS belgelerimin adını, ana sayfamın adının sonuna **Style** eklenmiş halde koyarım.

`<link rel="icon" href="iconResim.jpg">`: Browser sekmenizin, sayfa başlığının hemen yanında bulunacak küçük ikon bir resim içereceğini, bu resmin de aynı klasörde bulunan **iconResim.jpg** olacağını ifade eder. Benim bloğumun sekmesine baktığınızda gördüğünüz lacivert-siyah font üzerine kar kristali simgesi de bu şekilde yapıldı. Taslak site olan draft'a ise yedi köşeli uyduruk bir yıldız çizip koydum. iconResim odur.

tepedeki açık mavi alanın adını header koyduk ki bu geleneksel bir isimdir. Buraya yazacağımız her şeyi

	<div class="header">
	
	</div>

arasına yazmalıyız. `class` keywordü, bize CSS belgemizde `.header {}` arasına yazacağımız tüm kodların, bu div'i şekillendirebilmemizi sağlayacak. Bu durum bütün div'ler ve onları dahil edeceğiniz class'lar için geçerli. Biraz altında da `<div class="navMenu">` var örneğin. Aşağıdaki CSS belgesine bakarsanız, bunların tümünün nasıl şekillendirildiğini görürsünüz.

HTML'de her şey <> tagiyle açılıp </> tagiyle kapanır. Bu taglerin adı, bir anlamda bunların arasına yazacağınız şeylerin komutudur. Örneğin bir sondaki satırda, **h1** büyük başlık anlamına gelir (HTML'de default olarak 1'den 6'ya kadar küçülen başlıklar vardır: h1, h2, ... h6). Böylece <h1>Site Adı</h1>, "Site Adı" sözcüklerinin bir h1 başlık olacağını belirtiyor. Site adımızı bu sayede büyük fontta görüyoruz. 

h1'in hemen yanında bulunan `style="..."`, aslında bir CSS kodu. Ayrı belgede yazılacak kadar uzun ve önemli olmayacak birtakım biçimlendirme kodlarını HTML içinde style diye başlayarak da yazabilirsiniz.

`margin`: bunu yazdığınız div ile, yakınındaki başka bir öğe arasında boşluk bırakır. Yani, `h1 style="margin-left: 25%"` demek, bu h1 başlığı ile solundaki ilk öğe arasında, ekranın %25'i kadar bir boşluk bırak demektir. Bunu yazmasaydık, başlığımız ekranın en soluna yapışık şekilde çıkardı. `margin-left`, `margin-right`, `margin-top` ve `margin-bottom` şeklinde versiyonları vardır.

`text-align`, bulunduğumuz div'de yazıların nerede bulunacağını belirtir. `text-align: right` yazdığımız bir div'de, yazıların tümü sağa yapışış olarak ortaya çıkacaktır.

`<a href="https://...">link haline gelecek sözcük ya da sözcükler</a>`: kodu link yapabilmemizi sağlayan koddur. Kodun kendisinden de anlaşılabildiği üzere `href=" "` içine yazılanlar gidilecek yer, Türkçeyle yazdığım yer de belirttiğim şey oluyor. 

`&emsp;` simgesi sayfada birkaç boşluk bırakmanızı sağlar (4 whitespace kadardı yanlış hatırlamıyorsam). Unutmayın ki HTML'de koyacağınız birden fazla boşluk ya da satır atlamak için bastığınız enter gibi tuşlar bir işe yaramaz (tabi eğer `<pre>` tagi içinde değilseniz). Satır atlamak için de break anlamında `<br>` kullanıyoruz örneğin. Çok kullandığım bir komut.

Bunun gibi, **unordered list** anlamına gelen `<ul>`, **paragraph** anlamına gelen `<p>` (en yaygın HTML taglerinden biri) gibi satırlar görebilirsiniz. Dediğim gibi, bunlar ve çok daha fazlası birçok internet sitesinden öğrenilebilir. Umarım işin özünü az çok anlatabilmişimdir.

```css
body {
	background-color: #3a354a;
}
.header {
	background-color: #ccccff;
	height: 100px;
}
.navMenu {
	background-color: white;
	height: 30px;
	padding-left: 25%; /* içeriklerin (yazı vs.) div duvarlarına yapışmamasını sağlar. */
}
.navMenu a { /* "a" linkler, ".navMenu a" da yalnız navMenu'deki linkler anlamına gelir. */
	font-family: Arial;
	font-style: bold; 
}
.mainZone {
	background-color: #e3e1ea;
	margin-left: 25%; 
	margin-top: 20px;
	display: block;
	width: 50%; 
	padding: 20px; /* sağına soluna left vs konmadığında, dört tarafa da boşluk bırakır.*/
}
.rightFrame {
	background-color: #9999ff;
	font-family: Arial;
	display: block;
	width: 25%;
	float: right;
	padding: 10px;
}
.footer {
	background-color: black;
	color: white;
	margin-top: 20px;
	height: 200px;
	padding-left: 50%;
	font-family: Arial;
}
p, h1, h2, h3 { /* teker teker yazmak yerine virgül, bunların hepsi için geçerli anlamında. */
	font-family: "Arial Black", Gadget, sans-serif;
}
```

Bu da bahsedip durduğum CSS sayfamız. Bu olmasa, tüm web sayfaları beyaz üstüne siyah Times New Roman ile sola yaslı halde yazılmış yazılardan oluşurdu. CSS, kullanmayı çok sevdiğim, basit ve açık, zevkli ve aynı zamanda çok güçlü bir şekillendirici dil (**C**ascade **S**tyle **S**heet). Bu dilin de aynı şekilde birçok ayrıntısı [w3schools'un css tutorial'ı](https://www.w3schools.com/css/default.asp)ndan öğrenilebilir. Çok kısa açıklanabilecek bazı şeyleri de yorum satırı olarak yazdım; margin gibi kimi kısımları da HTML kodunun altında anlatmıştım. Ben burada sadece, HTML sayfamızda en başta kırmızı yazılarla gösterdiğim her bir div'in, nasıl başlarına "." konarak class'ları belirtilip, şekillendirilebildiklerini göstermek istedim. Birçoğu İngilizce karşılıklarından anlaşılabiliyor. Açıklamaya değer buldum birkaç noktayı da aydınlatmaya çalışarak yazımı sonlandıracağım. 

`#3a354a` gibi renk kodları: CSS'te renk belirmenin temelde üç yolu vardır:

1. İsim belirterek bazı renkleri ifade edebilirsiniz. black, red, blue, green, hatta SlateBlue ya da GhostWhite gibi birtakım renkler HTML ve CSS'te default olarak vardır.

2. Hex kodu belirterek: #3a354a bir hex kodudur (Latincede 6 anlamına gelen **hexa**'dan gelir). #ffffff beyazı, #000000 siyahı ifade eder. Arasında, ezberlemenin tamamen saçma olacağı 24-bit renk hex kodu ile ifade edilebilir.

3. rgb ile belirterek: Kullanmayı en sevdiğim renk kodu şekli ise rgb'dir. Red Green Blue anlamına gelen rgb ile, bu renkleri 0'dan 255'e kadar derecelendirerek, grafik tasarımla azıcık ilgilenmiş ya da benim gibi çocukluğunu microsoft paint başında geçirmiş herkesin bildiği gibi, 24-bit rengin tümünü elde edebilirsiniz. rgb(0,0,0) siyah, rgb(255,255,255) beyaz, rgb(255,0,0) kırmızı... gibi. Not: Neden 255? Çünkü 2^8 - 1. Yani 8 bit = 1 byte.

Not: Bu yazıyı yazdığımın ertesi günü baktım, bunların dışında CSS versiyonuna bağlı olarak **hsl**, **hwb**, **cmyk** ve **Ncol** diye renk belirtme kodları da varmış ama, İngilizcede bir laf vardır: Neither I know, nor I care.

Tüm bu renklere [şuradan](https://www.w3schools.com/colors/colors_picker.asp) bakabilirsiniz.

`display: block;`: div'inizde bir height belirtirseniz, örneğin `height: 200px` gibi, div'iniz 200 piksel yüksekliğinde sabit duracaktır ve içine ne kadar uzun yazılar yazarsanız yazın bu yazılar 200 pikselden sonra dışarı taşıp aşağı doğru devam edecektir. `display: block;` kodu, divinizin, içeriği kadar yükselmesini sağlayacaktır. Yazdığınız yazılarla birlikte div de genişler. Uyarı: display block yazıyorsanız `height` kodunuzun olmaması gerekir.

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