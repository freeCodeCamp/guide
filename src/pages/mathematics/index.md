---
title: Mathematics
---
## Mathematics

In this section, we'll have guides to a wide variety of mathematical concepts.

### Maths in programming
Although it is good practice to create mathematical functions yourself, there are math libraries availiable for use in many programming languages. These have predetermined functions you can utilize to execute calculations. Some concepts of mathematics popularly used in coding with respect to algorithmic coding are

#### Fibonacci sequence (generating functions)
We all know that the recursion excercise begins with solving a fibonaaci sequence. It is also the first example which shows the power of Dynamic Programming. So, it is the special case of a class of mathematics known as generating functions. So, what we will be discussing here applies in general to all genrating function.
There is a concept in mathematics that "Each generating function has a sequence and each sequence has a generating function". But, the problem arises in second part. It is not always easy to find the generating in general. To remeber this, I draw a analogy to non-terminating rational number "If you know the number in decimal form, it is not easy to find the corresponding fractional form, but if we know the fraction, it is always easy to find the decimal form". So, we generally study some quite beautiful generating functions, in terms of their sequence. Why? Because, we know that sequences can easily be handled by a lot of algorithmic paradigm. Some famous sequences known are fibonacci, hadamard (similar to catalan), etc.

### Including math libraries
In this section we'll show you how to include the standard math library in different languages including a short example of how you can use it.

#### C#
``` cs
using System.Math;

public class Calculator {
  
  private int[] array = {1, 2, 3, 4, 5};
  
  private int CalculatePoweredArray (int power,int[] arr) {
    var poweredArray = arr;
    foreach (int nmbr in poweredArray) {
      nmbr = Math.Pow(nmbr, power); // First argument is the number to be raised, second argument is the power
    }
    return poweredArray;
  }
  
}
```

Calling the function with a power of 3 will give these results:
[1, 8, 27, 64, 125]

Documentation reference: <a href='https://msdn.microsoft.com/en-us/library/system.math(v=vs.110' target='_blank' rel='nofollow'>MSDN</a>.aspx)

#### JavaScript
With Node.js
``` javascript
var math = require( 'mathjs' );
```

In the browser
``` html
<!DOCTYPE HTML>
<html>
<head>
  <script src="math.js" type="text/javascript"></script>
</head>
<body>
  <script type="text/javascript">
    // use the math.js libary
    math.sqrt(-4); // result: 2i
  </script>
</body>
</html>
```

Documentation reference: <a href='http://mathjs.org/docs/index.html' target='_blank' rel='nofollow'>Math.js documentation</a>

#### C++
``` cpp
#include <math.h>
```

Documentation reference: <a href='http://www.cplusplus.com/reference/cmath/' target='_blank' rel='nofollow'>cplusplus reference</a>

#### Python
``` python
>>> import math
```


