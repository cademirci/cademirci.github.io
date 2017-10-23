<html><head>
	<link rel="stylesheet" type="text/css" href="markdownStyle.css">
	<link rel="icon" href="../coloricon.png">
	<link rel="stylesheet" href="github-gist.css">
</head></html>
asd [GitHub](http://github.com)
burada `şöyle` bi fonksiyon
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

void search() {
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
```
