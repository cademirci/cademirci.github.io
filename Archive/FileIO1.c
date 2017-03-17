#include<stdio.h>
#include<stdlib.h>

int main() {
	srand(time(NULL));
	FILE *fPointer; 
		fPointer = fopen("Floats.txt","w");
	if(fPointer == NULL)
		printf("Could not open a txt file. \n");
	int i;   
	for(i = 0; i < 10000; i++) {
		fprintf(fPointer, "%.4f", (float)(10000 + rand() % 499000));
		fprintf(fPointer, "\n");
	}
    fclose(fPointer);

	FILE *bPointer; 
	bPointer = fopen("Floats.bin","wb");
	if(fPointer == NULL)
		printf("Could not open a txt file. \n");
	float f;
	for(i = 0; i < 10000; i++) {
		f = (float)(10000 + rand() % 499000);
		fwrite(&f, 1, sizeof(f), bPointer);
	}	
	
	/*
	 * 
	 * txt file is 118.1KB.
	 * 
	 * bin file is 40.0KB.
	 * 
	 * 
	 * 
	*/
	
  return 0;
}
