<br><p3>hello world.</p3>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<link rel="stylesheet" type="text/css" href="RMStyle.css">
		<title>Ana Sayfa</title>
	</head>
	<br><br><br>
</html>
  

## ÇAĞLAYAN DEMİRCİ
<p2>"Hayat, Evren ve Her Şey"e dair nihai kişisel blog.</p2>
---
<br><br><br>
### GITHUB'DA WEB SAYFASI YAYIMLAMAK
<br>
Şu blog meselesinin alabildiğine suyu çıkmıştı. Bilgilerimi ve düşüncelerimi bir web sitesi ortamında depolayarak
kişisel elektronik hafıza haline getirme düşüncem yaklaşık on seneden beri vardı. Ancak bunu ne şekilde yapacağıma
bir türlü karar veremiyordum. Her ne kadar HTML ve CSS dillerini yeterine yakın düzeyde biliyor olsam da, blog 
gibi basit bir script için, üstelik de minimal ve sade tasarımları seven ben, bir server satın alarak işin adminlik
boyutuna çok fazla zaman harcamak istemiyordum. Diğer yandansa Wordpress, Blogger, Wix, Medium ve türevlerinin hiçbirini
yeterince beğenmiyordum; zira ya sıfırdan ve tamamen benim tasarımım olacak bir temaya izin vermiyorlardı (en azından 
ücretsiz sürümlerinde), ya da yavaş çalışıyor ve profesyonel görünmüyorlardı. Bir şekilde bu işlerin hiçbiri içime 
sinmiyordu, benimseyemiyordum. Bu sıralarda boş zamanlarımda HTML ve CSS kullanarak sayfalar tasarlıyor ve estetiği
seyretmekten başka hiçbir amaç olmaksızın zaman geçiriyordum.

Bir internet sayfasını GitHub'ı server gibi kullanarak .io uzantısıyla yayımlamak, her ne kadar duymamış olduğum bir şey
değildiyse de, bugünlere kadar pek de dikkatimi çekmemişti. Geçenlerde **Jekyll** adlı, server üzerinde bir yönetici
programı oluşturmadan Github üzerinden statik web sayfaları yayımlayabilmenizi sağlayan bir framework'ü incelerken 
birden dank etti: evet, artık bu işi Github'la yapacaktım. Sayfalarımı CSS ile şekillendirecek ve postlarıma ana sayfadan
link verecektim.

Github'ı daha yakından incelerken fazlasıyla iyi olduğuna karar verdim. Hayal ettiğim her şeyi karşıladı: **Markdown**
adlı HTML türevi dili daha önce bilmiyordum ve kendisi aşırı güzel bir fikirdi. Web sayfası paragrafları oluşturmak için 
Markdown'ın sağladığı syntaxlar, her birini öğrendikçe bana bir sevgi ve rahatlama patlaması yaşattı. br'lerle, p'lerle,
sayısız taglerle uğraşmadan, yazı editörüne yazı yazar gibi web sayfası oluşturabiliyordun. Diğer yandan CSS zaten basit, 
tatlı ve iyi bildiğim bir dildi ve o, Markdown sayfalarını da şekillendirebiliyor.

Markdown'ın bir diğer inanılmaz özelliği de (aslında Github'da olduğundan ve StackOverFlow gibi siteler de onu kullandığından
düşününce elzem bir özelliği) kodlama örneklerinin gösteriminde aşırı kolaylık sağlaması. Bir örnek vermek gerekirse, eski 
HTML sayfalarımda, bir yazının kod olduğunu ifade edebilmek ve onu syntax renklendirmesiyle sunabilmek için tam olarak şunu
yapıyordum:

	<code style="font-size:14px;"><link rel="stylesheet" href="highlight/styles/atelier-sulphurpool-dark.css">
	<script src="highlight/highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
	<code><pre>
	</pre></code>
	
Markdown'da ise aynı işi yapan syntax şu:

	```javascript
	```
	
Evet, komiklik derecesinde rahat.

Github'ın tabiki en çok takdir ettiğim yanı, benim gereksiz sayfa görünümü takıntılarımı rahatlatmış olması ya da bana PHP'siz server sağlamış olması değil. Open Source denen ve bilimimizin (CS) en önemli ve saygıdeğer meselerinden birinin en büyük mercii olarak, çok güzel işler yapıyor olması. Free Software kavramı bu işle uğraşan herkesçe anlaşılmalı.

---

Bu blogda, kimi ben ve gezegendeki birkaç diğer kişi dışında kimseyi ilgilendirmeyen yazılar da, bilgisayar bilimleri alanında ufak açıklamalar eşliğinde sunulmuş kodlar ve programlar da bulabilirsiniz. İkincisine ağırlık vereceğim gibi görünüyor. 



