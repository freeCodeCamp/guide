---
title: Delete Properties From A javaScript Object
---
We can also delete properties from objects like this:

    delete ourDog.bark;

The **delete operator** removes a property from an object.

## Syntax

`delete expression` where expression should evaluate to a property reference, e.g.:

    delete object.property
    delete object['property']

## Parameters

**object** The name of an object, or an expression evaluating to an object.

**property** The property to delete.

## Return value

Throws in [strict](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode) mode if the property is an own non-configurable property (returns false in non-strict). Returns true in all other cases.

[Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)