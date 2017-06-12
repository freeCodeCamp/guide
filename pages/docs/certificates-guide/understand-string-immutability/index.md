---
title: "Understand String Immutability"
parent: "certificates-guide"
---

In Javascript, String values are `immutable`, which means that they cannot be altered once created.

## Example

    var myStr = "Bob";
    myStr[0] = "J";

Would not work, the only way would be:

    var myStr = "Bob";
    myStr = "Job";
