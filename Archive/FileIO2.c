#include<stdio.h>
#include<stdlib.h>

int main() {
	float temp;
	float max, max2 = 0.0;
	float min, min2 = 500000.0;
	float average = 0.0;

	FILE *fPointer = NULL;
	fPointer = fopen("Floats.txt","r");
	if(fPointer == NULL)
		printf("Could not open the file.\n");

	int i;
	for(i = 0; i<10000; i++) {
		fscanf(fPointer, "%f", &temp);
		if(temp > max) 
			max = temp;    
		average += temp;
	}
	
	rewind(fPointer);
	
	for(i = 0; i<10000; i++) {
		fscanf(fPointer, "%f", &temp);
		if(temp < min) 
			min = temp;
	}
	
	rewind(fPointer);

	for(i = 0; i<10000; i++) {
		fscanf(fPointer, "%f", &temp);
		if(temp > max2 && max2 != max) 
			max2 = temp;    
	}  
	
	rewind(fPointer);
	
	for(i = 0; i<10000; i++) {
		fscanf(fPointer, "%f", &temp);
		if(temp < min2 && min2 != min) 
			min2 = temp;    
	}
	  
	average /= 10000.0;
  
	printf("max: %f\n", max);
	printf("second max: %f\n", max2);
	printf("min: %f\n", min);
	printf("second min: %f\n", min2);

	fclose(fPointer);
	
  return 0;
}

