---
title : Interface 
---
---
An interface is similar to a class or struct but without implementation for its members.
An interface declares a contract or a behavior that implementing classes should have.
It may declare only properties, methods and events with NO access modifiers.
All the declared members must be implemented in the inharit class, otherwise will have an compile error.
as a convention we will mark interface with the letter I at the begenning (IMyInterface || IUserOptions).
You define an interface by using the interface keyword.
 
All members of an interface are :
implicitly abstract, 
implicitly public, cannot declare an access modefier such as protected, internal private etc...

Interface can : 
* Inharit from other interfaces.
* Inharit from multiply interfaces at the same time 
* Contain only methods, properties, events, and indexers.

Interface can not :
* Inharit from a class.
* Have implementation.
* Have access modefier other than public.
* Be instantiated.
---

Using interfaces allowing us to change our implementation in our project without breaking other parts,
and only have to change the one place where the object is created.

Interface Example:
```
public Interface IUserFavoriteFood
{
  void AddFood();
  Task<User> EatFavoriteFood(int id);
}
```
---
Interface inheritance and implementation:
```
public class UserHungry : IUserFavoriteFood
{
  public AddFood()
  {
    // Implementation:
    // A method to add food.
  }
  
  public Task<User> EatFavoriteFood(int id)
  {
    // Implementation:
    // A method to Eat food by id.
  }
}
```
