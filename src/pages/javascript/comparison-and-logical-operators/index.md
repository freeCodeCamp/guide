---
title: Comparison and Logical Operators
---
## Comparison and Logical Operators

Comparison and Logical Operators are used to compare variables or objects (strings, integers etc). 

These are normally used in if statements, eg. 
```
var myAge = 30;
var yourAge = 25;
if(myAge > yourAge){                    //If my age is greater than your age, do something
  console.log("I am older than you")    //log the following string
};
```

Lets use the following variables for our examplese
var x = 5,
var y = 7,
var text = "I am a string",

<br>
<strong>Comparison Operators</strong>
<br>
<p><strong>Operator:</strong> == (equal to, ignores type of variable)</p>

```
x == 5 // returns true

x == 8 // returns false

x == "5" // returns true 
```

<strong>Operator:</strong> === (equal to, and equals type) 
```
x === 5 // returns true

x === 8 // returns false

x === "5" // returns false, because x is an integer, where as "5" is a string
```

<strong>Operator:</strong> != (not equal) 
```
x != 11 // returns true

x != 5 // returns false
```

<strong>Operator:</strong> !== (not equal, inlcuding type) 
```
x != 11 // returns true

x != 5 // returns false

x !== "5" // returns true, because x is equal to the integer 5, not the string "5".
```

<strong>Operator:</strong> < and > (greater or less than, remember, the arrow points to the smaller side) 
```
x < 11 // returns true, as 5 is less than 11

x > 3 // returns true, 5 is greater than 3

x > 7 // returns false, as 5 is not greater than 7

x > 5 // returns false, as 5 (x = 5) is not greater than 5
```

<strong>Operator:</strong> >= and <= (greater or equal to, and less than or equal to) 
```
x <= 10 // returns true, as 5 is less than 10

x >= 5 // returns true, as 5 (x = 5) is equal to 5
```

<br>
<strong>Logical Operators</strong>
<br>
<p><strong>Operator:</strong> && (if condition1 AND condition 2 are true, then do this)</p>

```
if(gender === "Female" && age > 50) {                               //If you are a Female AND over 50 years old then..
  console.log("You are invited to the Womens over 50's golf day");  //Log the following message
 }
```

<strong>Operator:</strong> || (if condition1 OR condition 2 are true, then do this) 
```
if(nationality === "American" || nationality === "Canadian) {       //If you are a American OR Canadian..
  console.log("You are invited to the North American Golf day");    //Log the following message
 }
```

<strong>Operator:</strong> ! (if not true a.k.a if false, commonly used to check the status of a switch/boolean) 
```
var lampLight = false;

if(!lampLight){                           //If lampLight variable is set to false..
  lampLight = true;                       //Set it to true
  console.log("You turned on the lamp");  //Log the message that the light was turned on
 } else {                                 //Otherwise, if the lampLight variable wasn't false..
 lampLight = false;                       //Set it to false
 console.log("You turned off the lamp");  //Log message that the light was turned off
 }
```


