---
title: Life Cycle Methods Of A Component
---

## Life Cycle Methods Of A Component

When we start working with components, we need to perform several actions to update state or to perform some actions when something changes in that component. In this scenario, life-cycle methods of a component comes handy !! So let us dive into them in this article.

Broadly, we can divide the life cycle methods into **3** categories.

1. Mounting
2. Updating
3. Unmounting

As life cycle methods are self explanatory, I'm just going to mention the method names. Please feel free to contribute to this article, if necessary.


**Mounting:**

a. `constructor()`

b. `componentWillMount()`

c. `render()`

d. `componentDidMount()`


**Updating:**

a. `componentWillRecieveProps()`

b. `shouldComponentUpdate()`

c. `componentWillUpdate()`

d. `render()`

e. `componentDidUpdate()`

**Unmounting:**

a. `componentWillUnmount()`

**Some interesting facts to notice:**  

- `constructor`, `componentWillMount`, `componentDidMount` and `componentWillUnmount` will be called only once during the lifecycle of a component.
- `componentWillUpdate`,  and `componentDidUpdate` will only be executed if and only if `shouldComponentUpdate` returns true.
- `componentWillUnmount()`will be called just before unmounting any component and hence can be used to free up the used memory, close any connections to DB, etc.

Many things can be learnt by diving into coding. So get your hands dirty by coding.

Happy Coding !!!
