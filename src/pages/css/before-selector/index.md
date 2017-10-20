---
title: Before Selector
---
## Before Selector

The CSS **::before** selector can be used to insert anything before the content an element or elements. It allows the designer perform any css design before the content in an element. It is used by attaching **::before** to an the element it is to be used on. 

Let's look at some examples:

<!--Css -->
```css

p::before { 
    content: "";
    border: solid 5px #ccc
}

span.comment::before{
  content: "Comment: ";
  color: blue;
}

```
<!--Html-->

```html

<p> To infinity and beyond</p>
<p> I am buz lightyear, I come in peace.</p>

<span class="comment"> May the force be with you</span>
<br/>
<span> Do. Or do not. There is no try</span>

```

In the example above we are prepending a grey border before every paragraph element on a page and we are also prepending the words comment in blue before every span element with the class comment. 

> You can check out this demo here https://jsfiddle.net/398by400/


