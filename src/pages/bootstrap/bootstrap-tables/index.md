---
title: Bootstrap Tables
---
## Bootstrap Tables
---

#### Basic Table
In order to achieve the basic styling example add the base class `.table` to any `<table>` element.

**Example**

    <table class="table">
      ...
    </table>
    
![Basic Table](https://github.com/TroyB12/Pictures/blob/master/Basic%20Table.PNG)

---
#### Table Striped

In order to achieve the striped row effect (zebra-striping) in tables use `.table-striped` in addition to `.table` on any `<table>` element.  Striped tables are styled via the `:nth-child` CSS selector, which is not available in Internet Explorer 8.

    <table class="table table-striped">
      ...
    </table>

![Striped Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Striped.PNG)

---
#### Table Bordered

In order to achieve the bordered table use `.table-bordered` in addition to `.table` on any `<table>` element.

    <table class="table table-bordered">
      ...
    </table>

![Bordered Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Bordered.PNG)

---
#### Table Hover

In order to achieve the hover row effect on tables, use `.table-bordered` in addition to `.table` on any `<table>` element.

    <table class="table table-hover">
      ...
    </table>

![Hover Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Hover.PNG)

---
#### Table Condensed

In order to achieve the condensed table use `.table-condensed` in addition to `.table` on any `<table>` element.

    <table class="table table-condensed">
      ...
    </table>

![Condensed Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Condensed.PNG)

---

#### Table Responsive

In order to achieve the responsive table by wrapping any `.table` table in a `.table-responsive` element.

<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>

![Responsive Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Responsive.PNG)

---

Developers are able to change the style of each individual row and/or cell by using **contextual classes**.

- `.active` -	Applies the hover color to a particular row or cell
- `.success` -	Indicates a successful or positive action
- `.info` -	Indicates a neutral informative change or action
- `.warning` -	Indicates a warning that might need attention
- `.danger` -	Indicates a dangerous or potentially negative action

    <!-- On rows -->
    <tr class="active">...</tr>
    <tr class="success">...</tr>
    <tr class="warning">...</tr>
    <tr class="danger">...</tr>
    <tr class="info">...</tr>

    <!-- On cells (`td` or `th`) -->
    <tr>
      <td class="active">...</td>
      <td class="success">...</td>
      <td class="warning">...</td>
      <td class="danger">...</td>
      <td class="info">...</td>
    </tr>
    
![Contextual Class Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Contextual%20Classes.PNG)

---

#### Accessible Bootstrap Tables
In order to ensure that all users can understand the structure of an HTML table (even when users are utilizing a screen reader to access the table) the scope of the rows and columns must be added to the HTML structure. Adding the scope will allow the Table to meet the Web Content Accessibility Guidelines or [WCAG](https://www.w3.org/TR/WCAG20-TECHS/H63.html).

##### Accessible Bootstrap Table Example
- <code>scope="col"</code> is added to all the <code>th</code> columns. Then <code>scope="row"</code> is added to the corresponding start of each new row inside the <code>tbody</code> tag. This markup tells screen readers which columns go with which new header rows. This will minimize confusion for non-sighted users.
```html
<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Fax Number</th>
      <th scope="col">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Jane Smith</th>
      <td>555-555-555</td>
      <td>555-555-555</td>
      <td>Chicago</td>
    </tr>
    <tr>
      <th scope="row">John Smith</th>
      <td>555-555-555</td>
      <td>555-555-555</td>
      <td>Richmond</td>
    </tr>
    <tr>
      <th scope="row">Rick Sanchez</th>
      <td>555-555-555</td>
      <td>555-555-555</td>
      <td>Dimension C-137</td>
    </tr>
  </tbody>
</table>
```


