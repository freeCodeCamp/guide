---
title: With
---
## With
***
The with statement extends the scope chain for a statement.

### Syntax

```javascript
with (expression)
  statement
```
  
<dl>
  <dt>Exxpression</dt>
  <dd>Adds the given expression to the scope chain used when evaluating the statement. The parentheses around the expression are required.</dd>

  <dt>Statement</dt>
  <dd>Any statement. To execute multiple statements, use a block statement ({ ... }) to group those statements.</dd>
</dl>

JavaScript looks up an unqualified name by searching a scope chain associated with the execution context of the script or function containing that unqualified name. The 'with' statement adds the given object to the head of this scope chain during the evaluation of its statement body. If an unqualified name used in the body matches a property in the scope chain, then the name is bound to the property and the object containing the property. Otherwise a **ReferenceError** is thrown.

```diff
- Using with is not recommended, and is forbidden in ECMAScript 5 strict mode. The recommended alternative is to assign the object whose properties you want to access to a temporary variable.
```

### Using with

The following with statement specifies that the Math object is the default object. The statements following the with statement refer to the PI property and the cos and sin methods, without specifying an object. JavaScript assumes the Math object for these references.

```javascript
var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
```

### More Information:
- Statement documentation: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with)


