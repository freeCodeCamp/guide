---
title: Files and IO
---
## Files and IO

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/python/files-and-io/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Input-output operations in python are made simple with the use of built-in features as well as modules that can be imported. 
`open()` returns a file object, and is most commonly used with two arguments: `open(filename, mode)` where mode can be read or write.

```python
  file = open('myfile', 'w')
  print file
```

Output:
```
  <open file 'myfile', mode 'w' at 00a0000>
```

Assuming that a file object has been created, you can use `f.read(size)` to read some quantity of data and return it as a string. Take the following example:

```python
  file.readline()
```
Output:
```
  'This is the first line of the file.\n'
```
and to read a second line:

```python
  file.readline()
```

Output:
```
  'Here is the second line of the file\n'
```
<!-- To do: read(n) to read only a given number of bytes, and seek(n) to go to the nth byte --> 

Once a file has been opened for reading, and another for writing, a set of modules can help your reading and writing operations. Take the example of a comma-separated, ASCII file to read from. In the following example, the modules **csv** and **glob** are used to scan in the current directory for any files with .txt extension. Each of these files is opened in turn (assuming data are separated by a **tab** character), and a corresponing .out file is created where data will be outputed with the same **tab** separation. A loop is created to eliminate some columns that are no longer wanted in the .out file, and the remaining columns are re-arranged.

```python
  import csv
  import glob

  list_of_files = glob.glob('./*.txt') 
  for file_name in list_of_files:
  with open(file_name, 'r') as FI, open(file_name.replace('txt', 'out'), 'w') as FO:
    writer = csv.writer(FO, delimiter='\t')
    reader = csv.reader(FI, delimiter='\t')
    NEWcolumns = [5,0,2,3]
    for line in reader:
        newline = [line[i] for i in NEWcolumns]
        writer.writerow(newline)
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


