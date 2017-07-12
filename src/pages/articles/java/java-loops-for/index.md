---
title: Java Loops for
---
# Java for Loop

There are 2 of these:

1.  Normal `for` loop

`java  
for( initialize variable; condition; modify variable ){  
//perform action  
}` 

For e.g.

`java  
for(int i=0; i<10; i++){  
System.out.println("The value of is : " + i);  
}` 

1.  Enhanced `for` loop

Well, this came into existence in Java 5\. It helps when you are required to iterate over a list of items and perform some action like so:

`java  
//assuming nameList is a List of names that are actually Strings  
for( String name : nameList ){  
SYstem.out.println(name);  
}`