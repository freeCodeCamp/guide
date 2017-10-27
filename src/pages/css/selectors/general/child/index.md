---
title: Child
---
## Child

<p>Child selector represented by `>` & placed between two selectors. It matches second selector(children) that are children of first selector (parent). The second selector must be immediate children of first element.</p>

####Code Syntax</h4>

```css
first selector (parent) > second selector (child) { 
	css declarations; 
}
```

####Code Example</h4>
```css
div > span { 
    background-color: red;
}
```
matches all immediate span element of parent div


#### More Information:
- <a href='https://www.w3.org/TR/CSS22/selector.html#child-selectors' target='_blank' rel='nofollow'>W3C Working Draft</a>


