---
title: Loops
---

# For loop in Go
Loops are control structures that provide iterative repetition of tasks.  Unlike many other languages that also have `while` or `do-while` loops, Go only provides `for` loops. The basic `for` loop has three components separated by `;`:

  * the **init** statement: executed before the first iteration

  * the **condition** expression: evaluated before every iteration

  * the **post** statement: executed at the end of every iteration

The **init** statement is often a short variable declaration. The iterator variable declared there are visible only in the scope of the `for` statement. 

The **condition** is a boolean expression that declares the condition required for the loop code to execute.  The loop stops iterating once the boolean condition evaluates to false.

The **post** statement updates the iterator variable for the next iteration's condition evaluation.

## Basic Iteration
One of the most commonly iterative types used is an `int`, as shown in the example below.

```Go
package main

import "fmt"

func main() {
  sum := 0
  for i := 0; i < 10; i++ {
    sum += i
  }
  fmt.Printf("The sum of numbers 0 through 9 is %v.\n", sum)
}
```
In this example, the **init** statement `i := 0` initializes the iterator variable to 0, the **condition** evaluation `i < 10` tests the iterator for the end condition, and the **post** statement `i++` increments the iterator variable for the next iteration.  In this example, the loop executes for values 0 through 9.

Note that the sum variable is declared outside the loop and updated inside the loop.  If it were declared inside, it would be a local variable that would be recreated for every loop iteration, and it would not be available once the loop completed.

## Built-In Iteration
```Go
package main

import "fmt"

func main() {
  var val = 11
  var primes = []int{2, 3, 5, 7, 11, 13, 17, 23, 29, 31, 37}
  var position int
  for i, p := range primes {
    if val == p {
      position = i + 1
    }
  }
  fmt.Printf("The value %v is in position %v in the list of primes.\n", val, position)
}
```
Certain Go data structures, such as arrays, slices, and maps, support the built-in `range` function.  The function iterates through an ordered structure and returns the index (arrays, slices) or key (maps) and value for each position in the structure.

In this example, `primes` is a slice of `int`.  The iteration `for i, p := range primes` returns each index and the prime value at that index position.  

### Range Return Options
If either the index/key or the value is not needed, the underscore or space placeholders should be used rather than declaring the variable.  Examples are below.

```Go
package main

import "fmt"

func main() {
  var val = 10
  var primesUnder40 = []int{2, 3, 5, 7, 11, 13, 17, 23, 29, 31, 37}
  isPrime := false
  for _, p := range primes {
    if val == p {
      isPrime = true
    }
  }
  
  if isPrime {
    fmt.Printf("The value %v is a prime number under 40.\n", val)
  } else {
    fmt.Printf("The value %v is a not prime number under 40.\n", val)
  }
  
  var powers2 []int
  for i := 0; i < 10; i++ {
    powers2[i] = 1 << uint(i)
  }
  val = 8
  var exp int
  for i := range powers2 {
    if powers[i] == val {
      exp = i
      break
    }
  }
  
  fmt.Printf("The value %v is 2 to the power of %v.\n", val, exp)
}
```

## Replacement for while-loop
To simulate while-loop of other languages, you can simply exclude the **init** and **post** statement:

```go
func main() {
	num := 1
	for num <= 1000 {
		num *= 2
	}
	fmt.Println("The smallest power of 2 above 1000 is", num)
}
```
