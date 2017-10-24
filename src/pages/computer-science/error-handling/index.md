---
title: Error Handling
---
## Error Handling

Every program should take into account errors that might occur. Even the best written program will almost always run into some errors whether it's bad input or null pointer. You should strive for keeping them at the minimum level. The less errors you have, the less you have to worry about special cases. 

Example of error handling in Java: 

```
try {
  code that might throw an exception
} catch (SomeException e) {
  specify what should program do if exception occurs
}
