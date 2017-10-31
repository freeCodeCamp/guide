---
title: Tables
---
## Tables

The `<table>` tag defines an HTML table. It consists of the `<table>` element and one or more `<tr>`, `<th>`, and `<td>` elements.
The `<tr>` element defines a table row, the `<th>` element defines a table header, and the `<td>` element defines a table cell.
A more complex HTML table may also include `<caption>`, `<col>`, `<colgroup>`, `<thead>`, `<tfoot>`, and `<tbody>` elements.

### Simple Table Example
```html
<!DOCTYPE html>
<html>
	<body>
    <table>
      <tr>
        <td>
          cell 1
        </td>
        <td>
          cell 2
        </td>
      </tr>
    </table>
	</body>
</html>
```

### Table Example with more semantic information
```html
<!DOCTYPE html>
<html>
	<body>
    <table>
      <thead>
        <th>
          <td>
            Table Header
          </td>
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            Table
          </td>
          <td>
            Body
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            Table Footer
          </td>
        </tr>
      </tfoot>
    </table>
	</body>
</html>
```

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' target='_blank' rel='nofollow'>MDN Article on the HTML <table> tag</a>
	
My changes: I am currently taking Colt Steele's Front End Bootcamp on Udemy and learned about making tables in html. I made a table with Pokemon characters, their type, and their pictures.	

I used the <tr> tag for the table rows and <th> for the table headers. Below is a snippet of my code:
<tr>
	<td><a href="http://google.com" target="_blank"><img src="https://vignette1.wikia.nocookie.net/pokemon/images/b/b8/001Bulbasaur_Dream.png/revision/latest?cb=20140903033758" width="50" height="50"></a></td>
	<td>Bulbasaur</td>
	<td>Grass/Poison</td>
	<td><a href="http://google.com" target="_blank">Ivysaur</a></td>
</tr>
	
