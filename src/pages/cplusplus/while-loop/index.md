---
title: while loop
---
## While loop

The `while loop` can be used if you don’t know how many times a loop must run.
Here is an example:
```cpp
#include<iostream>
	using namespace std;

	int main()
	{
		int counter, howmuch;

		cin >> howmuch;

		counter = 0;
		while ( counter < howmuch)
		{
			counter++;
			cout << counter << '\n';
		}
		return 0;
	}
```

Lets take a look at the example: First you must always initialize the counter before the while loop starts ( counter = 1). Then the while loop will run if the variable counter is smaller then the variable “howmuch”. If the input is ten, then 1 through 10 will be printed on the screen. A last thing you have to remember is to increment the counter inside the loop (counter++). If you forget this the loop becomes infinitive.
