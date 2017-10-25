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
	<caption>Table Header</caption>
		<thead>
			<tr>
				<th>Day</th>
				<th>Quantity</th>
			</tr>
		</thead>

		<tbody>
			<tr>
				<td>sunday</td>
				<td>45 people</td>
			</tr>
			<tr>
				<td>monday</td>
				<td>55 people</td>
			</tr>
		</tbody>

		<tfoot>
			<tr>
				<td>Sum</td>
				<td>100 people</td>
			</tr>
		</tfoot>
	</table>

</body>
</html>```

#### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table' target='_blank' rel='nofollow'>MDN Article on the HTML <table> tag</a>
