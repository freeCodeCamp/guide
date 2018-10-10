---
title: Use tabindex to Specify the Order of Keyboard Focus for Several Elements
---
## Use tabindex to Specify the Order of Keyboard Focus for Several Elements

Following the instructions:

Add a tabindex attribute set to "1" to the search input, and a tabindex attribute set to "2" to the submit input.

the line 16 and 17 become:

```css
<input type="search" name="search" id="search" tabindex="1">
<input type="submit" name="submit" value="Submit" id="submit" tabindex="2">    
```
Now we can Use tabindex to Specify the Order of Keyboard Focus for Several Elements
