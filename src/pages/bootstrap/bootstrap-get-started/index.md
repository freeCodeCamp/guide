---
title: Bootstrap Get Started
---
## Bootstrap Get Started

Bootstrap is a responsive web design framework originally created by designers at Twitter. In addition to a simple grid layout, Bootstrap provides basic components needed to build a user interface. This guide assumes you are using the latest version of Bootstrap (currently v4 at the time of writing)

There are two main ways to include Bootstrap in your project.
1. Through a Content Delivery Network (CDN)
2. Using a relevant package manager

### CDN

Using a CDN is the easiest way to get Bootstrap into your project quickly.

In the `<head>` of your page, BEFORE you load any other stylesheets, copy and paste the below `<link>`.

```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">

```

Optional but recommended for dynamic content:
At the end of your page, before the closing `</body>` tag, include the following Javascript plugins, JQuery and Popper.js

```
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
```

That's it! You're ready to start using Bootstrap. Check out the documentation for a <a href='https://getbootstrap.com/docs/4.0/getting-started/introduction/#starter-template' alt='bootstrap documentation starter template'>Starter Template</a> if you're struggling with where to go next.

### Package Manager

While it's possible to <a href='https://github.com/twbs/bootstrap/archive/v4.0.0-beta.zip' alt='zip file of bootstrap version 4 source code'>download the source files</a> for Bootstrap, using a package manager allows you to always have an up to date version within your application. In order to use any of the package managers below, you are required to have a <a href='https://getbootstrap.com/docs/4.0/getting-started/download/#package-managers' alt='more information on SASS comiler and Autoprefixer'>SASS compiler and and Autoprefixer</a> for setup.

**NPM**

In your terminal, run:

```
$ npm install bootstrap@4.0.0-beta
```
For more information, take a look at the <a href="https://getbootstrap.com/docs/4.0/getting-started/download/#npm">Bootstrap</a> and <a href='https://www.npmjs.com/package/bootstrap' alt='bootstrap intallation through NPM documentation'>NPM</a> documentation.

**Ruby Gems**

If you are using bundler for your project, add the following line to your gemfile
```
gem 'bootstrap', '~> 4.0.0.alpha6'
```
Alternatively, you can run the following in your terminal
```
$ gem install bootstrap -v 4.0.0.alpha6
```

For more information, check out the <a href='https://github.com/twbs/bootstrap-rubygem/blob/master/README.md' alt='bootstrap ruby gem installation and setup documentation'>gems documentation</a>

#### More Information:

<a href='http://getbootstrap.com/' target='_blank' rel='nofollow'>The official Bootstrap website</a>
<a href='https://getbootstrap.com/docs/4.0/getting-started/introduction/' target='_blank'>Getting Started with Bootstrap</a>
<a href='https://getbootstrap.com/docs/4.0/getting-started/download/' target='_blank'>Downloading Bootstrap</a>
