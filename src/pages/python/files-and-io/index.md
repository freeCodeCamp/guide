---
title: Files and IO
---
## Files and IO

<!-- Please add any articles you think might be helpful to read before writing the article -->
Python can read and write to files.  There are built in libraries that Python utilizes that can accomplish this goal.


The basic syntax is:

Reading a file:
```python
# Open the file for read access with "r" arugment
input_file = open(name_of_the_file, "r")

# Read the file here
...

# Close the file when completed
input_file.close()
```

Writing a file:
```python
# Open the file for write access with "w" arugment
output_file = open(name_of_the_file, "w")

# Write data into the file here
...

# Close the file when completed
output_file.close()
```


An example is shown below:

Read example:
```python
input_file = open("temp.txt", "r")
file = input_file.readlines()

for line in file:
   print(line, end="")

input_file.close()
```

Write example:
```python
output_file = open("output.txt", "w")

output_file.write("This is a test.\n")
output_file.write("This is the second line.")

output_file.close()
```
