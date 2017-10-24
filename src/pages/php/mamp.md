# MAMP

Mac Apache MySQL and PHP (MAMP) is the Mac version of the Linux-based LAMP stack.  A "stack" is a collection of software used together so often that it often comes pre-packaged.  MAMP is one such instance.  Mac is the operating system, Apache is the web server, MySQL is the flavor of database, and finally, PHP.  PHP is a server-side programming language.  Server-side means the code that handles user requests is invisible to the user.  They interact with a site or web app and requests get sent which the PHP figures out how to handle.

Steps to write a functioning PHP app for Mac Users:
- Install and Open MAMP
- Click 'Start Servers'
- If it doesn't auto open, click 'Open WebStart Page'
- At this top of this new tab, click 'My Website'
- Hopefully, success!  You should see a basic site being served via MAMP.

## How to write Hello World in PHP
Create a file, using your favorite text editor, and name it 'index.php'.
Insert the following:


```php
<?php 
  echo "Hello World!"; 
?>
```


Frequenty Asked Questions (FAQs)

1) Where did MAMP get saved?
  - From the MAMP home screen, on the left side, click the gear-looking icon titled 'Preferences...'
  - Where it says 'Document Root:', you should see an arrow pointing right.  Click it to be taken to the root path.
2) How do I change what is displayed in the app?
  - By default, MAMP looks for an index.html or index.php file to "serve".
  - If you follow the instructions in 1), you should see the index.php / index.html file.
  - PHP code resides between <?php ?> tags.  See the above "How to write Hello World in PHP"
  

