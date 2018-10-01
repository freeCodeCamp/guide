---
title: Bash Cat
---

## Bash Cat

Cat is one of the most frequently used command on Unix-like operating system.

Cat is used to read file sequentially and print them to the standard output.
The name is derived from its function to con**cat**enate files.

The cat command has three main purposes in regards to text files: display, combine them, and create new ones.

### Usage

```bash
cat [options] [file_names]
```

Most used options:

* `-A`, show all, equivilent to -vET. Used to display all, including tabs and non-printing characters.
* `-b`, numer non-blank output lines
* `-n`, number all output lines
* `-s`, squeeze multiple adjacent blank lines
* `-v`, display nonprinting characters, except for tabs and the end of line character

### Example:

Print in terminal the content of file.txt:
```bash
cat file.txt
```

Concatenate the content of the two files and display the result in terminal:
```bash
cat file1.txt file2.txt
```

For small files, it is sometimes easier to use cat than vi, emacs, or other text editors. Simply redirect cat to the file name, enter your text, and hit CTRL+D to exit. 
```bash
cat > file.txt
```

#### More Informations:
* Wikipedia: https://en.wikipedia.org/wiki/Cat_(Unix)
