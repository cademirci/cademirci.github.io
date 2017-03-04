<br><p3>hello world.</p3>
<html>
	<head>
		<title>Ana Sayfa</title>
		<link rel="stylesheet" type="text/css" href="../RMStyle.css">
		<link rel="icon" href="../coloricon.png">
		<link rel="stylesheet" href="../sunburst.css">
		<script src="../highlight.pack.js"></script><script>hljs.initHighlightingOnLoad();</script>
	</head>
	<br><br><br>
`</html>
  

## ÇAĞLAYAN DEMİRCİ
<p2>"Hayat, Evren ve Her Şey"e dair nihai kişisel blog.</p2>
---
[ANA SAYFA](https://caglayandemirci.github.io) &nbsp;&emsp;
[BİLGİSAYAR BİLİMLERİ](https://caglayandemirci.github.io/page2)	&nbsp;&emsp;
[BLOG](https://caglayandemirci.github.io/page2)	&nbsp;&emsp;
[HAKKIMDA VE İLETİŞİM](https://caglayandemirci.github.io/iletisim)	&nbsp;&emsp;
[ARŞİV](https://caglayandemirci.github.io/page2)	&nbsp;&emsp;
<br><br><br>
### Temel C İle Queue Programlama <br>


Pointer, struct ya da diğer c-spesifik yöntemler kullanmaksızın, basitçe bir queue veri yapısı oluşturalım. Yalnız burada queue arkaplanda çalışan bir yapı olup, arayüzdeki listemiz, listeden çıkanların oluşturduğu boşlukların, girenler tarafından doldurulduğu bir liste olacak. <br>



```c	
#include <stdio.h>

int main(void) {
	printf("Initial capasity? \n");
	int cap;
	scanf("%d", &cap);
	char mask[cap];
	for (int i = 0; i < cap; i++)
		mask[i] = ' ';
	char queue[cap +1];
	for (int i = 0; i < cap +1; i++)
		queue[i] = ' ';
	char co[3];
	
	while (true) {	
		scanf("%s", co);
		
		// Print (P)
		if (co[0] == 'P') {
			for (int i = 0; i < cap; i++) {
				printf("[%c]", mask[i]);		
			}
			/* Printing the real queue for test.
			printf("\n");
			for (int i = 0; i < cap; i++) 
				printf("%c-", queue[i]);
			*/		
		} 
				
		// Enqueue (I)
		if (co[0] == 'I') {
			char e[3];
			scanf("%s", e);
			int count = 0;
			for (int i = 0; i < cap; i++)
				if (queue[i] != ' ')
					count++;
			if (count >= cap)
				printf("Error. No place left in the queue. \n");
			else {
				
				for (int i = 0; i < cap; i++)
					if (queue[i] == ' ') {
						queue[i] = e[0];
						break;		
					}
					
				for (int i = 0; i < cap; i++)
					if (mask[i] == ' ') {
						mask[i] = e[0];
						break;	
					}	
					
			}				
		}

		// Dequeue (R)
		if (co[0] == 'R') {
			if (queue[0] == ' ')
				printf("Error: No element to remove.");
			else {
				char deqEl = queue[0];
				for (int i = 0; i < cap; i++)
					if (mask[i] == deqEl) {
						mask[i] = ' ';
					} 
				queue[cap +1] = ' ';
				for (int i = 1; i < cap +1; i++) {
					queue[i-1] = queue[i];
				}
			}
		}
		
		// Exit as an extra command (E)
		if (co[0] == 'E') {
			break;
		}
	}
	return 0;
}
```
<br>


Böylece kodumuz şu şekilde çalışıyor: <br>

	/*
		Initial capacity? : 4 
		I A //insert A into the queue 
		I B //insert B into the queue 
		I C //insert C into the queue 
		P //print the list 
		[A] [B] [C] [ ] 
		I D //insert D into the queue 
		I E //insert D into the queue
		Error: No place left in the queue! 
		P  
		[A] [B] [C] [D] 
		R 
		P [] [B] [C] [D] 
		I X 
		P [X] [B] [C] [D] 
		R 
		R 
		P 
		[X] [] [] [D] 
		R 
		R 
		P 
		[] [] [] [] 
		R 
		Error: No element to remove!
	*/

