---
title: Hello World in Go
---

To install Go in your computer, download its installer from <a href='https://golang.org/dl/' target='_blank' rel='nofollow'>here</a> and install it by following these <a href='https://golang.org/doc/install' target='_blank' rel='nofollow'>installation instructions</a>.


## First Go program

Create a file named `main.go` and add the following code in it :-

```go
package main // Package declaration

import "fmt" // Importing packages

// Function declaration
func main() {
	fmt.Println("Hello, World!")
}

```
Now, run the above program from Terminal/Command Line. To do this, open Terminal/Command Line and move to the directory in which `main.go` is present. Then run the command `go run main.go` in it.
You should see the ouptut similar to the following output :-

    $ go run main.go
    Hello, World!
