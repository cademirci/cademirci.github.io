---
layout: post
title: Electron Hakkında
---
<p class="date">13 Kasım 2017 01:32</p>
![](https://i.ytimg.com/vi/ojX5yz35v4M/maxresdefault.jpg)

#### Electron Hakkında

Electron diye bir framework var ki, size HTML, CSS ve Javascript kullanarak masaüstü uygulamaları yapabilme imkanı sunuyor. Kendilerinin siteleri [şurada](https://electronjs.org/). Bir de [şu](https://electron.atom.io/) var. İkincisinde biraz aşağıdaki "watch the video"yu tıklarsanız, amaçlarını gayet güzel açıklamışlar. Burada asıl mesele, iyi bir Javascript bilgisi. 

Bu yazılım, temelde her web sayfasının bir desktop app şekline sokulabileceği teorisinden yola çıkıyor. Örneğin Electron'u biraz araştırıp şu js kodunu yazarsanız, benim web sayfamın olduğu yere istediğiniz URL'i verdiğiniz zaman o sayfanın bir masaüstü uygulaması şeklinde çalıştığını görürsünüz.

```javascript
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow;
app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width: 700, height: 500
	});
	mainWindow.loadURL('https://caglayandemirci.github.io/')
})
```

**Peki Neden Electron kullanalım?**: Sayfa tasarımı bilenler için, programlamayla uğraşanların haberdar olduğu GUI'den çok daha pratik bir çözüm olarak karşımıza çıkıyor. Öğrenmenin bu dönemde bir kazanç olacağı Javascript ile uygulama geliştirebilmeyi sağlıyor. Bir sayfayı şekillendirmek konusunda açık ara en basit ve güçlü çözüm olarak bildiğim **CSS** ile uygulamanızın her pikseline hakim olmanıza olanak tanıyor. Önceden biraz kullanmışlığım olan **Python Tkinter** ya da **Java GUI** gibi yazılımlarda genelde programcı, karşısında bir grafik olarak görünen ve doğru çalışan bir programdan daha fazlasına uğraşmak istemiyor ya da elinde öyle bir araç bulamıyor; Java GUI'de bir butonun yazı fontunu, kenarlık rengini, sayfada pikseli pikseline tam olarak nerede duracağını vs nasıl ayarlayacağız mesela ben bilmiyorum. Her şey bir yana, böyle güzel tasarlanmış **Open Source** projelere olan güvenim gün geçtikçe artıyor.