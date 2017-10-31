---
title: for loop
---
## For loop

 The `for loop` loops from one number to another number and increases by a specified value each time.
The “for loop” uses the following structure:
```cpp
for (Start value; end condition; increase value)
     		statement(s);
```
Look at the example below:
```cpp
#include<iostream>
	using namespace std;

	int main()
	{
		int i;

		for (i = 0; i < 10; i++)
		{
			cout << "Hello" << "\n";
			cout << "There" << "\n";
		}
		return 0;
	}
```	