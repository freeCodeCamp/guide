---
title: Bootstrap Tabs and Pills
---
## Bootstrap Tabs and Pills
Bootstrap Tabs and Pills are the two nav style for tabs. Both shared markup, starting with the base `.nav` class, as well as shared states. Swap modifier classes to switch between each style. Both can be used with `<ul>` or `<nav>` tags. Both support dropdown for menu
It requires JavaScript tabs plugin and dropdowns plugin.

**Code Example:**

#### Bootstrap Tabs
```html
  <ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="#">Home</a></li>
    <li role="presentation"><a href="#">Profile</a></li>
    <li role="presentation"><a href="#">Messages</a></li>
    <li role="presentation" class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        Dropdown <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li><a href="#" role="tab">Dropdown menu 1</a></li>
        <li><a href="#" role="tab">Dropdown menu 1</a></li>
      </ul>
    </li>
  </ul>
```

#### Bootstrap Pills
```html
  <ul class="nav nav-pills">
    <li role="presentation" class="active"><a href="#">Home</a></li>
    <li role="presentation"><a href="#">Profile</a></li>
    <li role="presentation"><a href="#">Messages</a></li>
    <li role="presentation" class="dropdown">
      <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
        Dropdown <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li><a href="#" role="tab">Dropdown menu 1</a></li>
        <li><a href="#" role="tab">Dropdown menu 1</a></li>
      </ul>
    </li>
  </ul>
```

#### Add following class to navs for justified and vertical tabs
`.nav-justified` for Justified Navs

`.nav-stacked` for vertically stackable (only for Pills)

#### More Information:
[Bootstrap Doc for Tabs](https://getbootstrap.com/docs/3.3/components/#nav-tabs)

[Bootstrap JS Doc for Tabs](https://getbootstrap.com/docs/3.3/javascript/#tabs)

