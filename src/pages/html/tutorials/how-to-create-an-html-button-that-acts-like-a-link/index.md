---
title: How to Create an HTML Button That Acts Like a Link
---
## How to Create an HTML Button That Acts Like a Link

There is more than one way to create HTML button, clicking on which will take you to a URl or a specific spot on the page, so pick one of the methods described below, which best suits your needs and project characteristics:

### Method 1 - Pure HTML

Add the code snippet to your HTML file having replaced "Your-text" with the desired text of the button and "Your-Link" with the url you want the button to lead to.

```
<form action="Your-Link">
    <input type="submit" value="Your-Text" />
</form>
```


### Method 2 - HTML and Javascript (no editing .js file needed)

Replace "Your-text" with the desired text of the button and "Your-Link" with the url you want the button to lead to and paste the following code snippet to your page:

```
<input type="button" onclick="location.href('Your-Link');" value="Your-Text">
``` 
If you want to further style the button in CSS, you can add id attribute to it. Using the code snippet below, you can access the button with `#your-id` or simply replace "Your-Id" with id tag of your choice.

```
<input type="button" id = "Your-Id" onclick="location.href('Your-Link');" value="Your-Text">
```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


