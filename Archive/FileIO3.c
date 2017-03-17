#include<stdio.h>
#include<stdlib.h>

int main() {
	int count = 0;

	FILE *fPointer = NULL;
	fPointer = fopen("Floats.txt","r");
	if(fPointer == NULL)
		printf("Could not open the file. \n");

	while (!feof(fPointer)) {
		char c = fgetc(fPointer);
		if(c == '\n') 
			count++;
	}
	
	printf("Number of lines is %d\n", count);
	
	fclose(fPointer);
	return 0;
}
