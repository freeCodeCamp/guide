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
	    <tr>
	      <th>Item</th>
	      <th>Amount</th>
	    </tr>
	  </thead>
	  <tfoot>
	    <tr>
	      <td>Apple</td>
	      <td>10</td>
	    </tr>
	  </tfoot>
	  <tbody>
	    <tr>
	      <td>Peach</td>
	      <td>15</td>
	    </tr>
	    <tr>
	      <td>Watermelon</td>
	      <td>3</td>
	    </tr>
	  </tbody>
	</table>
	</body>
   </html>
```
Result:
<table>
	  <thead>
	    <tr>
	      <th>Item</th>
	      <th>Amount</th>
	    </tr>
	  </thead>
	  <tfoot>
	    <tr>
	      <td>Apple</td>
	      <td>10</td>
	    </tr>
	  </tfoot>
	  <tbody>
	    <tr>
	      <td>Peach</td>
	      <td>15</td>
	    </tr>
	    <tr>
	      <td>Watermelon</td>
	      <td>3</td>
	    </tr>
	  </tbody>
	</table>


#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' target='_blank' rel='nofollow'>MDN Article on the HTML <table> tag</a>
