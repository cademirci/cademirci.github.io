---
title: Temel Düzeyde HTML ve CSS
---
<a href="../csmain.html">&#8592; BİLGİSAYAR BİLİMLERİ</a><p2>27.10.2017</p2><br><br>
<html><head>
	<link rel="stylesheet" type="text/css" href="../markdownStyle.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="../tomorrow-night.css">
	<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
</head></html>

### Temel Düzeyde HTML ve CSS

```html
<!DOCTYPE html> 
<!-- Bu satır hiçbir işe yaramaz. HTML sayfalarının başına bunu yazmak gelenektir. -->

<html>
<!-- Tüm HTML sayfaları en başta bu tagle açılır, </html> tagiyle kapanır. -->

	<head> <!-- Sayfanızın browser ve web dünyası ile konuşacağı yer burasıdır. -->
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
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
				winterfellden yola çıktı yiğitler<br>
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

<img src="ss1.png">

[Site Taslağı](draftSite.rar)

<br>