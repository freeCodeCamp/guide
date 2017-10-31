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
Result:
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

### Table Example with more semantic information
```html
<!DOCTYPE html>
<html>
	<body>
    <table>
      <thead>
        <th>
          First Table Header
	</th>
	<th>
          Second Table Header
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
            First Table Footer
          </td>
	  <td>
            Second Table Footer
          </td>
        </tr>
      </tfoot>
    </table>
	</body>
</html>
```
Result:
    <table>
      <thead>
        <th>
          First Table Header
	</th>
	<th>
          Second Table Header
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
            First Table Footer
          </td>
	  <td>
            Second Table Footer
          </td>
        </tr>
      </tfoot>
    </table>
    
#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' target='_blank' rel='nofollow'>MDN Article on the HTML table tag</a>
