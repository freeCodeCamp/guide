---
title: "JavaScript Switch"
parent: "javascript"
---

## Introduction

The **switch** statement evaluates an expression, matching the expression's value to a `case` clause, and executes statements associated with that case.

    switch (expression) {
      case value1:
        // statements executed when the result of expression matches value1
        break;
      case value2:
        // statements executed when the result of expression matches value2
        break;
      ...
      case valueN:
        // statements executed when the result of expression matches valueN
        break;
      default:
        // statements executed when none of the values match the value of the expression
        break;
    }

The optional **break** statement associated with each case label ensures that the program breaks out of `switch` once the matched statement is executed and continues execution at the statement following switch. If **break** is omitted, the program continues execution at the next statement in the `switch` statement.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) | [MSDN link](https://msdn.microsoft.com/en-us/library/hzc6t81t.aspx)

## Examples

In the following example, if **expr** evaluates to "Bananas", the program matches the value with case "Bananas" and executes the associated statement. When **break** is encountered, the program breaks out of `switch` and executes the statement following `switch`. If **break** were omitted, the statement for case "Cherries" would also be executed.

    switch (expr) {
      case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
      case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
      case "Bananas":
        console.log("Bananas are $0.48 a pound.");
        break;
      case "Cherries":
        console.log("Cherries are $3.00 a pound.");
        break;
      case "Mangoes":
      case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound.");
        break;
      default:
        console.log("Sorry, we are out of " + expr + ".");
    }

    console.log("Is there anything else you'd like?");

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/C8DP/0)

The following example takes advantage of the fact that if there is no **break** below a case statement it will continue to execute the next case statement regardless if the case meets the criteria. Here, four different values ("Cow", "Giraffe", "Dog", "Pig") perform exactly the same operation.

    var Animal = 'Giraffe';
    switch (Animal) {
      case 'Cow':
      case 'Giraffe':
      case 'Dog':
      case 'Pig':
        console.log('This animal will go on Noah\'s Ark.');
        break;
      case 'Dinosaur':
      default:
        console.log('This animal will not.');
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/C8DP/1)
