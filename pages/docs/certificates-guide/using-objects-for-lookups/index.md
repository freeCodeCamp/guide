---
title: "Using Objects for Lookups"
parent: "certificates-guide"
---

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a `switch` statement or an `if/else` chain. This is most useful when you know that your input data is limited to a certain range.

Here is an example of a simple reverse alphabet lookup:

    var alpha = {
      1:"Z",
      2:"Y",
      3:"X",
      4:"W",
      ...
      24:"C",
      25:"B",
      26:"A"
    };
    alpha[2]; // "Y"
    alpha[24]; // "C"
