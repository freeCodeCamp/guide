void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:


```javascript
function warnUser(): void {
    alert("This is my warning message");
}
```

Declaring variables of type void is not useful because you can only assign undefined or null to them:

```javascript
let unusable: void = undefined;
```
