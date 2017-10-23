---
title: Loops
---

## Loops

What we'll be discussing in this guide:
* For Loops
* While Loops
* Do-While Loops

  -----------------------------------

![alt text](https://i.imgur.com/2pOKuTl.png)

_Note: The categories' marks in this guide will be reffering to the picture above._

  -----------------------------------

* The For Loop.

	1. Initial Variable

		- The "initial variable" step is executed first. (in the example: we set counter to 1)
		- This operation is performed only once.
		- This step allows you to declare/initialize any variable which will be used by your loop.

	2. Condition
	
		- Next, the program will evaluate the condition.
		- If the condition is true, the program enters the loop. (in the example: if counter is less or equal to number)
		- If the condition is false, the program skips the loop. (in the example: if counter is strictly bigger than number)
		- You can leave this field blank as long as there is a semicolon. (example: for(counter = 1 ;   ; counter++) )

  3. Increment
		
		- After the statements in the loop have been executed, the value of the variable (in the example: counter) will increment.
		- You can leave this field blank as long as there is a semicolon. (example: for(counter = 1 ; counter <= number ; ) )
		
	* After the 3 steps, the program will re-evaluate the condition.
	
	* If the condition is true, it will execute the statements in the loop again until the condition becomes false.
	
	* If the condition is false, it will exit the loop and continue with whatever code there's left in the program.
	
	*For a block of statements, "{ }" are needed, however for a single statement they are not needed necessarily.
	
	![alt text](https://i.imgur.com/SThwhrx.png)

	```cpp
	int counter, number;
	
	cin >> number;
	
	for(counter = 1 ; counter <= number ; counter++)
		cout << counter << endl;
	```

  -----------------------------------
	
	* The While Loop.
	
		ii. Condition
		
			- The While Loop only uses conditions to "work" instead of the 3-part-bungaloo used by the For Loop.
			- The While Loop accepts more than one condition at a time. (example: while(a > b && c < d && ok == 0) )
			
		*For a block of statements, "{ }" are needed, however for a single statement they are not needed necessarily.
	
	```cpp
	int counter = 1, number;
	
	cin >> number;
	
	while(counter <= number)
	{
		cout << counter << endl;
		counter++;
	}
	```

  -----------------------------------
	
	* The Do While Loop.
	
		ii. Condition
		
			- The Do While Loop only uses conditions to "work" exactly like the While Loop does.
			- The Do While Loop accepts more than one condition at a time. (example: do { ... }while(a > b && c < d && ok == 0); )
			
		*There are no single statements for this loop.
	
	```cpp
	int counter = 1, number;
	
	cin >> number;
	
	do
	{
		cout << counter << endl;
		counter++;
	}
	while(counter <= number);
	```

  -----------------------------------
  
  Finally. This is the end of the Loops Guide.
  Hope you've learned something today and good luck!
