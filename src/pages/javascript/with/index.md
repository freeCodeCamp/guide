---
title: With
---
## With

JavaScript's `with` statement is a shorthand way for editing several properties on one object. Most developers discourage usage of `with`, and you are best not using this keyword.

**Note**: `"strict mode"` forbids usage of `with`.


### Syntax
```syntax
with (expression)
  statement
```


### Example Usage
In JavaScript, you can individually modify an object's properties like below:
```javascript
earth.land.tree.kind = 'apple';
earth.land.tree.height = 4;
```
`with` gives you a shorthand to modify the properties on an object:
```javascript
with (earth.land.tree) {
  kind = 'apple';
  height = 4;
}
```


### Alternatives
Instead of using `with`, a much better approach is to assign the object to a variable, and then modify the variable's properties.
```javascript
let tree = earth.land.tree;
tree.kind = true;
tree.height = true;
```


#### More Information:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with" target="_blank">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with</a>

<a href="https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/" target="_blank">https://yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/</a>

<a href="http://2ality.com/2011/06/with-statement.html" target="_blank">http://2ality.com/2011/06/with-statement.html</a>
