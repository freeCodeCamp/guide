---
title: File Handling
---
## File Handling

Python handles file manipulations using a **file** object. Firstly, the file must be opened using the open() method which returns a file object. This object can be used to read from or write into a file using the read() and write() methods respectively. After reading/writing, the file must be closed using the close() method which flushes any unwritten changes and closes the file object.

### **open** Function:

```fileObject = open(file_name [, access_mode][, buffering])```

1. file_name : String - Name of the file to be opened.
2. access_mode : String - Mode in which the file should be opened. Default mode is 'r'.
  * 'r' : Reading only. File pointer placed at the beginning. 
  * 'r+' : Both reading and writing. File pointer placed at the beginning. 
  * 'w' : Writing only. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing.
  * 'w+' : Both reading and writing.Overwrites the existing file if the file exists. If the file does not exist, creates a new file for reading and writing.
  * 'a' : Opens a file for appending. The file pointer is at the end of the file if the file exists. That is, the file is in the append mode. If the file does not exist, it creates a new file for writing.
  * 'a+' : Opens a file for both appending and reading. The file pointer is at the end of the file if the file exists. The file opens in the append mode. If the file does not exist, it creates a new file for reading and writing.

3. buffering : Integer - Indicates the buffer size.
  * 0 : no buffering
  * 1 : line buffering

### **read** Method:

```fileObject.read([count])```

count : Integer - Determines the number of bytes to be read from the file. If count is missing, then it tries to read as much as possible, maybe until the end of file.

### **write** Method:

```fileObject.write(string)```

string : The string to be written into the file.

### **close** Method:

```fileObject.close()```

It is a good practice to use the close() method to close a file. Python automatically closes a file when the reference object of a file is reassigned to another file.

### **rename** Method:

```os.rename(current_file_name, new_file_name)```

A file can be renamed using rename() method of the os module. 
**Note**: Don't forget to use ```import os``` before calling rename method.

### **remove** Method:

```os.remove(file_name)```

You can use the remove() method to delete files by supplying the name of the file to be deleted as the argument.
