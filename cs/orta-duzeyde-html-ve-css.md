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

Hatta `@media`nın bir özelliği daha var. `max-device-width` değil de `max-width` yazarsanız, kendi bilgisayarınızda da bu ekran değişimini, browser penceresinin boyutlarıyla oynayarak gözlemleyebilirsiniz. Örneğin, aşağıda yazdığım kod sayesinde, bu sayfayı küçültürseniz şu siyah kutucuğun rengi kırmızı olacak.

<div class="box">
</div>

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