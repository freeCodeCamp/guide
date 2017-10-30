---
title: Variadic Functions
---

Variadic functions are functions that can be called with any number of trailing arguments. This is an useful feature especially when we
are working on web-apps. Sometimes we are not sure on the number of elements we need to pass to the HTML templating engine.

Here is the basics on how varidic functions work:

````
package main
import "fmt"

func printFruits(fruits ...string) {
    for _, fruit := range fruits{
        fmt.Println(fruit)
    }
 
}
func main() {

   printFruits("apple", "bannana")
   printFruits("papaya", "coconut", "pear", "pineapple")
   berries := []string{"blueberry", "strawberry", "raspberry"}
   printFruits(berries...)
}
````

First, in printFruits we defined the number of arguments with [...string]. This tells Go that this function accepts any number of string arguments

The first two calls to printFruits shows that the function will print each string, even if we are passing different number of arguments:

````
apple
bannana
...
papaya
coconut
pear
...
````

This will also work for slices. To use a vardiac function with a slice, we add the training dots to the call:

````
printFruits(berries...)
...
blueberry
strawberry
raspberry
````

