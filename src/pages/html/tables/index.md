---
title: Tables
---
### Defining an HTML Table

An HTML table is defined with the <table> tag.

Each table row is defined with the <tr> tag. A table header is defined with the <th> tag. By default, table headings are bold and centered. A table data/cell is defined with the <td> tag.

### Simple Table Example
```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td> 
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td> 
    <td>94</td>
  </tr>
</table>
```
<a href='https://www.w3schools.com/html/tryit.asp?filename=tryhtml_table'> DEMO </a>

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
