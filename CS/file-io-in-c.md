<p3>hello world.</p3>
<html>
	<head>
		<title>Ana Sayfa</title>
		<link rel="stylesheet" type="text/css" href="../RMStyle.css">
		<link rel="icon" href="../coloricon.png">
		<link rel="stylesheet" href="../sunburst.css">
		<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
	</head>
</html>
#### ÇAĞLAYAN DEMİRCİ
<p2>"Hayat, Evren ve Her Şey"e dair nihai kişisel platform.</p2>
---
[ANA SAYFA](https://caglayandemirci.github.io) &nbsp;&emsp;
<a class="currentLink" href="https://caglayandemirci.github.io/CS/MainPage">BİLGİSAYAR BİLİMLERİ<a> &nbsp;&emsp;
[BLOG](https://caglayandemirci.github.io/Blog/MainPage)	&nbsp;&emsp;
[HAKKIMDA VE İLETİŞİM](https://caglayandemirci.github.io/about&contact)	&nbsp;&emsp;[ARŞİV](https://caglayandemirci.github.io/archive)	&nbsp;&emsp;
<br><br><br>

### C'de File I/O
<br>
DOSYAYA YAZMA İŞLEMİ
<br><br>
C ile yazılmış, bir `.txt` dosyasına 1000'den 10000'e kadar, 10 000 tane random sayı yazan kod parçası aşağıdaki gibi.
<br> 
```c
	srand(time(NULL));
	FILE *fPointer; /*
                                       C'de bir file i/o isleri pointer ile yapilir.
                                       yazilacak, okunacak tum degerleri
                                       ancak bir pointer ile gezip isaret ederek
                                       islem yapabiliriz.
                              */

        fPointer = fopen("RandomIntegers.txt","w");

	if (fPointer == NULL) {
                              /*
                                       C, kisitli hafıza ile calisildigi 1970'lerde 
                                       yazildigi ve hala da gomulu sistemler gibi
                                       ayni koşullarla karşılaşabilecek yerlerde
                                       kullanildigindan, geleneksel olarak sistemin
                                       sizin hafıza talebinizi yerine getirip
                                       getirmediğini sorarsiniz.
                              */
		printf("Could not open a txt file. \n");
		exit(1);	
	}

	int i;   
	for (i = 0; i < 10000; i++) { 
		fprintf(fPointer, "%d    ", (1000 + rand() % 9000));
		fprintf(fPointer, "\n");
                // Syntax bu sekilde: printf değil fprintf
	}
        fclose(fPointer); // Dosyayi kapatmak önemli.
```
<br>
Yukarıdaki kodun içindeki comment line'larda hafıza kıtlığından bahsetmişken; o gibi C kullanılan platformlarda bazen text dosyasının büyüklüğünden şikayet edip binary file kullanmak isteyebilirsiniz. İşlemi hiç değiştirmeden, yani 1000'den 10000'e random integerlar tutan bir binary file da aşağıdaki gibi yazılabilir:
<br>
```c
        FILE *bPointer; 
	bPointer = fopen("RandomIntegers.bin","wb");
	if (bPointer == NULL) {
		printf("Could not open a txt file. \n");
		exit(1);	
	}
	int number;
	for (i = 0; i < 10000; i++) {
		number = (float)(10000 + rand() % 499000);
		fwrite(&number, 1, sizeof(int), bPointer);
	}
        fclose(fPointer);
```
<br>
DOSYADAN OKUMA İŞLEMİ
<br><br>
Şimdi de yukarıda oluşturduğumuz dosyadan öğeleri okuyarak en büyük ve en küçük sayıları bulalım bulunan tüm sayıların ortalamasını alalım.
<br>
```c
	int temp;
	int max = 0;
	int min = 10000;
	float average = 0.0;

	FILE *fPointer = NULL;

	fPointer = fopen("RandomIntegers.txt", "r");
        /*
                  burada goruldugu gibi write anlamina 
                  gelen "w" değil, read anlamina gelen
                  "r" yazıyoruz.
        */

	if (fPointer == NULL)
		printf("Could not open the file.\n");

	int i;
	for(i = 0; i < 10000; i++) {
		fscanf(fPointer, "%f", &temp);
                // fscanf'le aliyoruz sayilari

		if (temp > max) 
			max = temp;    
		average += temp;
	}
	
	rewind(fPointer);
	
	for(i = 0; i<10000; i++) {
		fscanf(fPointer, "%f", &temp);
		if (temp < min) 
			min = temp;
	}
        
        average /= 10000; 

        printf("max: %d\n", max);
	printf("min: %d\n", min);
	printf("average: %f\n", average);
```
<br>
Bunun disinda yine okurken, kac tane karakter veya sözcük yazılmış olduğu, hangi karakterden kaç tane basıldığını ya da satır sayısı gibi akla gelebilecek birçok veri kolayca alınabilir. Örneğin alttaki kod parçasında count satır sayısını veriyor.
<br>
```c
	while (!feof(fPointer)) { // eof, end of file anlamina gelir
		char c = fgetc(fPointer);
		if (c == '\n') 
			count++;
	}
	printf("Number of lines is %d\n", count);
```
<br>
Ya da asagidaki gibi, whitespace karakterlerini (aşağıda wsCount) sayarak kelime sayısını bulabilir ya da whitespace olmayan karakterleri sayarak kaç karakter basıldığını bulabilirsiniz (gerçi şimdi aklıma geldi de TAB da ayrı bir whitespace karakter, kod geliştirilebilir).
<br>
```c

	while (!feof(fPointer)) {
		char c = fgetc(fPointer);
		if (c == ' ') 
			wsCount++;
		else if (c != ' ' && c != '\n')
			cCount++;
	}	
```
<br>
Bu kodların float'lu versiyonlarını Arşiv'den bulabilirsiniz.
