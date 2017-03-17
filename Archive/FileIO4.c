#include<stdio.h>
#include<stdlib.h>

int main() {
	int wsCount = 0; // WhiteSpace counter
	int cCount = 0; // Character counter

	FILE *fPointer = NULL;
	fPointer = fopen("Floats.txt","r");
	if(fPointer == NULL)
		printf("Could not open the file. \n");

	while (!feof(fPointer)) {
		char c = fgetc(fPointer);
		if(c == ' ') 
			wsCount++;
		else if (c != ' ' && c != '\n')
			cCount++;
	}
	
	printf("Number of white spaces is %d\n", wsCount);
	printf("Number of characters without white spaces is %d\n", cCount);
	
	fclose(fPointer);
	return 0;
}
