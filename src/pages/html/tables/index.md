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
### Table Example when use row span
```
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<table>
<tr>
<td>STT</td>
<td colspan=2>NAME</td>
<td>AGE</td>
</tr>
<tr>
<td>1</td>
<td>Mr</td>
<td>ABC</td>
<td>12</td>
</tr>
<tr>
<td>2</td>
<td>Ms</td>
<td>XYZ</td>
<td>12</td>
</tr>
</table>

</body>
</html>
```

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' target='_blank' rel='nofollow'>MDN Article on the HTML <table> tag</a>
