#include <stdio.h>
#include <stdlib.h>
#include <string.h>


void catFile(FILE *ptr);
void search(FILE *ptr);
/*
void replace();
void add();
void remove();
*/

int main() {
	FILE *wanderer = NULL;
	typeFile(wanderer);
	if (wanderer == NULL) {
		printf("Islem basarisiz oldu. \n");
		exit(1);	
	}
	printf("1 - Dosya adi girisi \n2 - Show the file content \n3 - Search \n");
	printf("4 - Replace \n5 - Add \n6 - Remove \n");
	fprintf(wanderer, "isleminiz gerceklesti.");
	catFile(wanderer);
	return 0;
}

FILE *typeFile(FILE *wanderer) {
	char inputFile[25];
	printf("Acmak istediginiz dosyanin adini giriniz: \n");
	scanf("%s", inputFile);
	wanderer = fopen(inputFile, "r");
	return wanderer;
}

void catFile(FILE *reader) {
	while (!feof(reader))
		printf("%c", fgetc(reader));
}

void search(FILE *reader) {
	printf("Aramak istediginiz ogeyi giriniz: \n");
	int line = 0;
	char c;
	while (!feof(reader)) {
		c =  fgetc(reader);
		if (c == '\n')
			line++;
	}
}









/*
	while(fgets(temp, 512, fp) != NULL) {
		if((strstr(temp, str)) != NULL) {
			printf("A match found on line: %d\n", line_num);
			printf("\n%s\n", temp);
			find_result++;
		}
		line_num++;
	}
*/
