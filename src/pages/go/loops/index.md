---
title: Loops
---

# For loop in Go
Go has only `for` loop. The basic `for` loop has three components separated by `;` -

  * the **init** statement: executed before the first iteration

  * the **condition** expression: evaluated before every iteration

  * the **post** statement: executed at the end of every iteration

The **init** statement is often a short variable declaration. The variables declared there are visible only in the scope of the `for` statement. The loop stops iterating once the boolean condition evaluates to false.

An example of the `for` loop is given below -

**for.go**

```go
package main

import "fmt"

func main() {
	sum := 0
	for i := 0; i <= 10; i++ {
		sum += i
	}
	fmt.Println("The sum of first 10 natural numbers is", sum)
}

```
Running the above program produces an output similar to the following output -
```    
$ go run for.go
The sum of first 10 natural numbers is 55
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
