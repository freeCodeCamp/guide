---
title: "Understanding Case Sensitivity in Variables"
parent: "certificates-guide"
---

In JavaScript all variables and function names are case sensitive. This means that capitalization matters.

`MYVAR` is not the same as `MyVar` nor `myvar`. It is possible to have multiple distinct variables with the same name but different casing. It is strongly recommended that for the sake of clarity, you do not use this language feature.

## Best Practice

Write variable names in Javascript in `camelCase`. In `camelCase`, `multi-word` variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

## Examples:

    var someVariable;
    var anotherVariableName;
    var thisVariableNameIsTooLong;
