---
title: Understand Functional Programming Terminology
---
## Understand Functional Programming Terminology

### Method

Just as in the last challenge, you must call the `getTea` method and store it in a variable. Only this time, you have 2 variables to store 2 seperate sets of data in. You will see that the `getTea()` function is the same as before, only now it takes in 2 seperate parameters. The first parameter is a function, so we will need to pass in either the `prepareGreenTea()` function or the `prepareBlackTea()` function, followed by the second parameter `numOfCups` which can be input as an integer. 

### Solution

```javascript

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = getTea(prepareGreenTea, 27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13); // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

```
