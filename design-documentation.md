---
layout: post
title: Tasarım Dokümantasyonu
---
<style>
.color_palette {
	height: 100px;
	border: 1px solid gray;
}
.color_box {
	margin:0;
	float: left;
	height: 100%;
	width: 14.2%;
}
</style>

## Tasarım Dokümantasyonu: caglayandemirci.com

### Sitenin Amacı

Site, en başta sanat, fikir, tecrübe gibi konulardaki yazılarımı muhafaza edebileceğim klasik bir kişisel blog sitesi olarak düşünüldü. Daha sonra buna ek olarak burayı, programlama kodları ve projelerim gibi işlerimi de ekleyerek bütün bir kişisel site olarak kullanmaya karar verdim. Sözün özünde burası, amacı bakımından diğerlerinden farklı olmayan bir kişisel web platformu olarak yaratılmıştır. 

İlk başta, bir tarafta rock müzik, fantastik sanatlar gibi ilgi alanlarımdaki yazılarımı sergilerken, öbür yanda bilgisayar bilimleri gibi ciddi, bununla ilgisi olmayanlar açısından "sıkıcı" ve ilgili sayfalarda genel olarak kod barındırmayı gerektirecek bir alanın aynı çatı altında olamayacağını düşünmüştüm. Bu sorun için, bilgisayar bilimleri sayfalarımı ana sayfadan gidilebilecek ayrı bir platform olarak tutmayı düşündüm. Bununla birlikte bu kısım da bloğun genel tasarım özelliklerini taşıyacaktır.

### Tasarım

Tasarlamaya başlarken iki cümleyle anlatılabilecek tek bir amacım vardı ve buna sadık kalmaya çalıştım: Site olabildiğince sade olacaktı ve yalnızca okumaya hizmet edecekti. HTML ve CSS'i yıllardır ara ara zamanlarda zevk amaçlı kodladığımdan birçok site denemem oldu. Bunların çoğu siyah (dark) temalı, muhteşem karanlık ormanlar gibi arkaplanları olan, bir metalcinin ya da kuzey ülkelerinden bir dwarf olmaya çalışan birinin yaptığı belli olan sitelerdi. Sade bir site yapmak yıllar geçtikçe gözüme daha profesyonel görünmeye başladı, artı amaç okunmaksa bunu daha iyi yerine getiriyordu. 

##### Renk Tercihleri

Genel olarak site beyaz üstüne siyah yazılardan oluşuyor: 
- Arkaplan saf beyazın olabildiğince az miktarda grileştirilmiş hali: rgb(250, 250, 250) (#fafafa). Bunun sebebi #fff beyazın, yaygın olduğundan olsa gerek, son derece farkedilebilir olması. Diğer bir deyişle benim yağtığım minik oynama da farkedilebiliyor ve bu durum siteye bir karakter katıyor.
- Temel yazı ise rgb(34, 34, 34) (#222). Çünkü yazı rengi #000 saf siyahtan biraz açıldığı zaman, beyaz üstündeki keskinliği biraz azalıyor ve metinde daha yumuşak bir görünüm sağlıyor.

Header ve footer renk tercihleri koyu grinin iki farklı tonu şeklinde:
- Header rgb(54, 54, 54) (#363636). 
- Footer rgb(26, 26, 26) (#1a1a1a).

İki alanın renklerinin az da olsa farklı olması, her bir division'ın ayrı karakterlere sahip olmasını istememden kaynaklanıyor. Bunun başlıca sebebi, eğer ikisi de aynı renk olsaydı, siteyi altında ve üstünde aynı ekmek parçalarından olan bir sandviç gibi sunmanın algıda biraz monotonluk yaratacağına inanmam oldu. Neden daha açık olanın header olduğu meselesine gelirsek: İnsanlar genel olarak bilgisayar ekranını, yüze paralel değil ama çok az açıyla havaya bakacak şekilde tutuyorlar. Bu da laptoplar gibi lcd ekranları olan cihazlarda ekranın üst kısımlarının daha koyu görünmesine yol açıyor. Böylece açık renkli olan footer olsaydı, arada benim istediğim miktardan çok daha fazla bir ton farkı olacaktı. Bu beyan fantastik görünebilir ama evet, bunu düşündüm.

Bir blog sitesinin en belirgin karakterlerinden birinin, linkler olduğuna inanıyorum. Referans vermek gibi çok çeşitli amaçlarla kullanılabilecek web linklerini kullanmaya Ekşi Sözlük'ten alışmış olan neslimiz için, sayfayı renklendirmenin en basit yöntemlerinden birinin bu araçlar diye düşünüyorum.

- Link: rgb(156, 137, 99) (#9c8963). 
- Link Hover: rgb(184, 170, 143) (#b8aa8f).

Buradan da görülebileceği gibi, siyah ve beyazın dışında alternatif rengim (aslında evet tek rengim) parşömeni ya da teksir kağıdını andıran solgun bir gri-altındır. Linkler dışında mail kutumun kenarlarında, aylık blog sayfamın başlık ayırıcılarında (separators) ve bu gibi çeşitli yerlerde görülebilmektedir.

Böylece sitemde şöyle bir renk paleti ortaya çıkıyor:

<div class="color_palette">
<div class="color_box" style="background-color: #1a1a1a"></div>
<div class="color_box" style="background-color: #222"></div>
<div class="color_box" style="background-color: #363636"></div>
<div class="color_box" style="background-color: #999"></div>
<div class="color_box" style="background-color: #9c8963"></div>
<div class="color_box" style="background-color: #b8aa8f"></div>
<div class="color_box" style="background-color: #fafafa"></div>
</div><br>

...

Yeni temayla birlikte, gri-altın sarısı olan alternatif rengim, grimsi mavi ve açık mavi olarak değişti.
