---
title: Bootstrap
---
## Bootstrap

Bootstrap is a popular front-end framework for web development. It contains pre-built components and design elements that can easily be added to a web project to style typography, forms, buttons, etc. It is widely supported and useble on modern browsers like Chrome, Firefox, Opera, Safari, and Internet Explorer (supported from IE8 on).

Bootstrap includes a responsive grid system for responsive layouts, and is great starting point for building a mobile-friendly website. It also includes optional JavaScript functionality like collapsible content, carousels, and modals.


#### Version History

Sometimes referred to as Twitter Bootstrap, the framework was originally developed by Twitter as an internal tool.  It was released as an open source project in August of 2011.

Bootstrap 2 was released in January 2012, and introducing the 12 column responsive grid system.

Bootstrap 3 appeared in August 2013, switching to a flat design and a mobile-first approach.

Bootstrap 4 was released in August 2017, adding full use of flexbox,cards have replaced panels a wells.


#### Installation

There are two main ways to add Bootstrap to your web project. You can add Bootstrap CSS with a `<link>` element inside the `<head>` of your webpage via (CDN):

`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">`

Adding the JavaScript elements of Bootstrap is similar, with `<script>` elements usually placed at the bottom of your ‘<body>’ tag.  You will need to include two dependencies first - jQuery and Popper - in this order:

```html
<<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
```


Or, alternatively, you can download all of Bootstraps source files including Sass, JavaScript, and the build system with Bower, Composer, Meteor, or npm. This allows greater control and the option to include or exclude modules as needed.

`npm install bootstrap`

`gem 'bootstrap', '~> 4.1.3'`

`bower install bootstrap#v4.0`

(These are examples. You may want to check the <a href='https://getbootstrap.com/' target='_blank' rel='nofollow'>Bootstrap website</a> for the most up-to-date links)

#### More Information:

Bootstrap has thorough documentation with many <a href='https://getbootstrap.com/docs/4.0/examples/' target='_blank' rel='nofollow'>examples</a> and an <a href='https://getbootstrap.com/docs/4.0/getting-started/introduction/' target='_blank' rel='nofollow'>HTML template for getting started</a>. 

In addition, you can find both <a href='https://bootswatch.com/' target='_blank' rel='nofollow'>free</a> and <a href='https://themes.getbootstrap.com/' target='_blank' rel='nofollow'>paid</a>
themes that build on the Bootstrap framework to provide a more customized and stylish look.
