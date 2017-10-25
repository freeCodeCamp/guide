---
title: How to Redirect a Web Page
---
## How to Redirect a Web Page

The implementation for the page redirection are as follows.

To redirect your site visitors to a new page, add a line in your head section as follows 
 
<html>
   <head>
      
      <script type="text/javascript">
         <!--
            function Redirect() {
               window.location="http://www.tutorialspoint.com";
            }
         //-->
      </script>
      
   </head>
   
   <body>
      <p>Click the following button, you will be redirected to home page.</p>
      
      <form>
         <input type="button" value="Redirect Me" onclick="Redirect();" />
      </form>
      
   </body>
</html>
