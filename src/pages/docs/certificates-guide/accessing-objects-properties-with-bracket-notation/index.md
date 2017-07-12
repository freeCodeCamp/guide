---
title: "Accessing Objects Properties with Bracket Notation"
parent: "certificates-guide"
---

The second way to access the properties of an object is bracket notation (`[]`). If the property of the object you are trying to access has a space in it, you will need to use bracket notation.

Here is a sample of using bracket notation to read an object property:

    var myObj = {
      "Space Name": "Kirk",
      "More Space": "Spock"
    };
    myObj["Space Name"]; // Kirk
    myObj['More Space']; // Spock

Note that property names with spaces in them must be in quotes (single or double).
