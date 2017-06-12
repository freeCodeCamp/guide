---
title: "Target the Children of an Element Using jQuery"
parent: "certificates-guide"
---

Many HTML elements have children elements from which they inherit properties.

jQuery has a function called `children()` that allows you to access the children of whichever element you've selected.

Here's an example of how you would use the `children()` function:

    $("#left-well").children().css("color", "blue");
