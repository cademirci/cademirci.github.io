---
title: Orta Düzeyde HTML ve CSS
---
<a href="../CSmain.html">&#8592; BİLGİSAYAR BİLİMLERİ</a><p2>29.10.2017</p2><br><br>
<html><head>
	<link rel="stylesheet" type="text/css" href="../markdownStyle.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="../tomorrow-night.css">
	<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
	<style>
			.box {
				background-color: black;
				height: 200px;
				width: 200px;
			}
			@media screen and (max-width: 500px) {
				.box {
					background-color: red;
				}
			}
	</style>
</head></html>

### Orta Düzeyde HTML ve CSS 

#### CSS ile Sayfanın Smartphone Ekranı İçin Senkronizasyonu

Kullanıcıların internete girdiği cihazların oranına baktığımızda telefonların bilgisayarları geçtiği bu onyılda, websitesi tasarlarken sayfanın tablet ve telefon gibi cihazlar için de verimli olması ve şık görünmesi, iyi hesaplanması elzem bir olgu haline geldi.

Aslında bunun için yazmamız gereken kodlar oldukça basit. Öncelikle, HTML sayfamızda `<head></head>` içine şu kodu yerleştirmemiz gerek: 

`<meta content='width=device-width, initial-scale=1' name='viewport'/>`

CSS kodunu hiç karıştırmadan HTML'i bu şekilde kodlamak bile bazı şeyleri hallediyor. Örneğin bir background renginin üstüne düz yazıdan oluşan, div'siz ya da tek div'li bir sayfamız olsa, bu kod, o sayfanın tüm cihazlar için senkronizasyonunu sağlardı. Ancak doğal olarak böyle bir sayfa düşünmek anlamlı olmaz. Bu noktada birkaç CSS kodu yardımımıza koşuyor. Bunun için:

`@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {}` syntaxında bir blok kullanılıyor. Örneğin bu site için eklediğim kod şu:

```css
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) { /* for phone screens */
	.footer,
	.footerLinksZone,
	.header,
	.headerLinksZone,
	.mainZone {
		width: 95%;
		margin-left: 0px;
		margin-right: 0px;
	}
	p,
	.footerLink {
		font-size: 1em;
	}
	.headerLink {
		font-size: 0.85em;
	} 
	.mainZone,
	.footer,
	body {
		background-color: rgb(15,15,15);
	}
	.footer {
		margin-bottom: 0px;
	}
}
```

CSS, cihaz ekranı belirtilen değerler aralığındaysa, bu blok içinde belirtilen div'ler için yazdığımız bu özellikleri kullanıyor. 

Hatta `@media`nın bir özelliği daha var. `max-device-width` değil de `max-width` yazarsanız, kendi bilgisayarınızda da bu ekran değişimini, browser penceresinin boyutlarıyla oynayarak gözlemleyebilirsiniz. Örneğin, aşağıda yazdığım kod sayesinde, bu sayfayı küçültürseniz şu siyah kutucuğun rengi kırmızı olacak. (Bu sayfaya telefondan girdiyseniz zaten kırmızı olacak.)

<div class="box">
</div><br>

```css
<style>
	.box {
		background-color: black;
		height: 200px;
		width: 200px;
	}
	@media screen and (max-width: 700px) {
		.box {
			background-color: red;
		}
	}
</style>
```

***

#### Default Desteklenmeyen Yazı Fontlarının Kullanımı

Bunun için "download font" google'layıp, beğenilen bir fontu (.otf veya .ttf uzantılı olurlar) seçip site klasörümüze yüklemekle başlamamız gerekiyor. Devamı da son derece kısa ve kolay:

```css
p2 { /* Gothic Style Font */
	font-family: myGothicFont;
	font-size: 2em;
	color: red;
} @font-face {
		font-family: myGothicFont;
		src: url(DrawGothic.ttf);
}
```

Bundan sonra istediğimiz yerde `<p2></p2>` diyerek ya da `<p style="font-family: myGothicFont;"></p>` şeklinde yazımızı kullanabiliriz.

```html
<p>Thorns of crimson death is a divine black metal song.</p>
<p2>Thorns of crimson death is a divine black metal song.</p2> 
```
<img src="http://i67.tinypic.com/2r2xbly.png" border="0" alt="Image and video hosting by TinyPic">

Aslında yazarken bu kadar eğreti duracağını düşünmemiştim ama anlatmak istediğimi anlattım sanıyorum. Siz siz olun verdana, open sans, helvetica gibi klasik ve profesyonel görünümünü kaybetmeyen fontlardan vazgeçmeyin.

***

#### İstenilen Şekilde Syntax Hightlighting 

Klasik bir HTML-CSS kombinasyonunda, sayfada paylaşmak istediğiniz kodları `<code><pre> </pre></code>` tagleri içinde yazmalısınız. Ancak bu hiçbir şey eklemediğiniz takdirde, kodlarınızın yalnız CSS kodu olarak `.code{}` ya da `.pre{}` blokları içine yazacağınız iki renkten (yazı ve arkaplan) oluşmasını sağlar.

Ekleyeceğiniz şey, `<head> </head>` içine yazacağınız şu kodlar olmalı:

```html
<link rel="stylesheet" href="tomorrow-night.css">
<script src="highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
```

Zira bu, sayfanızda paylaşım amaçlı birtakım kodlar bulunacağını, bunları renklendireceğinizi (buna highlighting denir), bunu highlight.pack.js adlı javascript kodu belgesi sayesinde yapacağınızı, bu yüzden de hljs.initHighlightingOnLoad() fonksiyonunu çağırmanız gerektiğini, bir de unutmadan bu iş için de tomorrow-night.css adlı siyah üstüne koyu renkler ihtiva eden seksi temayı seçtiğinizi ifade eder. Javascript kodunu sayfamdaki [şuradan](../highlight.pack.js), tomorrow night temasını da [buradan](../tomorrow-night.css) indirebilirsiniz. Ayrıca, [şu](https://highlightjs.org/) siteye giderek, birçok tema arasından istediğinizi indirebilirsiniz. Hatta temaların hepsinin demolarını da [buradan](https://highlightjs.org/static/demo/) görebilirsiniz.

Ek olarak, eğer sitenizi benim gibi Github ve Jekyll kullanarak oluşturmuşsanız ve içeriklerini markdown sayfalarıyla oluşturuyorsanız, Github size zaten default syntax highlighting hizmeti sunuyor; beyaz üstüne koyu renkerin olduğu Github adlı temayı kullanıyorsunuz (bir üst paragraftaki linkte var). Ama başka bir tema kullanmak isterseniz yine benim bu yazdıklarımı yapmalısınız. Markdown sayfalarına da HTML'miş gibi `<head>` içinde komutlar yazabiliyorsunuz. 

<br>