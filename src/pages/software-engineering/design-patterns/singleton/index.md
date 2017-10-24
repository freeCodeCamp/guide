---
title: Singleton
---

The singleton is a design pattern that restricts the instantiation of a class to one object. It is useful when you want to give only one object the ability to coordinate actions across your application.

## Singleton in Android
Singleton is a design pattern often used in Android. It is easily misused and so can cause app to be hard to maintain. It is useful in Android beause they live across fragments, activities, and rotations. 

- Singletons are often used in Android to store temporary data
- They allow the application to have one owner of the data and provides an easy way to pass data between controller classes
- Singletons are destroyed when Android removes your app from memory
- Singletons can make it difficult to unit test your app

```java
public class DataStore {
  private static DataStore sDataStore;
  private List<Data> mData;
  
  public static DataStore get(Context context) {
    if (sDataStore == null) {
      sDataStore = new DataStore(context);
    }
    return sDataStore;
  }
  
  // Make constructor private to prevent other classes from creating a DataStore instance
  private DataStore(Context context) {
    mData = new ArrayList<>();
  }
  
  // The only way for other classes to get data from DataStore
  public List<Data> getData() {
    return mData;
  }
}
```
## Singleton in PHP

> A private constructor is used to prevent the direct creation of objects from the class.
> The only way to create an instance from the class is by using a static method that creates the object only if it wasn't already created.

```php
Class Singleton {

  // Hold the class instance
  private static $instance = null;
  
  /**
  * The constructor is private
  * it is ensure the class can be initialized only from itself
  */
  private function __construct(){}
 
  /**
  * Return the singleton instance of this class
  *
  * @return Singleton
  */
  public static function getInstance()
  {
    if (self::$instance == null)
    {
      self::$instance = new Singleton();
    }
 
    return self::$instance;
  }

}

$obj1 = Singleton::getInstance();
$obj2 = Singleton::getInstance();

```
## Singleton in iOS

The sole purpose of creating a singleton is to allow you to access it’s shared properties and methods, and making it globally accessible. This design pattern is useful when you want to only create one instance of an object.

```Swift4

class Singleton {
  static let sharedInstance = Singleton()
 
    init() {
        print("Singleton has been initialized")
    }
    
    //write your functions here
    func sampleFunction() {
    }
}

//Uses
Singleton.sharedInstance.sampleFunction()
```
This simple code is all there to implement a singleton design pattern in iOS using Swift. We put <b><i>static</i></b> because it is a type property, and it’s functionality is to create only one instance of an object and prevents its methods from being overridden. Using <b><i>let</i></b> will guarantee that sharedInstance's value will not change.

An important thing to note is that <b><i>static properties and methods are lazy initialize by default meaning that it will not be instantiated until it is being called</i></b>, therefore it provides some optimization.
