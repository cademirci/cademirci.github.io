<a href="index.html">&#8592; BLOG</a><br><br>
<html><head>
	<link rel="stylesheet" type="text/css" href="markdownStyle.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="tomorrow-night.css">
	<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
</head></html>

İnsanlar olarak mutsuzuz. Depresyon ve stres, her geçen gün daha da büyüyen kara bir siluet gibi karşımızda yükseliyor. Bilincimizin her gün tekrar ve tekrar bu bunalımları mazeret göstererek gerçekleştiremediği hayallerin çöp yığınları altında eziliyoruz. Bütün bu zayiata iyi gelecekmiş gibi dört elle sarıldığımız dokunmatik ekranlardan da, beyaz yakalı yaşamın ne kadar güzel bir şey olduğuna ya da sizin kendi kişiliğinizin başka insanların değer yargıları süzgecinden geçirilmesinin ne kadar önemli olduğuna dair pompalanan safsatalardan başka bir şey yansımıyor. 

Sürekli bir veri bombardımanı altında tutulıyoruz. Etrafımızda uçuşan sayısız veri var. Bu olay neredeyse sanayi devriminden beri gerçekleşiyor. Bugün kendini televizyonlar, telefonlarımız ve içindeki onlarca mesajlaşma grubu, her bir görseline birkaç saniye ayırarak sonu gelmez mizah açlığımızı doyurmaya çalıştığımız post siteleri, sosyal medya, bir sene olsun geleceği olmayan popüler bazı sanat öğeleri ve benzerleri şeklinde gösteriyor. Şekli değişse de olmaya devam edecek, içeriği çok önemli değil ama eskiye göre hızı olağanüstü ölçüde arttı. Sonucu olarak şunu söyleyeceğim ki, yanlız kalmayı unuttuk. Kafalarımız sakin değil. Mesleğimiz olmadıktan sonra konsantrasyon ve fedakarlık isteyen bir işe (sanata örneğin) zaman ayırmak istemiyoruz. Twitter gönderileri kadar kısa sürmüyor. Yirmibirinci yüzyıl insanları olarak, hızlı sonuca açız.

Mutsuzluk içinde koşturmacadan daha delice bir şey düşünemiyorum. Bir gün fantastik bir olayın gerçekleşmesi sonucunda bu modern karakterimiz kendini omzunda hiçbir sorumluluğun olmadığı lapa lapa kar yağmış devasa ve sessiz bir ormanın içinde bulacak ve kötü bloglardan okuyup durduğu aptal bir korku hikayesi canavarıyla karşılaşmayacağını anladığı anda bir an olsun sükuneti ve evrenin gücünü hissedip gözyaşlarına boğulacak. 

```c
void add() {
	char name[20];
	char region[20];
	int license;
	printf("Name of the city?\n");
	scanf("%s", name);
	printf("Region of the city?\n");
	scanf("%s", region);
	printf("License number of the city?\n");
	scanf("%d", &license);
	
	Node *n = (Node *) malloc(sizeof(Node));
	n->license = license;
	strcpy(n->name, name);
	strcpy(n->region, region);
	
	n->next = head->next;
	head->next = n;
}
```
