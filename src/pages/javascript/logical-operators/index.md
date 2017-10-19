---
title: Logical Operators
---
## Logical Operators



There are three logical operators in JavaScript.  They are :

* &&  (and)
* ||   (or
* !   (not)


Often you'll use these to make sure certain conditions are met before running or not running code.

The AND operator (&&) checks that both variables or values evaluate to true.  If so the code runs, if not it doesn't.  Like this:

```javascript
if (isTea && isGreen) {
drink();
}
```

This checks first if it's tea, then it checks if it's green.  If both conditions are met.  The drink function runs.

But iced green tea exists.  What if you don't want to drink iced green tea, but only hot.  Add another and operator!

 

```javascript

if (isTea && isGreen && isHot) {

drink();

}

```

The OR operator ( || ) checks to see if one of a series of checks is true.  If even one of these evaluates to true then the code runs.  Consider this example:
```javascript
if (bossHasLeft || bossIsInAMeeting) {
goHomeEarly();
}
```

Like the example with the && operator it is possible to add more operators.

 

```javascript

if (bossHasLeft || bossIsInAMeeting || itIsFriday) {

goHomeEarly();

}

```

The not operator ( ! ) checks if condition is not met.  If it isn't met the code runs.

```javascript
if (!paidMember) {
alert ('Sorry!  Paid Members Only!');
}
```
The real magic comes when you combine these logical operators with comparison operators and with each other. 



#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


