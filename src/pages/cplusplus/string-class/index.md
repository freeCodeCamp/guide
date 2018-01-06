---
title: string class
---

## String class

C++ string class internally uses char array to store character but all memory management, allocation and null termination is handled by string class itself that is why it is easy to use. The length of c++ string can be changed at runtime because of dynamic allocation of memory similar to vectors. As string class is a container class, we can iterate over all its characters using an iterator similar to other containers like vector, set and maps, but generally we use a simple for loop for iterating over the characters and index them using [] operator.

### Practical example
```cpp
// C++ program to demonstrate various function string class
#include <bits/stdc++.h>
using namespace std;
 
int main()
{
    // various constructor of string class
 
    // initialization by raw string
    string str1("first string");
 
    // initialization by another string
    string str2(str1);
 
    // initialization by character with number of occurence
    string str3(5, '#');
 
    // initialization by part of another string
    string str4(str1, 6, 6); // from 6th index (second parameter)
                             // 6 characters (third parameter)
 
    // initialization by part of another string : iteartor version
    string str5(str2.begin(), str2.begin() + 5);
 
    cout << str1 << endl;
    cout << str2 << endl;
    cout << str3 << endl;
    cout << str4 << endl;
    cout << str5 << endl;
 
    //  assignment operator
    string str6 = str4;
 
    // clear function deletes all character from string
    str4.clear();
 
    //  both size() and length() return length of string and
    //  they work as synonyms
    int len = str6.length(); // Same as "len = str6.size();"
 
    cout << "Length of string is : " << len << endl;
 
    // a particular character can be accessed using at /
    // [] operator
    char ch = str6.at(2); //  Same as "ch = str6[2];"
 
 
    cout << "third character of string is : " << ch << endl;
 
    //  front return first character and back returns last charcter
    //  of string
 
    char ch_f = str6.front();  // Same as "ch_f = str6[0];"
    char ch_b = str6.back();   // Same as below
                               // "ch_b = str6[str6.length() - 1];"
 
    cout << "First char is : " << ch_f << ", Last char is : "
         << ch_b << endl;
 
    // c_str returns null terminated char array version of string
    const char* charstr = str6.c_str();
    printf("%s\n", charstr);
 
    // append add the argument string at the end
    str6.append(" extension");
    //  same as str6 += " extension"
 
    // another version of appends, which appends part of other
    // string
    str4.append(str6, 0, 6);  // at 0th position 6 character
 
    cout << str6 << endl;
    cout << str4 << endl;
 
    //  find returns index where pattern is found.
    //  If pattern is not there it returns predefined
    //  constant npos whose value is -1
 
    if (str6.find(str4) != string::npos)
        cout << "str4 found in str6 at " << str6.find(str4)
             << " pos" << endl;
    else
        cout << "str4 not found in str6" << endl;
 
    //  substr(a, b) function returns a substring of b length
    //  starting from index a
    cout << str6.substr(7, 3) << endl;
 
    //  if second argument is not passed, string till end is
    // taken as substring
    cout << str6.substr(7) << endl;
 
    //  erase(a, b) deletes b character at index a
    str6.erase(7, 4);
    cout << str6 << endl;
 
    //  iterator version of erase
    str6.erase(str6.begin() + 5, str6.end() - 3);
    cout << str6 << endl;
 
    str6 = "This is a examples";
 
    //  replace(a, b, str)  replaces b character from a index by str
    str6.replace(2, 7, "ese are test");
 
    cout << str6 << endl;
 
    return 0;
}
```
### The output is :

```
first string
first string
#####
string
first
Length of string is : 6
third character of string is : r
First char is : s, Last char is : g
string
string extension
string
str4 found in str6 at 0 pos
ext
extension
string nsion
strinion
These are test examples
```

As seen in above code, we can get length of string by size() as well as length() but length() is preferred for strings. We can concat a string to another string by += or by append(), but += is slightly slower than append() because each time + is called a new string (creation of new buffer) is made which is returned that is a bit overhead in case of many append operation.

