---
title: Tables
---
## Tables

The &lt;table> tag defines an HTML table. It consists of the &lt;table> element and one or more &lt;tr>, &lt;th>, and &lt;td> elements.
The &lt;tr> element defines a table row, the &lt;th> element defines a table header, and the &lt;td> element defines a table cell.
A more complex HTML table may also include &lt;caption>, &lt;col>, &lt;colgroup>, &lt;thead>, &lt;tfoot>, and &lt;tbody> elements.

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
