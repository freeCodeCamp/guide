---
title: Files and IO
---
## Files and IO

### Opening a file

`f = open("C:\guides\python\index.md")` this will open the full file path

An option can be added after the file path, for example:

`f = open("C:\guides\python\index.md", "w")` this 'w' shows that the file is open for writing. We can open it for reading too using this command. The use of "r+" means that a file is open for writing but any data written to the file will _overwrite_ existing data
`f = open("C:\guides\python\index.md", "r+")`

A file can be opened with different types of encoding
`f = open("C:\guides\python\index.md", encoding="utf-8")`

## Reading

`f = open("C:\guides\python\index.md", "r", encoding="utf-8") as f:
  # perform some file operations
finally:
  f.close()
`
It is very important to close a file after we have finished operations on it by using
`f.close()`

It is possible to read and write a file in binary mode
`f = open("myimage.png","r+b"`

## Writing

We can also write to a file this way
` with open("C:\guides\python\index.md","w",encoding="utf-8")
f.write("This is the first line")
f.write("Second line!")
f.write("Last line")


#### More Information:
[You can find more helpful information here](https://docs.python.org/2/tutorial/inputoutput.html)


