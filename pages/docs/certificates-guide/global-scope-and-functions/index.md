---
title: "Global Scope and Functions"
parent: "certificates-guide"
---

In JavaScript, `scope` refers to the visibility of variables. Variables which are defined outside of a function block have `Global` scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are used without the `var` keyword are automatically created in the `global` scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `var`.
