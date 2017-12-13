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
Now, run the above program from Terminal/Command Line. To do this, open Terminal/Command Line and move to the directory in which `main.go` is present. First compile the program and run `go build main.go`. Then run the command `go run main.go` to run program.
You should see the ouptut similar to the following output :-

    $ go build main.go
    $ go run main.go
    Hello, World!
