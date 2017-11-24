---
title: Elektron Hakkında
comments: true
layout: csmain
---
<a href="../CSmain.html">&#8592; **BİLGİSAYAR BİLİMLERİ**</a><p2>13.11.2017</p2><br><br>
<html><head>
<link rel="stylesheet" type="text/css" href="../markdownStyle.css">
<link rel="icon" href="../coloricon.png">
<link rel="stylesheet" href="../githubSH-Dark.css">
</head></html>

## Electron Hakkında

Aslında bu başlığı "Electron ile Masaüstü Uygulaması Yapımı" şeklinde koyacaktım ama bunu adım adım anlatmayacağıma, sadece uygulamanın ne işe yaradığı, nasıl bir şey olduğuna dair HTML-CSS-JS meraklıları için bir haber niteliğinde yazmaya karar verdiğim için onu bu şekilde değiştirdim.

Electron diye bir framework var ki, size HTML, CSS ve Javascript kullanarak masaüstü uygulamaları yapabilme imkanı sunuyor. Kendilerinin siteleri [burada](https://electron.atom.io/). Biraz aşağıdaki "watch the video"yu tıklarsanız, amaçlarını gayet güzel açıklamışlar. 

Burada asıl mesele, iyi bir Javascript bilgisi. HTML ve CSS biraz cebimde var ama, uzun zamandır şu JS'yı adam gibi öğrenme planları yapıyorum. Bir gün oturup w3schools'tan teker teker tutoriallarını bitirip Electron kullanarak eli yüzü düzgün bir uygulama geliştireceğim. Hayırlısı.

Bu yazılım, temelde her browser penceresinin bir desktop app (yukarıda duyarlılık yaparak Türkçe yazdığım kimi şeyleri tekrar ederken İngilizce'ye dönmek bu blogda sıkça yaptığım bir şey. Şimdi aklıma gelmiş olsa da ilerdeki örnekler için bu parantezleri burada bırakıyorum) şekline sokulabileceği teorisinden yola çıkıyor. Örneğin kendi sitemi Electron platformundan çalıştırdığımda şöyle bir pencereyle karşılaşıyorum: 

![](http://i68.tinypic.com/2dshbiw.png)<br>

Evet, bu png belgesiyle hem bir yazılımcı olarak Windows kullandığım utancımı gözler önüne sermiş oldum, hem de pencerenin hemen altında bu pencerenin oluşmasını sağlayan kodları sunarak bir resimle iki kuş vurmuş oldum.

Şimdi, daha formal ve bir işe yarama yolunda ilk adımımız olacak uygulamanın kodları da aşağıda:

`main.js` :
```javascript
const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function() {
	// create new window
	mainWindow = new BrowserWindow({width: 700, height: 500});
	// load html into window
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'mainWindow.html'),
		protocol:'file:',
		slashes: true
	}));
});
```

`mainBrowser.html` :
```html
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<meta content='width=device-width, initial-scale=1' name='viewport'/>
		<title>Electron App</title>
		<link rel="icon" href="coloricon.png">
	</head>
	<body style="background-color: rgb(50,50,50);">
		<form method="post" action="">
			<input type="text" id="email_address" name="name" 
			style=" background-color: white;
					color: crimson; 
					border: none; 
					width: 75%; 
					font-size:13px;
					padding: 10px;" 
			placeholder="Önce sizin adresinizi alalım..." required>
		</form>
		<textarea id="idMailText" class="mailText" placeholder="Mesajınız da buraya lütfen..."
			style=" width: 75%;
					height: 350px;
					font-family: verdana;
					font-size: 13px;
					color: red;
					background-color: black;
					padding: 10px;"></textarea>
		<button style=" background-color: gray; 
						border: 1px solid red; 
						height: 25px;" 
				onclick="sendMail(); return false">Gönder</button>
				
		<script>
			function sendMail() {
				var link = 'mailto:demircicaglayan13@gmail.com?subject=Message from '
					+ document.getElementById('email_address').value
					+ '&body='+document.getElementById('idMailText').value;
				window.location.href = link;
				window.alert("Çıkan e-posta uygulamasından da Gönder'e tıkladıysanız \n 
				mesajınız büyük ihtimalle çok güzel yollandı. \n 
				Ama o kadar da javascript bilmiyorum. Siz  yine de çok emin olmayın.");
			}
		</script>
	</body>
</html>
```

Bu fonksiyon, blogda da bir zamana kadar kullandığım mail atılabilen küçük bir yazı alanıydı. Tıpkı bu uygulamayı çalıştırdığımızda karşımıza çıkan şu uygulama gibi:

![](http://i63.tinypic.com/2m3qx6q.png)

Şimdi denediğimde Gönder butonu çalışmadı, bu muhtemelen Electron'un network kullanmaması (?) ile ilgili, ya da bunu yapmak için birkaç satır birşey daha gerekiyordur. Emin değilim. Ama çok düşünmeyeceğim çünkü `window.alert` gibi basit denemeler çalışıyor.

*

Electron'u Windows üzerinde çalıştırmak için kendi sitelerinden onu ve **Node.js** gibi gereklilikleri indirdikten sonra; uygulama klasörü oluşturma ve çalıştırma için Youtube gibi çeşitli yerlerdeki tutoriallara bakmanızı öneririm. Bash ve javascript bilmeyen biri için altından kalkması biraz uzun zaman alabilir.  

#### Peki Neden Electron Kullanalım?

Sayfa tasarımı bilenler için, programlamayla uğraşanların haberdar olduğu GUI'den çok daha pratik bir çözüm olarak karşımıza çıkıyor. Öğrenmenin bu dönemde bir kazanç olacağı Javascript ile uygulama geliştirebilmeyi sağlıyor. Bir sayfayı şekillendirmek konusunda açık ara en basit ve güçlü çözüm olarak bildiğim **CSS** ile uygulamanızın her pikseline hakim olmanıza olanak tanıyor. Önceden biraz kullanmışlığım olan **Python Tkinter** ya da **Java GUI** gibi yazılımlarda genelde programcı, karşısında bir grafik olarak görünen ve doğru çalışan bir programdan daha fazlasına uğraşmak istemiyor ya da elinde öyle bir araç bulamıyor; Java GUI'de bir butonun yazı fontunu, kenarlık rengini, sayfada pikseli pikseline tam olarak nerede duracağını vs nasıl ayarlayacağız mesela ben bilmiyorum. Her şey bir yana, böyle güzel tasarlanmış **Open Source** projelere olan güvenim gün geçtikçe artıyor.

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