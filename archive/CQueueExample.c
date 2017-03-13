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

