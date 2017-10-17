---
title: Comparison Operators
---
JavaScript has both **strict** and **type–converting** comparisons.

*   A strict comparison (e.g. ===) is only true if the operands are of the same type.

*   The more commonly used abstract comparison (e.g. ==) converts the operands to the same Type before making the comparison.

*   For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, then to the same type, before comparison.

*   Strings are compared based on standard lexicographical ordering, using Unicode values.

## Features of comparisons:

*   Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.

*   Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. Positive and negative zeros are equal to one another.

*   Two Boolean operands are strictly equal if both are true or both are false.

*   Two distinct objects are never equal for either strict or abstract comparisons.

*   An expression comparing Objects is only true if the operands reference the same Object.

*   Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.

## Equality operators

### Equality (==)

The equality operator converts the operands if they are **not of the same type**, then applies strict comparison. If **both operands are objects**, then JavaScript compares internal references which are equal when operands refer to the same object in memory.

#### Syntax

     x == y

#### Examples

     1   ==  1        // true
    "1"  ==  1        // true
     1   == '1'       // true
     0   == false     // true
     0   == null      // false

       0   == undefined   // false
     null  == undefined   // true

### Inequality (!=)

The inequality operator returns true if the operands are not equal. If the two operands are **not of the same type**, JavaScript attempts to convert the operands to an appropriate type for the comparison. If **both operands are objects**, then JavaScript compares internal references which are not equal when operands refer to different objects in memory.

#### Syntax

    x != y

#### Examples

    1 !=   2     // true
    1 !=  "1"    // false
    1 !=  '1'    // false
    1 !=  true   // false
    0 !=  false  // false

### Identity / strict equality (===)

The identity operator returns true if the operands are strictly equal **with no type conversion**.

#### Syntax

    x === y

#### Examples

    3 === 3   // true
    3 === '3' // false

### Non-identity / strict inequality (!==)

The non-identity operator returns true if the operands **are not equal and/or not of the same type**.

#### Syntax

    x !== y

#### Examples

    3 !== '3' // true
    4 !== 3   // true

## Relational operators

### Greater than operator (>)

The greater than operator returns true if the left operand is greater than the right operand.

#### Syntax

    x > y

#### Examples

    4 > 3 // true

### Greater than or equal operator (>=)

The greater than or equal operator returns true if the left operand is greater than or equal to the right operand.

#### Syntax

    x >= y

#### Examples

    4 >= 3 // true
    3 >= 3 // true

### Less than operator (<)

The less than operator returns true if the left operand is less than the right operand.

#### Syntax

    x < y

#### Examples

    3 < 4 // true

### Less than or equal operator (<=)

The less than or equal operator returns true if the left operand is less than or equal to the right operand.

#### Syntax

    x <= y

#### Examples

    3 <= 4 // true

_You can find more information at <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators' target='_blank' rel='nofollow'>MDN</a>._
