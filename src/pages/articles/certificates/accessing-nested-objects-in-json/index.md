---
title: Accessing Nested Objects In Json
---
The properties and sub-properties of JSON objects can be accessed by chaining together the dot or bracket notation.

Here is a nested JSON Object:

    var ourStorage = {
      "desk": {
        "drawer": "stapler"
      },
      "cabinet": {
        "top drawer": { 
          "folder1": "a file",
          "folder2": "secrets"
        },
        "bottom drawer": "soda"
      }
    }
    ourStorage.cabinet["top drawer"].folder2;  // "secrets"
    ourStorage.desk.drawer; // "stap