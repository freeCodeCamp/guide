---
title: Array.prototype.filter
---
## Array.prototype.filter

When the 'filter' method is run against an array it returns another array containing items that pass a Boolean test.

In this example, the students array is filtered and the return value is another array containing any student object where the grade value is greater than or equal to 90.

```javascript
var students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];

students.filter(student => student.grade >= 90)

// [ { name: 'Quincy', grade: 96 }, { name: 'Alexis', grade: 100 }, { name: 'Katie', grade: 90 } ]
```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
