<p3>hello world.</p3>
<head>
	<title>Ana Sayfa</title>
	<link rel="stylesheet" type="text/css" href="../RMStyle.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="../sunburst.css">
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

### C İle Linked List Programlama
<br>
C dili kullanarak, temel veri yapılarından biri olan [Singly Linked List](https://en.wikipedia.org/wiki/Linked_list)'in bir örneğini kodladım. Bu program şehirleri, bölge ve numaralarıyla beraber tutuyor. Ekleme, silme ve ekrana yazdırma ve arama özellikleri sunuyor.

Bu kodda, her kodda az çok olabileceği gibi, yazdıktan bir süre sonra incelerken gözüme çarpan bazı şeyler var. Örneğin, head ve tail node'larını halihazırda implement etmiş olmama rağmen tail'i hiç kullanmamışım. Bir linked list programlama alışkanlığı olarak, linked list'in sonuna gelip gelmediğimi kontrol etmek için her seferinde `if current->next == NULL` şeklini tercih etmişim. 

İkinci bir next pointer'ı olarak next2'yi oluşturdum, buradaki amaç next'in next'ine ulaşmaktı. Mesela silme işlemi yaparken bu durum kolaylık sağlayabilir. Silinecek elemandan bir önceki elemanı silinecek elemandan bir sonraki elemana kolaylıkla bağlarsınız. Ama ben bunu da oluşturduktan sonra bir kenara bırakarak `current->next->next` yapısına başvurmuşum.

Bir de, şehrin ismini veya bölgesini girerken boşluk bırakmamanız gerekiyor. C, boşlukla beraber girilen bir stringi iki ayrı string olarak aldığından, boşluk sonrasını, olaydan bir sonraki scanf'in içine dahil ediyor. Bu da bütün bir programın o andan sonra yanlış çalışmasına, hatta çökmesine sebep oluyor. Bunun için şu an aklıma gelen çözümlerden biri `getchar()` kullanmak. 

Programlama açısından örnek bir iş yaptıysam eğer, ilk göze çarpan şey burada main'in gözle görülür biçimde sade tutulmuş olması. Yapısallık, yani yazılan kodda bütün işin, kendi işlerini yapan ayrı ayrı fonksiyonlar tarafından yapılıyor olması önemli bir şeydir. Main'i gereksiz ölçüde şişirmek acemice bir davranıştır.

Böyle durumlarda olduğu gibi, yazılan bir koda bir süre sonra taze bir beyinle tekrar bakıp hataları ayıklamak, daha iyi yapılabilecek yerleri geliştirmek iyi bir hareket. `Update` denen şey de bu değil midir zaten, yeni bir teknik çıkmadığı sürece. 

Program şu an için bu haliyle de tatmin edici şekilde çalışıyor. Bırakağım.
<br><br>
```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct node {
	int license;
	char name[15];
	char region[15];
	struct node *next;
	struct node *next2;
} Node;

Node *head;
Node *tail;

void implement(); 
void add(); // 1
void removeNode(); // 2
void search(); // 3
void print(); // 4


int main() {
	implement();

	printf(" 1 - Add \n 2 - Remove \n 3 - Search \n 4 - Print \n 5 - Exit");
	int choice;
	scanf("%d", &choice);

	while(choice != 5) {
		if (choice == 1)
			add();
		else if (choice == 2)
			removeNode();
		else if (choice == 3)
			search();
		else if (choice == 4)
			print();
		printf(" 1 - Add \n 2 - Remove \n 3 - Search \n 4 - Print \n 5 - Exit");
		scanf("%d", &choice);
	}


	return 0;
}

void implement() { 
	head = (Node *) malloc(sizeof(Node)); 
	tail = (Node *) malloc(sizeof(Node));
	head->next = tail;
	head->next2 = head->next->next;
	tail->next = NULL;
}

void print() {
	Node *current = head->next;
	while (current->next != NULL) {
		printf("%d | %s | %s \n", current->license, current->name, current->region);
		current = current->next;
	}
}

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
	
	/*
		Bu LL'in farkli bir ozelligi olarak, olusturulan
		bir node'u listenin sonuna degil, basina ekliyor.
	*/
}

void search() {
	/*
		Arama ozelligine parcali arama da dahil. Yani 
		kullanici "An" girdiginde listede Ankara ve
		Antalya varsa, her ikisini de ekrana basiyor.
	*/
	
	printf("  1 - Search by license number \n  2 - Search by name \n  3 - Search by region \n");
	int choiceSrch;
	scanf("%d", &choiceSrch);
	if (choiceSrch == 1) {
		int license;
		printf("Which license number?\n");
		scanf("%d", &license);
		Node *current = head->next;
		while (current->next != NULL) {
			if (current->license == license) {
				printf("%s | %s | %d \n", current->name, current->region, current->license);
				return;
			}
			current = current->next;
			if (current->next == NULL) {
				printf("Not found. \n");
				return;
			}
		}
	}
	else if (choiceSrch == 2) {
		char name[20];
		printf("What is the name?\n");
		scanf("%s", name);
		Node *current = head->next;
		while (current->next != NULL) {
			int count = 0;
			int i;
			for (i = 0; i < strlen(name); i++) {
				if (current->name[i] == name[i])
					count++;
			}
			if (strlen(name) == count)
				printf("%s | %s | %d \n", current->name, current->region, current->license);
			current = current->next;
			if (current->next == NULL) {
				return;
			}
		}
	}
	else if (choiceSrch == 3) {
		char name[20];
		printf("What is the regions name?\n");
		scanf("%s", name);
		Node *current = head->next;
		while (current->next != NULL) {
			int count = 0;
			int i;
			for (i = 0; i < strlen(name); i++) {
				if (current->region[i] == name[i])
					count++;
			}
			if (strlen(name) == count)
				printf("%s | %s | %d \n", current->name, current->region, current->license);
			current = current->next;
			if (current->next == NULL) {
				return;
			}
		}
	}
}

void removeNode() {
	printf("  1 - Remove by license number \n  2 - Remove by name \n  3 - Remove by region \n");
	int choiceSrch;
	scanf("%d", &choiceSrch);
	if (choiceSrch == 1) {
		int license;
		printf("Which license number?\n");
		scanf("%d", &license);
		Node *current = head->next;
		while (current->next != NULL) {
			if (current->next->license == license) {
				free(current->next);
				current->next = current->next->next;
				return;
			}
			current = current->next;
			if (current->next == NULL) {
				printf("Not found. \n");
				return;
			}
		}
	}

	/*
		while (current->next != NULL) {
			if (strcmp(current->next->name, name)) {
				free(current->next);
				current->next = current->next->next;
				return;
			}
			current = current->next;
			if (current->next == NULL) {
				printf("Not found. \n");
				return;
			}
		}

		parcali arama istenmediginden, remove icin bu kod denendi. 
		dogru calismadigi farkedildi.
		search'teki yonteme donuldu.

	*/
	else if (choiceSrch == 2) {
		char name[20];
		printf("What is the name?\n");
		scanf("%s", name);
		Node *current = head;
		while (current->next != NULL) {
			int count = 0;
			int i;
			for (i = 0; i < strlen(name); i++) {
				if (current->next->name[i] == name[i])
					count++;
			}
			if (strlen(name) == count) {
				free(current->next);
				current->next = current->next->next;
				return;
			} 
			current = current->next;
			if (current->next == NULL) {
				printf("Not found. \n");
				return;
			}
		}
	}
	else if (choiceSrch == 3) {
		char region[20];
		printf("What is the regions name?\n");
		scanf("%s", region);
		Node *current = head;
		while (current->next != NULL) {
			int count = 0;
			int i;
			for (i = 0; i < strlen(region); i++) {
				if (current->next->region[i] == region[i])
					count++;
			}
			if (strlen(region) == count) {
				free(current->next);
				current->next = current->next->next;
				return;
			} 
			current = current->next;
			if (current->next == NULL) {
				printf("Not found. \n");
				return;
			}
		}
	}
}


```
<br>

