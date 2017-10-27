---
title: For loop
---

# Go's 'for' loop

Go's only looping construct is the `for` loop. It is similar to `for` loops in
other languages like C, Java, or JavaScript and consists of three components
separated by semicolons:

  * the **init** statement: executed before the first iteration

  * the **condition** expression: evaluated before every iteration

  * the **post** statement: executed at the end of every iteration

Unlike in the other languages, no parentheses are surrounding the three
components!

The **init** statement is often a short variable declaration. The variables
declared there are visible only in the scope of the `for` statement. The loop
stops iterating once the boolean condition evaluates to false.


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

In Go, the **init** and **post** statements are optional. If they are omitted,
the semicolons can be dropped as well and the behaviour is similar to C's `while`
loop. The following three functions all do the same:

```go
package main

import "fmt"

func basic_for() {
	sum := 1
	for i := 0; sum < 1000; i++ {
		sum += sum
	}
	fmt.Println(sum)
}

func omitted_for() {
	sum := 1
	for ; sum < 1000; {
		sum += sum
	}
	fmt.Println(sum)
}

func dropped_for() {
	sum := 1
	for sum < 1000 {
		sum += sum
	}
	fmt.Println(sum)
}
```

If you omit the **condition**, Go will loop forever, creating an infinite loop.
