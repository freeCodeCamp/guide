---
title: Bind 'this' to a Class Method
---
## Bind 'this' to a Class Method

First we need to bind ```this``` with our class method ``addItem``. For that, as we saw it was used in the previous lesson, we use the expresion:

```HTML
this.addItem = this.addItem.bind(this);
```
Then we can set the button with the appropriate method on our ``onClick`` handler:

```HTML
<button onClick={this.addItem}>Click Me</button>
```
