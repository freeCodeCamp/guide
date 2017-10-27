---
title: Lambda Expressions
---
## Lambda Expressions

Lambda Expressions are ideally used when we have something simple to be done an we are more interested in quickly getting the job done rather than formally naming the function. For example, you can use Lambda Expression as a key in <a href="https://guide.freecodecamp.org/python/list-sort-method">sort method</a>.

#### Syntax

```lambda [argument]: [return value]```

#### Examples

##### Sorting an array based on second parameter
````
>>> array = [(5, 2), (2, 1), (1, 3)]
>>> array.sort(key=lambda x: x[1])
[(2, 1), (5, 2), (1, 3)]
````     
##### Count distance between each point and the origin of coordinates
```
>>> import math
>>> points = [(1, 0), (3, 8), (0, 4), (0, 0)]
>>> list(map(lambda x: math.sqrt(x[0] ** 2 + x[1] ** 2), points))
[1.0, 8.54400374531753, 4.0, 0.0]

```

<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/python/lambda-expressions/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
