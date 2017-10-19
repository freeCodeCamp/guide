---
title: How to Create a Contact Form with CSS
---
## How to Create a Contact Form with CSS

> First we create the HTML elements - input fields for First Name, Last Name, Email and a Text Area for the message.
> Later we apply CSS styles to make the form visually appealing.

### The HTML part
```html
<div class="container">
	<h3>Contact Form</h3>
	<form action="#">
		<label for="first_name">First Name</label>
		<input name="first_name" type="text" required placeholder="John"/>
		<br>
		<label for="last_name">Last Name</label>
		<input name="last_name" type="text" required placeholder="Doe"/>
		<br>
		<label for="email">Email</label>
		<input name="email" type="email" required placeholder="you@domain.com"/>
		<br>
		<label for="message">Message</label><br>
		<textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..."></textarea>
		<div class="center">
			<input type="submit" value="Submit">
		</div>
	</form>	
</div>
```
### The CSS part
```css
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

*:focus {
	outline: 0;
	font-family: 'Roboto', sans-serif;
}

body {
	background: #263238;
}

.container {
	padding: 12px 24px 24px 24px;
	margin: 48px 12px;
	background: #E3F2FD;
	border-radius: 4px;
}

h3 {
	text-align: center;
}

label {
	font-size: 0.85em;
	margin-left: 12px;
}

input[type=text],input[type=email], textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=text]:focus,input[type=email]:focus, textarea:focus {
	border: 1px solid green;
}

input[type=submit] {
	background: #64B5F6;
	margin: 0 auto;
	outline: 0;
	color: white;
	border: 0;
	padding: 12px 24px;
	border-radius: 4px;
	transition: all ease-in-out 0.1s;
	position: relative;
	display: inline-block;
	text-align: center;
}

input[type=submit]:focus {
	background: #A5D6A7;
	color: whitesmoke;
}

input[type=submit]:hover {
	background: #2196F3;
}
.center {
	text-align: center;
}
```

### Output 

![FreeCodeCamp/guides - Contact Form](http://res.cloudinary.com/crack-jack/image/upload/v1508434398/FCC_Github_Contact_form.png)

### More Information:
 Visit the <a href="https://codepen.io/rakhi2104/pen/QqYOoe/"> FreeCodeCamp - Contact Form</a> on <a href="https://codepen.io">Codepen.io</a>
