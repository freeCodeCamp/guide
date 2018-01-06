HTML 5 introduces the "required" attribute, making input validation easier. 

For example, this is the code for textbox validation using the required attribute. 

<!DOCTYPE html>
<html>
<body>

<form action="/action_page.php">
  Username: <input type="text" name="usrname" required>   //Adding "required" to the input tag is all it takes. 
  <input type="submit">
</form>

</body>
</html>
