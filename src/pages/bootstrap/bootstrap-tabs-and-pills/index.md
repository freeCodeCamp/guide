---
title: Bootstrap Tabs and Pills
---
## Bootstrap Tabs and Pills

##Tabs
Tabs comes built with bootstrap V.4, and it has 2 aspects, the css layout and the javascript functionality. 

To make a Tabs navigation you could make a ul list with a class '.nav .nav-tabs', the li's with class '.nav-item' and the anchor tags with a '.nav-link' class each, be sure to assign the active class to one of them => '.nav-link .active'. 

example: 

```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
```

To make them work with the built in javascript functionality that comes with bootstrap, you just need to add some attributes. We can brak the structure in 3 different components:

1) Nav Wrapper 
```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
```

2) Nav Item und Anchor Tag (trigger)
```html
<li class="nav-item">
   <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
</li>
```

3) Content container
```html 
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Mollit deserunt eu pariatur commodo deserunt.</div>
</div>
```

As you see there are some aspects to be aware. The active Tab get the arribute 'aria-selected="true"', this changes offcourse when the user click an other tab, but it is important for the initialization. And the Tab href is equal to the id its target, in this case #home as it targets the content container with the 'id=home', this container gets an '.show' and '.active' classes. 



<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
for more Javascript options for tabs, please refer to <a href="http://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior">Tabs Javascript behavior</a>


