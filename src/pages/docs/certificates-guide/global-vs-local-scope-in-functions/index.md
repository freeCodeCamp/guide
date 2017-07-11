---
title: "Global vs Local Scope in Functions"
parent: "certificates-guide"
---

It is possible to have both `local` and `global` variables with the same name. When you do this, the local variable takes precedence over the `global` variable.

In this example:

    var someVar = "Hat";
    function myOutfit() {
      var someVar = "Head";
      return someVar;
    }

The function `myOutfit` will return `"Head"` because the `local` version of the variable is present.
