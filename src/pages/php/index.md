---
title: PHP
---

## What is PHP?

PHP is a server-side scripting language created in 1995 by Rasmus Lerdorf.

## What does the acronym PHP stand for?

Originally PHP stood for 'Personal Home Page', as Rasmus Lerdorf created it for use on his own website. Then in 1997 more developers expanded the language and the acronym also changed to what it stands for today: 'PHP: Hypertext Preprocessor'. As the first 'P' in PHP also stands for 'PHP', it is known as a 'recursive acronym'.

## What is PHP used for?

PHP can be used for:

* Websites and web applications (server-side scripting)
* Command line scripting
* Desktop (GUI) applications

Typically, it is used in the first form to generate web page content dynamically. For example, if you have a blog website, you might write some PHP scripts to retrieve your blog posts from a database and display them. Other things that PHP scripts could be used for include:

* Processing and saving user input from form data
* Setting and working with website cookies
* Restricting access to certain pages of your website

## How does PHP work?

All PHP code is executed on a web server only, not on your local computer. For example, if you complete a form on a website and submit it, or click a link to a web page written in PHP, no actual PHP code runs on your computer. Instead, the form data or request for the web page gets sent to a web server to be processed by the PHP scripts. The web server then sends the processed HTML back to you (which is where 'Hypertext Preprocessor' in the name comes from), and your web browser displays the results. For this reason, you cannot see the PHP code of a website, only the resulting HTML that the PHP scripts have produced.

## Installation

PHP can be installed with or without a web server.

### GNU/Linux

On Debian based GNU/Linux distros, you can install by :
```bash
sudo apt install php
```

After installing you can run any PHP files by simply doing this in terminal :
```
php file.php
```

You can also install a localhost server to run PHP websites. For installing Apache Web Server :
```
sudo apt install apache2 libapache2-mod-php
```

## What Can PHP Do?

* PHP can generate dynamic page content
* PHP can create, open, read, write, delete, and close files on the server
* PHP can collect form data
* PHP can send and receive cookies
* PHP can add, delete, modify data in your database
* PHP can be used to control user-access
* PHP can encrypt data

## Why PHP?

* PHP runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)
* PHP is compatible with almost all servers used today (Apache, IIS, etc.)
* PHP supports a wide range of databases
* PHP is free. Download it from the official PHP resource: www.php.net
* PHP is easy to learn and runs efficiently on the server side

## PHP Frameworks

Since writing the whole code for a website is not really practical/feasible for most projects, most developers tend to use frameworks for the web development. The advantage of using a framework is that 

 * You don't have to reinvent the wheel everytime you create a project, a lot of the nuances are already taken care for you
 * They are usually well-structured so that it helps in the seperation of concerns
 * Most frameworks tend the follow the best practices of the language
 * A lot of them follow the MVC (Model-View-Controller) pattern so that it seperates the presentation layer from logic
 
## Popular frameworks
 
 * Laravel
 * Symfony
 * Zend
 * CakePHP
 
## Documentation

PHP is [well documented](http://php.net/docs.php). The [official docs](http://php.net/manual/en/) include examples on almost every function reference guide, as well as user comments.

