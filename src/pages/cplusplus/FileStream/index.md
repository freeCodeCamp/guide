---
title: File Stream in C++
---

#File Stream

*In C++ one can use file streams to read from and write to files.

*Reading or writing is a three step process 
1.Open the file with appropriate flags i.e. read/write/append flags.
2.Read or write data from/to file.
3.Close the file once task completed.

*First how can we open a file using file stream 
syntax is as follows 
```cpp
std::fstream fs;      //first declare a file stream
```
*Once we declare file stream we need to make sure in which mode we need to open file
following are the common modes in which files can be operated 

1.std::fstream::in    //to read file open in input mode
2.std::fstream::out   //to write to file open in output mode 
3.std::fstream::app   //to append data to existing file use this mode

You can use more than one flag of the above mentioned using | operator.
```
fs.open("input.txt", std::fstream::in |std::fstream::out | std::fstream::app);
```
So the above line opens a file named input.txt in the above three modes mentioned.

once you have opened the file you can use the file steam to read/write data to the file opened like below.

```
fs<<" this is dummy text";
```

after you are done with the operations you need to close the file stream or else you will face unknown behaviours .

```
fs.close();       //this is to close the file stream
```
