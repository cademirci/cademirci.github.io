---
layout: post
title: FOUT Sorunu
tags: ['bilgisayar bilimleri', 'javascript', 'css']
image: https://image.ibb.co/nEv7Sy/foutp.png
---

Web tasarımı / web programlama ile ilgilenenler için teknik bir ayrıntı.

## FOUT Sorunu

28.05.2018 21:36 -- *Javascript, CSS* --

Web tasarımı/internet programlama biliminde, FOUT diye adlandırılan bir problem var. **Flash of Unstlyled Text** anlamına geliyor. 

FOUT kavramı, tarayıcımızın, web sitesini yüklerken yaşadığı bir gecikmeyi karşılamakta. Tarayıcı web sitesini genel hatlarıyla yüklemişken, **font stack**ten çekemediği ve @font-face ile temsil edilen yazı stilinin yerine, default font stilini okuyucuya çok kısa bir süre için gösterir, ki bu default font stili, özellikle Windows işletim sistemlerinde, **Times New Roman**'dır.

![](https://image.ibb.co/nEv7Sy/foutp.png)

<p class="imgdesc">Bu durum en fazla bir saniye sürse de, azıcık web tasarımı derdi olan herkesin gözüne batmak için yeterli.</p>

### Neden @font-face property?

CSS'te font ayarı yapmak için, örneğin yazı stilinizi **Verdana** yapmak için, `font-family: verdana;` yazmanız yeterlidir. Ancak bu, bu işin çözümünün en amatörce şeklidir. Windows, Linux ve MacOS işletim sistemlerinin birinde yazdığınız bu satır, diğer ikisi tarafından umursanmayabilir. Tarayıcıdan tarayıcıya da bu satırın değerlendirilmesi farklılık gösterebilir. 

Daha profesyonelce bir yöntem olarak; web programlamada, hatrı sayılır sitelerin neredeyse tümünde yazı fontu, bir **True Type Font File** (.ttp) ya da **Open Type Font File** (.otf) ile desteklenir. Bunun için kod şu şekilde yazılır:

```css
p {
	font-family: Open Sans, caglayandemirci_Open-Sans;
} @font-face {
	font-family: caglayandemirci_Open-Sans;
	src: url(Open-Sans/OpenSans-Regular.ttf); /* işte bu belge, sitemin yapılandırıcı klasörlerinden birinde duruyor. */
}
```

Bunun içindir ki @font-face property, FOUT'a sebep olmak için değer bir tercih.

### Ne yapmalı?

[StackOverFlow](https://stackoverflow.com/questions/4712242/wait-for-fonts-to-load-before-rendering-web-page)'da birisi bunun cevabını, "HTML'in içinde CSS yazmak yerine, ayrı yerde tuttuğun bir CSS dosyasına sahip olmalısın" şeklinde vermiş. Ancak bu benim sitem için geçerli değildi, CSS dosyamı her zaman ayrı yazıyor olsam da, ana sayfama her girdiğimde, göz göze gelindiğinde kaçan bir hamamböceği şeklinde bir anda belirip kaybolan bir Times New Roman ile karşılaşıyordum.

Aslında en başta, bu problemin adının FOUT olduğunu bilirseniz işiniz kolay, çözümünüz bir Google aramasına bakar. Ben de bunu öğrenince sorunun en etkili yöntemi olarak bir Javascript kodu buldum. Bu kodun yaptığı tek şey, yazı fontu yüklenene kadar yazıyı gizlemek. Hepi topu bir saniyelik bir boş sayfa, stabil olmayan, uçup kaçarak göz acıtan bir sayfadan çok daha iyidir diye düşünmüşler. Katılıyorum. 

```javascript
(function(){
		// if firefox 3.5+, hide content till load (or 3 seconds) to prevent FOUT
		var d = document, e = d.documentElement, s = d.createElement('style');
		if (e.style.MozTransform === ''){ // gecko 1.9.1 inference
		s.textContent = 'body{visibility:hidden}';
		var r = document.getElementsByTagName('script')[0];
		r.parentNode.insertBefore(s, r);
		function f(){ s.parentNode && s.parentNode.removeChild(s); }
		addEventListener('load',f,false);
		setTimeout(f,3000);
	}
})();
```

Bu kodu, HTML sayfanızda `<head></head>` tagi içine yerleştirdiğiniz bir `<script></script>` JS bloğuna yazmanız gerekiyor. İşe yaramadığı durumlar olmaması dileğiyle. Olsa da tekrar araştırıp öğreniriz zaten, CS'ciler olarak işimiz ne...