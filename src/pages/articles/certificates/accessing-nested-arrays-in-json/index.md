---
title: Accessing Nested Arrays In Json
---
As we have seen in earlier examples, JSON objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

    var ourPets = { 
      "cats": [
        "Meowzer",
        "Fluffy",
        "Kit-Cat"
      ],
      "dogs": [
        "Spot",
        "Bowser",
        "Frankie"
      ]
    };
    ourPets.cats[1]; // "Fluffy"
    ourPets.dogs[0]; // "Spot"