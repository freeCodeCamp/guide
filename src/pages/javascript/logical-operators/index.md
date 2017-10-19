---
title: Logical Operators
---
## Logical Operators

Logical operators are typically used with Boolean (logical) values.

 Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| Logical AND ( `` && `` )      | ```expr1 && expr2``` | ``&&`` returns ``true`` if both operands are true, otherwise returns ``false`` |
| Logical OR ( &#124;&#124; )      | <code>expr1 &#124;&#124; expr2</code> | <code>expr1 &#124;&#124; expr2</code> returns ``true`` if either of the operands is true, otherwise returns ``false`` |
| Logical NOT ( `` ! `` )      | ```!expr1``` | ``!`` returns ``true`` if the single operand is ```true``` else returns ```false``` |

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
### Example for Logical Operators
```javascript
var expr1 = true,
    expr2 = false;
        
console.log(expr1 && expr2);    // Returns false
console.log(expr1 || expr2);    // Returns true
console.log(!expr1);    // Returns false

```
Even though the && and || operators can be used with operands that are not Boolean values, they can still be considered Boolean operators since their return values can always be converted to Boolean values.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target='_blank' rel='nofollow'> Mozilla Developers Guide for Logical Operators</a>
