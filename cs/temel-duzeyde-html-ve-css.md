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

<!-- -->

<html>
<!-- Tüm HTML sayfaları en başta bu tagle açılır, </html> tagiyle kapanır. -->

	<head>
	<!-- Sayfanızın browser ve web dünyası ile konuşacağı yer burasıdır. 
	Bunları şimdi ifade edeceğim. -->
	
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>  
		<!-- Türkçe karakterler kullanabilmenizi sağlar -->
		
		<meta content='width=device-width, initial-scale=1' name='viewport'/>  
		<!-- Browser'a sitenizin ayrı cihazlarda kullanımı için boyut ayarı 
		yapması gerektiğini bildirir-->
		
		<title>Ana Sayfa (ya da ne yazıyorsanız o)</title>
		<!-- Sayfanızın browser sekmesinde görülen başlığıdır -->
		
		<link rel="stylesheet" type="text/css" href="draftStyle.css">
		<!-- Sayfanızın bir CSS belgesi ile şekillendirileceğini, bu belgenin de adının 
		draftStyle.css olacağını bildirir. Ben genelde bu belgeleri, ana sayfamın adının sonuna 
		birleşik olarak Style sözcüğü eklenmiş halde isimlendiririm. -->
		
		<link rel="icon" href="iconPicture.png">
		<!-- Sayfanızın browser sekmesinde taşıyabileceği küçük resimdir. Buraya eklemek için 
		tesadüfen .png uzantılı bir resim buldum. Bunlar çok küçük ve ayrıntısız olacağından 
		jpg de tercih edilebilir. -->
			
	</head>
	<!-- head tagi kapanışı. -->
	
	<body>
	<!-- Sayfanızın içeriği buradadır. -->
	
		<div class="Header">
		<!-- Sayfada her bir ayrı bölme, division anlamına gelen "div" ile ifade edilir. 
		class ise, CSS belgesiyle bağlantı kurmamızı ve bunu orada şekillendirebilmemizi 
		sağlayacak. -->
		
			<h1 class="SiteTitle">Sitemin Muhteşem İsmi</h1>
			<div class="NavigationMenu">
				<a href="">Link</a> &emsp; 
				<!-- &emsp; simgesi birkaç boşluk bırakabilmenizi sağlar 
				(sanırım 4 whitespace kadardı)-->
				
				<a href="">Link</a> &emsp;
				<a href="">Link</a> &emsp;
				<a href="">Link</a> &emsp;
			</div>
		</div>

		<div class="LeftFrame">
			Burası sol frame. <br>
			Yazıları da <br> 
			sağa yapışık olsun.
		</div>
		
		<div>
			<div class="MainContent">
				Burası ana içerik bölgesi.<br><br>
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
		</div>
		
		
		<div class="RightFrame">
			Burası sağ frame.
		</div>
	
	</body>
	<!-- body tagi kapanışı. -->
	
</html>
<!-- HTML kodunun kapanışı kapanışı. -->
```


<br>