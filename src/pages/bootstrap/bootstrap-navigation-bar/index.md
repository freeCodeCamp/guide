---
title: Bootstrap Navigation Bar
---
## Bootstrap Navigation Bar

The Bootstrap framework provides you with a feature call navigation bars. In short a navigation bar (also referred to navbars) is a header at the top of the page to display navigational information.

#### How To Use
To use Bootstrap Navigation Bars you add a `<nav>` element to the top inside the `<body>` element of your webpage. There are various styles you can add to customize the display of your navbars.

#### Code Example
This is the code needed to make a basic navbar.
```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```

#### Navbar Styles
Bootstrap provides a set of classes in the Bootstrap framework to style your navbars. These classes are as followed:
* `navbar navbar-default` This is the default style for your navbars.
* `navbar navbar-inverse` This is similar to the default style except the colors are inverted.

#### Adding drop-down menus to the navbar
You can include a drop down menu inside a navbar. This feature requires you to include Bootstrap's javascript file for it to work.
```html
<li class="dropdown">
  <a class="dropdown-toggle" data-toggle="dropdown" href="#">Drop down
    <span class="caret"></span>
  </a>
<ul class="dropdown-menu">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</li>
```

#### Adding buttons to the navbar
You can add buttons on the navbar. The existing Bootstrap Button classes work however you'll need to include the class `navbar-btn` to the end of the class list.
```html
<button class="btn navbar-btn">Button</button>
```

#### Adding forms to the navbar
You can also add forms to the navbar. This could be uses for tasks such as a search field, quick login field, etc.
```html
<form class="navbar-form navbar-right">
  <div class="form-group">
      <input type="text" class="form-control" placeholder="Search">
  </div>  
  <button type="submit" class="btn btn-default">Search</button>  
</form>
```

#### Aligning elements to the right on the navbar
In some cases you might want to align elements in a navbar to the right (for example a login or sign-up button.). To do this you'll need to use the `navbar-right` class.
```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#">Action Link #1</a></li>
      <li><a href="#">Action Link #2</a></li>
    </ul>
  </div>
</nav>
```

#### Displaying the navbar independent of scrolling
In some cases you might want to keep the navbar at the top or bottom of the screen regardless of scrolling. You will need to add either the `navbar-fixed-top` or `navbar-fixed-bottom` class to the `<nav>` element.
```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```

#### Collapsing the navbar
On a small screen (such as a phone or tablet) the navbar is going to take up too much space. Luckily the option to collase the navbar exists. You can accomplish this using the following example.
```html
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
```

#### Navbar Examples
<!-- A drop-down cannot be shown in the example unless we include Bootstrap's javascript file. -->
<!-- The id attributes are set in the example so clicking the links won't go to top of the page. -->
`navbar navbar-default`
<nav class="navbar navbar-default" id="navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#navbar-default">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#navbar-default">Home</a></li>
      <li><a href="#navbar-default">Page 1</a></li>
      <li><a href="#navbar-default">Page 2</a></li>
      <li><a href="#navbar-default">Page 3</a></li>
      <button class="btn navbar-btn">Button</button>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#navbar-default">Action Link #1</a></li>
      <li><a href="#navbar-default">Action Link #2</a></li>
    </ul>
  </div>
</nav>

`navbar navbar-inverse`
<nav class="navbar navbar-inverse" id="navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#navbar-inverse">Site Name</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#navbar-inverse">Home</a></li>
      <li><a href="#navbar-inverse">Page 1</a></li>
      <li><a href="#navbar-inverse">Page 2</a></li>
      <li><a href="#navbar-inverse">Page 3</a></li>
      <button class="btn navbar-btn">Button</button>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#navbar-inverse">Action Link #1</a></li>
      <li><a href="#navbar-inverse">Action Link #2</a></li>
    </ul>
  </div>
</nav>

## Bootstrap Navigation Bar (v 4.0)
#### How it works
Here’s what you need to know before getting started with the navbar:

Navbars require a wrapping .navbar with .navbar-expand{-sm|-md|-lg|-xl} for responsive collapsing and color scheme classes.
Navbars and their contents are fluid by default. Use optional containers to limit their horizontal width.
Use our spacing and flex utility classes for controlling spacing and alignment within navbars.
Navbars are responsive by default, but you can easily modify them to change that. Responsive behavior depends on our Collapse JavaScript plugin.
Navbars are hidden by default when printing. Force them to be printed by adding .d-print to the .navbar. See the display utility class.
Ensure accessibility by using a <nav> element or, if using a more generic element such as a <div>, add a role="navigation" to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
  
#### Supoorted Content
The navbar comes with built-in support for a handful of sub-components such as:
* `.navbar-brand` for your company, product, or project name.
* `.navbar-nav` for a full-height and lightweight navigation (including support for dropdowns).
* `.navbar-toggler` for use with our collapse plugin and other navigation toggling behaviors.
* `.form-inline for` any form controls and actions.
* `.navbar-text` for adding vertically centered strings of text.
* `.collapse.navbar-collapse` for grouping and hiding navbar contents by a parent breakpoint.

#### Example
<!--Here’s an example of all the sub-components included in a responsive light-themed navbar that automatically collapses at the lg (large) breakpoint.-->

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

