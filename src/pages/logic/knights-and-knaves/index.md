
## Knights and Knaves

### Introduction  

You are on an island where everyone is a knight or a knave. A knight can only tell the truth and a knave can only lie. This logic puzzle is meant for you to figure out who is what depending on what they tell you. 

### Examples 
Lets say you meet two people, person A and B. Person A tells you "We are both Knights" and person B tells you "Person A is a knave". An easy way to visualize and solve a Knights and Knaves puzzle is through a truth table.

| A | B | 
|---|---|
| Knight | Knight | 
|Knight|Knave|
|Knave|Knight|
|Knave|Knave|

Let us look at the first option where both are knight. Person A says they are both knights, which is true. Person B however says person A is knave which is not true and thus person A is lying (in the first row we decided person A is a knight). So The first row is false. 

| A | B | Explanation|
|---|---|---|
| Knight | Knight |False, person B is lying |
|Knight|Knave|False, person A is lying|
|Knave|Knight|**True**|
|Knave|Knave|False, person B is telling the truth|

Since the 3rd row is the only one that can be true we conclude that person A is a Knave and person B is a Knight.

Another example involves  meeting three people, person A, B, and, C. Person A says "Person B and Person C are both Knaves". Person B says "I am a knight". Person C says "Person B is lying". 

At first glance this may seem very confusing so let's make another truth table.

| A | B | C |
|---|---|---|
| Knight | Knight | Knight |
|Knight|Knight|Knave|
|Knight|Knave|Knight|
|Knave|Knight|Knight|
|Knave|Knave|Knight|
|Knight|Knave|Knave|
|Knave|Knight|Knave|
|Knave|Knave|Knave|

This table show every combination that Person A, B, and C could be. Now we will go through each of the eight option to see if their individual statements make sense with who we think they are. Let's start with the first one, all three are knight. This means all three must be telling the tuth. Let us look at Person A's statement. This is not true because we assumed Person B and C are knights. Thus Person A is lying and cannot be a Knight. So we move on to the next row. 


| A | B | C |Explanation|
|---|---|---|---|
| Knight | Knight | Knight |False, A is lying|
|Knight|Knight|Knave|False, A is lying|
|Knight|Knave|Knight|False, A is lying|
|Knave|Knight|Knight|False, this time A is a knave so they are supposed to lie however Person C is lying (since Person B is a knight), so person C must be a knave |
|Knave|Knave|Knight|**True**, Person A is lying, Person B is lying, and person C is telling the truth|
|Knight|Knave|Knave|False, similar to the 4th combination Person C is telling the truth since person B is lying|
|Knave|Knight|Knave|**True**, Person A is lying, Person B is telling the truth, and person C is lying|
|Knave|Knave|Knave|False, Person A is telling the truth so they should be a knight|

In this case there are two possible combinations. Person A is a knave but person B is a knave and Person C is a knight or person B is a knight and Person C is a knave.



<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


