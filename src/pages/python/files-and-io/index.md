---
title: Files and IO
---
## Files and IO

### CSV Files
CSV(comma separated value) are a common file type for storing data. The first row of the file often defines the name of the column.

Example CSV file format:
```
item,quantity,price
apple,5,1
bread,10,2
milk,2,3
```
Example code for reading a CSV file in Python using the `csv` module:

```
import csv
 
with open('file.csv') as csvDataFile:
    csvReader = csv.reader(csvDataFile)
    for row in csvReader:
        print(row)
```
By using the `csv` module each row is returned as a list so every column within the row can be accessed using list indices (i.e. `row[1]`)

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### JSON Files

### Pickle

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Python Docs on input/output](https://docs.python.org/3/tutorial/inputoutput.html)
[Reading CSV files in Python](https://pythonspot.com/en/reading-csv-files-in-python/)


