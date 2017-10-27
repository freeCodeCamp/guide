---
title: Mathematics
---
## Mathematics

In this section, we'll have guides to a wide variety of mathematical concepts.

### Maths in programming
Although it is good practice to create mathematical functions yourself, there are math libraries availiable for use in many programming languages. These have predetermined functions you can utilize to execute calculations.

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
>>> math.sqrt(9)      //takes only positive roots into consideration
3.0
>>> math.pi           //you can also utilize mathematical consonants like pi and e
3.141592653589793
>>> math.radians(90)  //converts degrees to radians
1.5707963267948966
```

The `math` module can also be imported as follows, and the usage difference is illustrated: 

```python
>>> from math import *
>>> sqrt(4)
2.0
>>> pi
3.141592653589793

```

Documentation reference: <a href='https://docs.python.org/2/library/math.html' target='_blank' rel='nofollow'>Python 2</a> | <a href='https://docs.python.org/3/library/math.html' target='_blank' rel='nofollow'>Python 3</a>


