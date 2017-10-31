---
title: Basic HTML
---
https://github.com/freeCodeCamp/guides/pulls## Basic HTML

You start first with a boilerplate HTML template.  This would define the doctype, html, head and body elements, including the closing tags.  This is not uncommon practice that some forget to close a tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Basic HTML</title>
  </head>
  <body>
    <!-- Your content goes here -->
  </body>
<html>
```

In the html’s <code>&#60;body&#62;</code> element, you add your web page content.  We will start with the header content.
  
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
	<title>Basic HTML</title>
  </head>
  <body>
    <header>
	  <hgroup>
	    <h1>Header level 1</h1>
		<h2>Header level 2</h2>
		<hgroup>
		  <h3>Subheader level 3</h3>
		</hgroup>
	  </hgroup>
	  <nav>
	    <ul>
		  <li><a href="#">Home</a></li>
		  <li><a href="#">About</a></li>
		  <li><a href="#">Contact</a></li>
		</ul>
	  </nav>
	</header>
  </body>
<html>
```

Next, is your footer.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
	<title>Basic HTML</title>
  </head>
  <body>
    <header>
	  <hgroup>
	    <h1>Header level 1</h1>
		<h2>Header level 2</h2>
		<hgroup>
		  <h3>Subheader level 3</h3>
		</hgroup>
	  </hgroup>
	  <nav>
	    <ul>
		  <li><a href="#">Home</a></li>
		  <li><a href="#">About</a></li>
		  <li><a href="#">Contact</a></li>
		</ul>
	  </nav>
	</header>

	<footer><p>&copy;CompanyB</p><p>Terms and Conditions</p></footer>
  </body>
<html>
```

Finally, the main content.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
	<title>Basic HTML</title>
  </head>
  <body>
    <header>
	  <hgroup>
	    <h1>Header level 1</h1>
		<h2>Header level 2</h2>
		<hgroup>
		  <h3>Subheader level 3</h3>
		</hgroup>
	  </hgroup>
	  <nav>
	    <ul>
		  <li><a href="#">Home</a></li>
		  <li><a href="#">About</a></li>
		  <li><a href="#">Contact</a></li>
		</ul>
	  </nav>
	</header>
	<section>
	  <header><h4>Front page</h4></header>
	  <section>
	    <h5>Highlights</h5>
	    <article>
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</article>
		<article>
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</article>
		<article>
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</article>
	  </section>
	  <section>
	    <h5>Classifieds</h5>
	    <article>
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</article>
		<article>
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</article>
		<article>
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</article>
	  </section>
	</section>
	<footer><p>&copy;CompanyB</p><p>Terms and Conditions</p></footer>
  </body>
<html>
```

