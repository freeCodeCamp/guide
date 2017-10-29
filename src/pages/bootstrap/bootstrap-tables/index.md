---
title: Bootstrap Tables
---
## Bootstrap Tables
---

#### Basic Table
In order to achieve the basic styling example add the base class `.table` to any `<table>` element.

**Example**

   <table class="table">
       <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
    </table>
    
![Basic Table](https://github.com/TroyB12/Pictures/blob/master/Basic%20Table.PNG)

---
#### Table Striped

In order to achieve the striped row effect (zebra-striping) in tables use `.table-striped` in addition to `.table` on any `<table>` element.  Striped tables are styled via the `:nth-child` CSS selector, which is not available in Internet Explorer 8.

   <table class="table table-striped">
      <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
    </table>

![Striped Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Striped.PNG)

---
#### Table Bordered

In order to achieve the bordered table use `.table-bordered` in addition to `.table` on any `<table>` element.

   <table class="table table-bordered">
      <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@TwBootstrap</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
    </table>

![Bordered Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Bordered.PNG)

---
#### Table Hover

In order to achieve the hover row effect on tables, use `.table-bordered` in addition to `.table` on any `<table>` element.

   <table class="table table-hover">
       <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
    </table>

![Hover Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Hover.PNG)

---
#### Table Condensed

In order to achieve the condensed table use `.table-condensed` in addition to `.table` on any `<table>` element.

   <table class="table table-condensed">
     <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
    </table>

![Condensed Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Condensed.PNG)

---

#### Table Responsive

In order to achieve the responsive table by wrapping any `.table` table in a `.table-responsive` element.

<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
        <th>Table heading</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
        <td>Table cell</td>
      </tr>
    </tbody>
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
    <tr class="table-active">Active</tr>
    <tr class="table-success">Success</tr>
    <tr class="table-warning">Warning</tr>
    <tr class="table-danger">Danger</tr>
    <tr class="table-info">Info</tr>

    <!-- On cells (`td` or `th`) -->
    <tr>
  <td class="table-active">Active</td>
  <td class="table-success">Success</td>
  <td class="table-warning">Warning</td>
  <td class="table-danger">Danger</td>
  <td class="table-info">Info</td>
    </tr>
    
![Contextual Class Table](https://github.com/TroyB12/Pictures/blob/master/Table%20Contextual%20Classes.PNG)

---
