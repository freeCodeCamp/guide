---
title: Installing Go
---

# Installing Go on Windows

## Downloading Go
Go to https://golang.org/ and click on **Download Go**. Click and download **go1.9.1.windows-amd64.msi** and go through the Setup Wizard once the download completes.

## Creating a workspace
You will need to create a workspace to write and run Go code. You can create your workspace by opening the Windows PowerShell application. You should be in the user directory already, but if you aren't then navigate to **C:\Users\YOUR_WINDOWS_USERNAME**. Once here, run the following commands on PowerShell:

`mkdir go`

`cd .\go\`

`mkdir src`

`cd .\src\`

`mkdir hello`

`cd .\hello\`

After creating the workspace, create a file named `hello.go` with your preferred text editor and save it in the workspace you just created - **C:\Users\YOUR_WINDOWS_USERNAME\go\src\hello**

## Writing and running a Go program
After creating your workspace, you can add the following code to `hello.go` and save it:

```go
package main

import "fmt"

func main() {
    fmt.Printf("Hello, FreeCodeCamp!\n")
}
```

Back in PowerShell, make sure you are in **C:\Users\YOUR_WINDOWS_USERNAME\go\src\hello**. You can now build your code with the `go` tool:

`go build`

This command builds an executable named `hello.exe` in the directory alongside your source code. You can then run your executable by running this command:

`.\hello.exe`

The output of the program should be **Hello, FreeCodeCamp!** Congratulations! Your Go installation is working and you are well on your way to writing Go!

## Useful links
For more information on code organization, packages, testing, etc. check out the following links:
* How to Write Go Code  - https://golang.org/doc/code.html
* Setting GOPATH - https://github.com/golang/go/wiki/Setting-GOPATH
