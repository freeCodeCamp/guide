---
title: Logical Operators
---
## Logical Operators

<strong>Logical Operators</strong>
<br>
Commonly used in IF or WHILE statements. <br>
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




