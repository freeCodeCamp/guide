
## Create a Component with Composition

The idea of parent and child components is central to React, so make sure you take your time in getting the hang of this.
The syntax for calling these simple functional components after they have been defined:
```javascript
<SimpleComponent/>
```
So you just nest that inside the more complex React component:
```javascript
class ComplexComponent extends React.Component{
   constructor(props){
       super(props);
       }
       render(){
          return (
             <div>
                <SimpleComponent/>
             </div>);
       }
   };
   ```
Watch out for case sensitivity, React uses PascalCase and not camelCase. This would be a good time to review the JavaScript ES6 and array methods lessons as you will be utilizing them in the upcoming material.

