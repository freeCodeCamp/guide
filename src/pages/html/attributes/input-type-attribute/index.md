
## Input Type Attribute
The input element is a multi-purpose form control. The type attribute specifies the type of form control to be created.

#### Example type="button":
`button`: A push button with no default behavior. <br/>
`   <input type="button" value="Click me" onclick="msg()">`

#### Example type="checkbox":
`checkbox`: A check box allowing single values to be selected/deselected.<br/>
color: A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text (more info). <br/>
`  <input type="checkbox" name="option1" value="a1">option1<Br>
   <input type="checkbox" name="option2" value="a2">option2<Br>
   <input type="checkbox" name="option3" value="a3">option3<Br> 
   <input type="checkbox" name="option4" value="a4">option4<Br> 
   <input type="checkbox" name="option5" value="a5">option5</p>`

#### Example type="date":
`date`: A control for entering a date (year, month, and day, with no time).<br/>
`  <input id="date" type="date">`

#### Example type="datetime-local":
`datetime-local`: A control for entering a date and time, with no time zone.<br/>
  `<input id="datetime" type="datetime-local">`
  
#### Example type="email":
`email`: A field for editing an e-mail address.<br/>
  `<input id="emailAddress" type="email">`
  
#### Example type="file":
`file`: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.<br/>
  `<input name="myFile" type="file">`
  
#### Example type="hidden":
`hidden`: A control that is not displayed but whose value is submitted to the server.<br/>
  `<input id="prodId" name="prodId" type="hidden" value="xm234jq">`
  
#### Example type="image":
`image`: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels.<br/>
  `<input id="image" type="image" src="https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png"> `
  
#### Example type="month":
`month`: A control for entering a month and year, with no time zone.<br/>
`<input id="month" type="month">`

#### Example type="number":
`number`: A control for entering a number.<br/>
  `<input id="number" type="number">`
  
#### Example type="password":
`password`: A single-line text field whose value is obscured. Use the maxlength and minlength attributes to specify the maximum length of the value that can be entered.<br/>
`<input id="password" type="password">`

### Sources
1. <a href='https://webref.ru/html/input/type' target='_blank' rel='nofollow'>A tag: webref.ru</a>
2. <a href='https://www.w3schools.com/tags/att_input_type.asp' target='_blank' rel='nofollow'>A tag: w3schools</a>
