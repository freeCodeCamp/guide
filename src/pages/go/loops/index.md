---
title: Go
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

This means that to use a `while` loop, a `for` loop has to be used but with only the **condition** expression

An example of the `while` loop is given below - 

**while.go**
```go
package main

import "fmt"

func main(){
    sum := 1
    for sum < 10 {
        sum += sum
        fmt.Println(sum)
    }
}

```
Running the above will yield an output as such - 

```
$ go run while.go
2
4
8
16
```
