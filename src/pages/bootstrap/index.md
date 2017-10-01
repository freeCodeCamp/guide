---
title: Bootstrap
---
## Bootstrap

Bootstrap is a popular front-end framework for web development.  It contains pre-built components and design elements that can be easily added to a web project to style typography, forms, buttons, etc. It is widely supported and useable on modern browsers like Chrome, Firefox, Opera, Safari, and Internet Explorer (back to IE 8).

Bootstrap includes a responsive grid system for responsive layouts, and is great starting point for building a mobile-friendly website.  It also includes optional JavaScript functionality like collapsible content, carousels, and modals.


#### Version History

Sometimes referred to as Twitter Bootstrap, the framework was originally developed by Twitter as an internal tool.  It was released as an open source project in August of 2011.

Bootstrap 2 was released in January 2012, and introducing the 12 column responsive grid system.

Bootstrap 3 appeared in August 2013, switching to a flat design and a mobile-first approach.

Bootstrap 4 is available in beta as of August 2017, and now includes Sass and flexbox.


#### Installation

There are two main ways to add Bootstrap to your web project.  Most simply, you can add Bootstrap CSS with a `<link>` element inside the `<head>` of your webpage via (CDN):

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">`

Adding the JavaScript elements of Bootstrap is similar, with `<script>` elements usually placed at the bottom of your ‘<body>’ tag.  You will need to include two dependencies first - jQuery and Popper - in this order:

```
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
```


Additionally, you can download all of Bootstraps source files including Sass, JavaScript, and build system with Bower, Composer, Meteor, or npm.  This allows greater control and the option to include or exclude modules as needed.

`npm install bootstrap@4.0.0-beta`

`gem install bootstrap -v 4.0.0.alpha6`

`bower install bootstrap#v4.0.0-beta`

(These are examples. You may want to check the [Bootstrap website](https://getbootstrap.com/) for the most up-to-date links)

#### More Information:

Bootstrap has thorough documentation with many [examples](https://getbootstrap.com/docs/4.0/examples/) and an [HTML template for getting started](https://getbootstrap.com/docs/4.0/getting-started/introduction/). 

In addition, you can find both [free](https://bootswatch.com/) and [paid](https://themes.getbootstrap.com/)
themes that build on the Bootstrap framework and present a more customized and stylish look.
