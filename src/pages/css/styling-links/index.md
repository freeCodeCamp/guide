---
title: Styling Links
---
## Styling Links
Links can be styles with any CSS property, such as ```color```, ```font-family```, ```font-size```, and ```padding```.

Links also have 4 states, and many programmers style each state differently.
The four states are:
* ```a:link```: an unvisited, unclicked link
* ```a:visited```: a visited, clicked link
* ```a:hover```: a link when the user's mouse is over it
* ```a:active```: a link when it is clicked

Here is some sample CSS using the 4 states:
```
a:link { color: red; }
a:visited { color: blue; }
a:hover { color: green; }
a:active { color: blue; }
```

Note that there are some ordering rules for when you are setting the style for link states.
* ```a:hover``` must come after ```a:link``` and ```a:visited```
* ```a:active``` must come after ```a:hover```

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


