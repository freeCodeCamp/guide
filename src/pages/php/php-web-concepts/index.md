---
title: PHP - Web Concepts
---

### Identifying Browser & Platform

PHP creates some useful environment variables that can be seen in the phpinfo.php page that was used to setup the PHP environment.
One of the environment variables set by PHP is HTTP_USER_AGENT which identifies the user's browser and operating system.
PHP provides a function getenv() to access the value of all the environment variables. The information contained in the HTTP_USER_AGENT environment variable can be used to create dynamic content appropriate to the browser.

Following example demonstrates how you can identify a client browser and operating system.

```
<html>
   <body>
   
      <?php
         function getBrowser() { 
            $u_agent = $_SERVER['HTTP_USER_AGENT']; 
            $bname = 'Unknown';
            $platform = 'Unknown';
            $version = "";
            
            //First get the platform?
            if (preg_match('/linux/i', $u_agent)) {
               $platform = 'linux';
            }elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
               $platform = 'mac';
            }elseif (preg_match('/windows|win32/i', $u_agent)) {
               $platform = 'windows';
            }
            
            // Next get the name of the useragent yes seperately and for good reason
            if(preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent)) {
               $bname = 'Internet Explorer';
               $ub = "MSIE";
            } elseif(preg_match('/Firefox/i',$u_agent)) {
               $bname = 'Mozilla Firefox';
               $ub = "Firefox";
            } elseif(preg_match('/Chrome/i',$u_agent)) {
               $bname = 'Google Chrome';
               $ub = "Chrome";
            }elseif(preg_match('/Safari/i',$u_agent)) {
               $bname = 'Apple Safari';
               $ub = "Safari";
            }elseif(preg_match('/Opera/i',$u_agent)) {
               $bname = 'Opera';
               $ub = "Opera";
            }elseif(preg_match('/Netscape/i',$u_agent)) {
               $bname = 'Netscape';
               $ub = "Netscape";
            }
            
            // finally get the correct version number
            $known = array('Version', $ub, 'other');
            $pattern = '#(?<browser>' . join('|', $known) . ')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
            
            if (!preg_match_all($pattern, $u_agent, $matches)) {
               // we have no matching number just continue
            }
            
            // see how many we have
            $i = count($matches['browser']);
            
            if ($i != 1) {
               //we will have two since we are not using 'other' argument yet
               
               //see if version is before or after the name
               if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
                  $version= $matches['version'][0];
               }else {
                  $version= $matches['version'][1];
               }
            }else {
               $version= $matches['version'][0];
            }
            
            // check if we have a number
            if ($version == null || $version == "") {$version = "?";}
            return array(
               'userAgent' => $u_agent,
               'name'      => $bname,
               'version'   => $version,
               'platform'  => $platform,
               'pattern'   => $pattern
            );
         }
         
         // now try it
         $ua = getBrowser();
         $yourbrowser = "Your browser: " . $ua['name'] . " " . $ua['version'] .
            " on " .$ua['platform'] . " reports: <br >" . $ua['userAgent'];
         
         print_r($yourbrowser);
      ?>
   
   </body>
</html>
```

This is producing following result on my machine. This result may be different for your computer depending on what you are using.

It will produce the following result −

```
Your browser: Google Chrome 54.0.2840.99 on windows reports: 
Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) 
   Chrome/54.0.2840.99 Safari/537.36
```

### Using HTML Forms

The most important thing to notice when dealing with HTML forms and PHP is that any form element in an HTML page will automatically be available to your PHP scripts.

Try out following example by putting the source code in test.php script.

```
<?php
   if( $_POST["name"] || $_POST["age"] ) {
      if (preg_match("/[^A-Za-z'-]/",$_POST['name'] )) {
         die ("invalid name and name should be alpha");
      }
      
      echo "Welcome ". $_POST['name']. "<br />";
      echo "You are ". $_POST['age']. " years old.";
      
      exit();
   }
?>
<html>
   <body>
   
      <form action = "<?php $_PHP_SELF ?>" method = "POST">
         Name: <input type = "text" name = "name" />
         Age: <input type = "text" name = "age" />
         <input type = "submit" />
      </form>
      
   </body>
</html>
```

It will produce the following result −

```
Name: Textbox value
Age : Textbox value
```


