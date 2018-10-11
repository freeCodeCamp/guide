---
title : Interface 
---
---
An interface is similar to a class but without implementation for its members.
An interface declares a contract or a behavior that implementing classes should have.
It may declare only properties, methods and events with NO access modifiers.
All the declared members must be implemented in the implementing class, otherwise we will have a compile error.
As a convention, we will mark an interface with the letter I at the beginning (IMyInterface || IUserOptions)
 
All members of an interface are:
implicitly abstract, 
implicitly public, cannot declare an access modifier such as protected, internal private etc...

An Interface can: 
* Inherit from other interfaces.
* Inherit from multiple interfaces at the same time 
* Contain only methods, properties, events, and indexers.

An Interface can not :
* Inherit from a class.
* Have implementation.
* Have access modifiers other than public.
* Be instantiated.
---

Using interfaces allows us to change our implementation in our project without breaking other parts,
and only have to change the one place where the object is created.

Interface Example:
```csharp
public Interface IUserFavoriteFood
{
  void AddFood();
  Task<User> EatFavoriteFood(int id);
}
```
---
Interface inheritance and implementation:
```csharp
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
