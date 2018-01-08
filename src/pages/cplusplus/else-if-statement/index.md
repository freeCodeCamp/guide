---
title: else if statement
---

Before diving into this tutorial you should have the concepts of if statement and else statement.
Now let's take a look at else if statement.
Suppose that you ask user to input two numbers and you tell them the greater number and if none of 
them is greater then the other, then you print "Both are equal".

In this scinerio you will need an else if statement. The program will look like this :

```
#include<iostream>
using namespace std;
int main()
{
	int number1,number2;
	cout << "Enter first number  ";
	cin >> number1;
	cout << "Enter second number  ";
	cin >> number2;

	if(number1 > number2)     // You check if first number is greater then second number
	{
		cout << "Number 1 is greater";
	}
	else if(number2 > number1)    // It checks if second number is greater then first number
	{
		cout << "Number 2 is greater";
	}
	else    // If both of the above cases return false then both numbers are equal
	{
		cout << "Both the numbers are equal";
	}

	return 0;
}

```
* Not that else if statement is executed if the first condition i.e (number1 > number2) return false otherwise elseif 
  statement will not be executed
  
* You can write multiple else if conditions depending on the problem you want to solve  
