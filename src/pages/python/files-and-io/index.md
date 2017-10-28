In Python, a file can be either Text or Binary.

Text files contain sequences of characters(Line). Binary files are those files that are not Text files and they can be understood by only those applications that are designed to understand the underlying structure in those files.

Files in python can be manipulated using <b>file</b> Object. 

Following are some in-built functions provided by python that help in file manipulation using file Object:
<ul>
  <li><h2><i>Open()</i> function:</h2>
    
  The open() function is used to obtain a object that references the file which needs to be accessed.
    
  <b>Syntax</b>
  
  ```fileObject = open(file_name [, access_mode][, buffering]) ```
  
  - Here file_name is a mandatory argument that indicates name of the file to be accessed.
  - access_mode is an optional argument that indicates if the file is going to be just used for write or read or append and so on.
  - buffering argument if set to 0, no buffering takes place and if set to 1, line buffering takes place.
  
<h3><b><u>NOTE:</u></b></h3>
When a file object is obtained from <i>open()</i> function. It can be used to obtain various attributes like:

  1)  <b>file.closed:</b>  Returns true if file is closed, false otherwise.
  
  2) 	<b>file.mode:</b>      Returns access mode with which file was opened.
  
  3)  <b>file.name:</b>      Returns name of the file.
  
  4)	<b>file.softspace:</b> Returns false if space explicitly required with print, true otherwise.
  </li>
  
  <li><h2><i>Close()</i> function:</h2>
  
  The close() method of a file object flushes any unwritten information and closes the file object. It is generally considered good practise to close the file object after one no longer needs it.
  
  <b>Syntax</b>
  
  ```fileObject.close()```
  
  <li><h2><i>Write()</i> function:</h2>
  
  The write() method of a file object writes, the passed string, to the file opened in "w" mode.
  
  <b>Syntax</b>
  
  ```fileObject.write(string)```
  
  <li><h2><i>Read()</i> function:</h2>
  
  The read() method of a file object reads from the opened file.
  
  <b>Syntax</b>
  
  ```fileObject.read([count])```
  
  - count is an optional argument. It specifies the number of bytes to be read from the starting of the file. if no count parameter is specified then it reads the entire file.
  
  
<h2>File Positions:</h2>

- The tell() method tells you the current position within the file; in other words, the next read or write will occur at that many bytes from the beginning of the file.

- The seek(offset[, from]) method changes the current file position. The offset argument indicates the number of bytes to be moved. The from argument specifies the reference position from where the bytes are to be moved.

- If from is set to 0, it means use the beginning of the file as the reference position and 1 means use the current position as the reference position and if it is set to 2 then the end of the file would be taken as the reference position.
   
  
  
