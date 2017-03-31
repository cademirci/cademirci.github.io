<p3>hello world.</p3>
<head>
	<title>Ana Sayfa</title>
	<link rel="stylesheet" type="text/css" href="../RMStyl.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="../sunburs.css">
	<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
</head>
#### ÇAĞLAYAN DEMİRCİ
<p2>"Hayat, Evren ve Her Şey"e dair nihai kişisel platform.</p2>
---
[ANA SAYFA](https://caglayandemirci.github.io) &nbsp;&emsp;
<a class="currentLink" href="https://caglayandemirci.github.io/CS/MainPage">BİLGİSAYAR BİLİMLERİ</a> &nbsp;&emsp;
[BLOG](https://caglayandemirci.github.io/Blog/MainPage)	&nbsp;&emsp;
[HAKKIMDA VE İLETİŞİM](https://caglayandemirci.github.io/about&contact)	&nbsp;&emsp;[ARŞİV](https://caglayandemirci.github.io/archive)	&nbsp;&emsp;
<br><br><br>

### C File I/O: HTML Sayfası Oluşturmaya Giriş
<br>
Bu programda, bir txt dosyasına yazılmış bir yazıyı, önceden yazdığımız bir html sayfasına yerleştirmenin kabaca nasıl olduğunu gösterme amacındaydım.
Program, önce bir txt sayfası ismi, daha sonra bu sayfanın başlığını sizden talep ediyor ve newText.txt içine yazdığınız makalenizi alıp
html sayfası içine yerleştiriyor. Bunu yaparken, txt dosyasında basılmış her bir satırbaşı için yazıya bir `<br>` ekliyor. Zira html
ile uğraşmış olanların bildiği üzere, html dili Enter'ları satırbaşı olarak algılamaz. <br> koymalı ya da sonraki paragrafı ayrı bir paragraf
tag'i içine (`<p></p>`) koymalısınız.
<br><br>
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h> 

int main() {
	setlocale(LC_ALL, "Turkish");

	//reading txt and taking it into a string
	FILE *fpr = NULL;
	printf("Şu sayfanın adını koyalım:\n");
	char pageName[50];
	scanf("%s", pageName); 
	fpr = fopen(pageName, "r");
	if (fpr == NULL) {
		printf("işlem başarısız oldu.\n");
		exit(1);	
	}	
	int i = 0;
	char text[10000];
	while (!feof(fpr)) {
		text[i] = fgetc(fpr);
		i++;
	}
	// / 
	
	printf("Yazının başlığı ne olsun?\n");
	char title[50];
	scanf("%s", title);
	
	
	for (i = 0; i < strlen(text); i++) {
		if (text[i] == '~' && text[i+1] == 't' 
		&& text[i+2] == 't' && text[i+3] == 'l') {
			int j, k;
			k = 0;
			for (j = i; j < i + strlen(title); j++) {
				text[j] = title[k];
				k++;
			}
		}
	}
	
	for (i = 0; i < strlen(text); i++) {
		if (text[i] == '~' && text[i+1] == 'x' && text[i+2] == 't') {
			FILE *txtp = NULL;
			txtp = fopen("newText.txt", "r");
			char newText[10000];
			int m = 0;
			while (!feof(txtp)) {
				newText[m] = fgetc(txtp);
				if (fgetc(txtp) == '\n') {
					strcat(newText, "<br>");
					m += 4;
				}
				m++;
			}
			int j, k;
			k = 0;
			for (j = i; j < i + strlen(newText) - 1; j++) {
				text[j] = newText[k];
				k++;
			}
		}
	}
	
	strcat(text, "</div></body></html>");
	
	//reading the string and taking it into a .html.txt file
	FILE *fpw = NULL;
	strcpy(pageName, strcat(pageName, ".html"));
	fpw = fopen(pageName, "w");
	if (fpw == NULL) {
		printf("işlem başarısız oldu.\n");
		exit(1);	
	}
	fprintf(fpw, text);
	// / 
	
	return 0;
}


```
