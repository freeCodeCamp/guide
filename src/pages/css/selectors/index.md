---
title: Selectors
---
## Selectors

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/css/selectors/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


Selectors in CSS (cascading style sheets) are determined based on *specificity*, with this we are able to be more specific on our style rules and override other rules that may be targeting the same element but is not as specific. The way this specificty hierarchy works is based on weight, meaning a element Selector has a weight of 1 (one), a class selector has a weight of 10 (ten) and a id selector has a weight of One Hundred (100). We are able to combine different selectors together be more specific on the element we whant to change. 

As a example: 

  ```css
      p {
        color: blue;
      }
      p .red {
         color: red;
      }
   ```
Our type selector p will select all p elements in our html document but it only has a weight of one. in contrast, the class selector has a weight of 11 for the reason we are combining a type selector with a class selector(this selector is matching all p elements with a class of red). 
--* Directly targeted rules will always have precedence over rules which inherits elements from its ancestor. 
--* Specifity is only applied when multiple declarations are targeting the same element, only then this rule is then applied.  
--* specifity is usually why some of you style rules do not apply to elements when you would expect them to. 
