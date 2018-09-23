---
title: Use && for a More Concise Conditional
---
## Use && for a More Concise Conditional
The example given is 
```
{condition && <p>markup</p>} 
```
which is demonstrated below using the condition of the this.state.dinnerCooked boolean.
If the boolean is true the markup included in the {} with the condition will display, if not it will not display

```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dinnerCooked: true
    }   
  }
  render() {  
    return (
       <div>       
         {this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will be displayed
       </div>
    );
  }
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dinnerCooked: false
    }   
  }
  render() {  
    return (
       <div>       
         {this.state.dinnerCooked &&<h1>Dinner is Cooked!</h1>}//h1 tag contents will NOT be displayed
       </div>
    );
  }
};
```
Explanation from [ReactJS.org documentation](https://reactjs.org/docs/conditional-rendering.html)

You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element

It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false.

Therefore, if the condition is true, the element right after && will appear in the output. If it is false, React will ignore and skip it.
