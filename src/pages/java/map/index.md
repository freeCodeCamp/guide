---
title: Map
---
# Map

  The *Collection* framework has some really useful classes and interfaces for holding data. Sometimes we have some data that is too big. In this case it becomes difficult to remember at which index our data is at. There are some ways to get what we want, but not efficient enough.
  
  If we're using *ArrayList* or *Vector*, we can specify the element, get its index and then ask for that element. Sounds pretty simple. But what about if that element is too long to write? It's fine if we're only going to specify it once. But if it's about more than 2 or 10 different elements, the process becomes tedious. 
  Don't fret, **Map** to the rescue.
  
  Map is an interface defined in the `java.util` package. A *map* contains elements in `kay-value` pairs. This means contrary to usual classes and data types that store a single entity as an element, a map contains *two* entities and treats them as a single element. Every element in a map has a corresponding key that is used to refer to that particular element. A key-value pair is called an `entry`. This solves the problem of the element being too long to refer, since we can give it a smaller key. 
  
  ```java
  ArrayList<String> names1 = new ArrayList<>();
  names1.add("New York");
  names1.add("Amsterdam");
  
  Map<String, String> names2 = new HashMap<>();
  names2.put("ny", "New York");
  names2.put("am", "Amsterdam");
  ```
  
  As seen in the above snippet, a map `names2` is created. To access both entries - New York and Amsterdam - a shorter key is used. It thus becomes easier than the ArrayList `names1` to access the entries if index is not known. 
  
  Similar to ArrayList, a generic type is required that indicates the data type of the key and value pairs. As you may have noticed `names2` reference is of type Map, but the object created is of type _**HashMap**_. This is because Map is an interface and Java does not allow an object to be created of an interface. So there are two classes available that implement Map. They are _**HashMap**_ and _**SetMap**_. Map also provides a lot of methods to access entries based on their key and even modify values separately, keeping the key the same. 
  On top of that, HashMap and SetMap store entries as per specific data structures, providing some drawbacks and some advantages as well. The best one to use depends on the kind of work we want to get done with a Map.
