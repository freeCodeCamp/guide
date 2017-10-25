---
title: Variables
---
## PHP Variables

All PHP variables start with the `$`, for example: `$var`.

Variables in PHP can start with a letter or an underscore, and can be followed by any other number of letters, numbers, or underscores. These are examples of valid PHP variables:

- `$lets_go_bowling`
- `$_just2please`
- `$testing123`

Variables can be assigned just about anything in PHP, and are not strictly typed. This means that a variable that is declared as a string can be reassigned as an array:

```
$var = 'this little piggy';

echo $var; //this would output the string 'this little piggy'.

$var = [ 1, 2, 3 ];

echo $var; //this would throw an error since $var is now an array.
```

### Types
There are many different data types a variable could be in PHP, including:

- Boolean (true/false)
- Integer ( 1, 2, 3 ... )
- Float ( 1.2, 23.7 ... )
- String ( 'this is a string' )
- Array ( [ 'apples', 'bananas', 'rocks' ] )

For example, this:

``` 
$data = array(1, true, array( 1, 2, 3), new stdClass, 'foo');

foreach ($data as $value) {
    echo gettype($value), "\n";
}
```

Will return:

```
integer
boolean
array
object
string
```


### Quick Arithmetic

Variables can be incremented and decremented as well as use other standard aritmetic operators:

```
$a = 1;
$b = 2;

echo $a + $b; // will print 3 on the screen
echo $a - $b; // will print -1 on the screen
echo $a * $b; // will print 2 on the screen
echo $a / $b; // will print 0.5 on the screen

echo $a++; // will print 2 on the screen
echo $b--; // will print 2 on the screen
```

