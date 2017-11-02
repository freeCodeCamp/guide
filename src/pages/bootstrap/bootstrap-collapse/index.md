---
title: Bootstrap Collapse
---
## Bootstrap Collapse
The Bootstrap collapse plugin allows you to toggle content on your pages.
Collapsibles are useful when you want to hide and show large amount of content.

## Example
```html
<p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-block">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>
```
## Example explained
*.collapse* hides content
*.collapsing* is applied during transitions
*.collapse.show* shows content


#### More Information:
[The official Bootstrap 4 guide on Collapse](https://v4-alpha.getbootstrap.com/components/collapse/)


