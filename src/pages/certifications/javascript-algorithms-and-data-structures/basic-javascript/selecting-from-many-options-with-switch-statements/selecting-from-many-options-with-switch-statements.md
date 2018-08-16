Selecting from Many Options with Switch Statements

Problem:

Basic JavaScript: Selecting from Many Options with Switch Statements

"If you have many options to choose from, use a switchstatement. A switchstatement tests a value and can have many casestatements which define various possible values. Statements are executed from the first matched casevalue until a breakis encountered."

Here is a pseudocode example:

    switch(num) {
      case value1:
        statement1;
            break;
        
      case value2:
        statement2;
        break;
    
      case valueN:
        statementN;
        break;
    

Explanation

casevalues are tested with strict equality (===). The breaktells JavaScript to stop executing statements. If the breakis omitted, the next statement will be executed.

Write a switch statement which tests valand sets answerfor the following conditions:

- 1- "alpha"
- 2- "beta" 
- 3- "gamma" 
- 4- "delta" 

So let's start by following the switch pseudocode:

Things we should pay attention to:

- switch - what the function is
- num - what the value will be set on each situation
- valueN - what possibilities we want to test
- statement - what will return if the case is true

So in this case we want to:

- Replace the num with val
- Consider all the values we want to test
- Replace the statement with what will return if its true

If even after re-reading this you won't be able to do it, take a look at my answer

Answer:

    function caseInSwitch(val) {
      var answer = "";
      // Only change code below this line
      switch(val){
        case 1:
          answer = "alpha";
          break;
        case 2:
          answer = "beta";
          break;
        case 3:
          answer = "gamma";
          break;
        case 4:
          answer = "delta";
          break;
      }
      
      // Only change code above this line  
      return answer;  
    }
    
    // Change this value to test
    caseInSwitch(1);
    



"This was my first attempt on the stub, so be gentle, hope I helped =) , Francisco M."

---

Help our community expand it.

This quick style guide will help ensure your pull request gets accepted.
