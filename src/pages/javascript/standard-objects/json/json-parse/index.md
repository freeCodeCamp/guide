---
title: JSON Parse
---
## JSON Parse

```
  JSON.parse(text [, reviver])
```

JSON.parse parses a JSON string and returns the resulting JavaScript value or object. It will throw a SyntaxError if the string is not valid JSON.

#### Example

```javascript
    let personString = '{"name":"Jenny","age":56,"phoneNumber":8675309,"isMine":false}';
    let person = JSON.parse(personString);
    
    console.log(person);
    // Result:
    //   {
    //     name: 'Jenny',
    //     age: 56,
    //     phoneNumber: 8675309,
    //     isMine: false
    //   }
```
### Reviver  

JSON.parse can take a callback function as an optional second argument (_reviver_).  

A reviver function transforms the value or object computed by JSON.parse. This function runs on every key value pair.

If the reviver function returns undefined (or returns no value), the property is deleted from the object. Otherwise, the property is redefined to be the return value.

#### Example
```javascript
    JSON.parse('{"p": 5}', (key, value) =>
      typeof value === 'number'
        ? value * 2 // return value * 2 for numbers
        : value     // return everything else unchanged
    );
```
Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
