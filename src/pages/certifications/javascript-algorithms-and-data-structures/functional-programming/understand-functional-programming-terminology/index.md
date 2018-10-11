---
title: Understand Functional Programming Terminology
---
## Understand Functional Programming Terminology

In this exercise we are assigning the result of a higher order function to variables. To do this we call a function with a callback function as a parameter.
 
## Hint:
```javascript 
const basketOne = makeBasket(addFruit, 10) 
```
 
<br/>

 ## Solution:
 
 <br/>
 
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
 const tea4GreenTeamFCC = getTea(prepareGreenTea,27); // :)
const tea4BlackTeamFCC = getTea(prepareBlackTea,13); // :)
 // Add your code above this line
 
 console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
 
 ```
## Code explanation:

In the solution above we passed in the functions ``` prepareGreenTea() ``` and ``` prepareBlackTea() ``` as parameters or callback functions for the ``` getTea() ``` functions being assigned to our two constant variables ``` tea4BlackTeamFCC ``` 
and ``` tea4GreenTeamFCC ```.
This way no global variables are changed, and we have the option to add an unlimited number of different choices of  ``` prepareTea() ```  methods since it is a callback function being passed to the higher order function of ``` getTea() ```.
