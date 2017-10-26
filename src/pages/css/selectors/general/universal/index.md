---
title: Universal
---
## Universal
<p>Universal Selector(*) selects all elements . It also selects all elements inside an element. You can attach universal selector with any other selector. </p> 

####Code Syntax</h4>

```css
* { 
	css declarations; 
}
```

```css
element  * {
     css declarations; 
}
```

####Code Example</h4>
```css
* { 
    color: green;
}

```
matches all elements and set font color as green.
```css
div * { 
    color: green;
}

```
selects all div elements and set font color as green.
```css
* [lang^=en] {
  color: green;
}
```
selects all elements whose language attribute value starts with en.
