---
title: Add Methods After Inheritance
---
## Add Methods After Inheritance

First, inherit Dog prototype from Animal:



```javascript

Dog.prototype = Object.create(Animal.prototype);
```


Then, set constructor to Dog:

```javascript

Dog.prototype.constructor = Dog;
```

Finally, add method:

```javascript

Dog.prototype.bark = function() {
    console.log("Woof!");
}
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
