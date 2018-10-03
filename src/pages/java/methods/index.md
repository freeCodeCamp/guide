# METHODS

* Methods are used to provide the business logic to the program.
* Inside the class it is possible to declare any number of methods based on the requirement of a developer.
* As a software developer while writing method we have to fallow the coding standards like the method name starts with lower case letters if the method contains two words every inner word also starts uppercase letter.
* It will improve the reusability of the code. By using methods we can optimize the code. 

#### Syntax

<modifiers-list> return-type methodName(parameterList)throws Exception
    
#### Method Signature
The name of the method and parameter list is called Method Signature. Return type and modifiers list not part of a method signature. 

#### Method Declaration

```java
void m1(){
    //statements
    //statements
}
```

* There are two types of the methods

1- Instance Method
2- Static Method

Syntax:

1- Instance method

```java
void m1(){
    //logic
}
```

2- Static method

```java
static void m1(){
    //logic
}
```

Examples:-

Instance method 

```java
class Sample{

void m1(){
    System.out.println("m1 method");
}
void m2(){
    System.out.println("m2 method");
}

public static void main(String args[]){
    Sample obj = new Sample(); // instance method can be called by creating an object
    obj.m1(); // m1 method
    obj.m2(); // m2 method
}

}
```

Static method

```java
class Sample{

static void m1(){
    System.out.println("m1 method");
}
static void m2(){
    System.out.println("m2 method");
}
public static void main(String args[]){
    
    //  No need to create the object as both methods are static 
    
    m1(); // m1 method
    m2(); // m2 method
    
    //  Can also be called with the help of class name
    
    Sample.m1(); // m1 method
    Sample.m2(); // m2 method
    
    //  Can also be called by creating the object similar to instance methods example
}
}
```
