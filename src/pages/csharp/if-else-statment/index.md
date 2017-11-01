---
title: If Else Statement
---

# If Statement

An If Statement decides weather a block of code should run based on the value of a boolean expression.

## Example
```
//Evaluates weather 1 is greather than 0
if (1 > 0){
  //Writes a line to console stating that one is indeed greater than zero
  Console.WriteLine("One is greater than zero.");
}
```

## If Else Statement:

An If Else Statement runs one of two block of code depending on the evaluation of the boolean expression.

## Example
```
int n = 5;

//Evaluate weather n is larger than ten; if it is print, "N is double digits." Otherwise print, "N is a single digit number." in console.
if (n >= 10)
{
  Console.WriteLine("N is double digits.");
}
else
{
  Console.WireLine("N is a single digit number.");
}

```

## If / Else if / Else Statement:

This is similar to an if else statement. However, you can break it down into more than just two results. If you find that you are using an if else if else statement that has many conditions, you may want to consiter a switch statement.

## Example
```
int score = 50;

//Evaluate the players score and give them a message based on how they did.
if (score < 10)
{
  Console.WriteLine("Try better next time.");
}
//Is score over 100?
else if (score > 100)
{
  Console.WireLine("Amazing score!");
}
//Score must be over 10 and under 100
else
{
  Console.WriteLine("Keep up the good work.");
}

```
