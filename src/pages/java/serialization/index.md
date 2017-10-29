---
title: Serialization
---
# Serialization

Serialization is a mechanism which is used to store an object. A Java object can be interpreted by the JVM alone. Any other system is less likely to understand and know how to represent a Java object. 
  
  When we store text data (like strings) in Java to files, this data is understood by the system since it's in the form of a "string" of characters. But in the case of an object, it gets more complicated. Since outside of the JVM, an object loses all meaning; to be able to store the properties or state of an object outside of a program, we need to store it in a form understood by the system. 
  
  This is where **Serialization** comes to save the day. The Java object is converted to a stream of bytes and then stored in a file. Simple right?
  
  This is helpful since the system cannot understand an object but it _does_ understand a byte. So our object converted to bytes can be easily stored in a file. It is said to be _**serialized**_. Similarly when we again convert the byte data to get our object back, the object is _**deserialized**_. 
  
  To make an object serializable, it has to implement the **_Serializable**_ interface. After serializing an object, since it's in a form understood by systems, it can also be sent across networks and received as well. The receiving end will then _deserialize_ the object and use it normally like any other Java object. This makes Serialization a very useful concept. 
  
  An example:
  
  ```java
  import java.io.*;
  
  public class Person implements Serializable{
      String name;
      int age;
      Person(String n, int a){
          this.name = n;
          this.age = a;
      }
  }
  class Demo{
      public static void main(String[] args){
          Person p = new Person("ABC", 18);
          
          FileOutputStream fo = null;
          ObjectOutputStream out = null;
          
          try{
              fo = new FileOutputStream("serialized-object.txt");
              out = new ObjectOutputStream(fo);
              
              out.writeObject(p);
              out.flush();
          }
          catch(Exception e){
              System.out.println(e);
          }
      }
  }
  ```
  Here the `Person` class implements Serializable interface indicating that it *can* be serialized. Inside the `try` is the code to serialize the `Person` object. Thus, we have successfully serialized a Java object and stored it in a text file called - *serialized-object*.
