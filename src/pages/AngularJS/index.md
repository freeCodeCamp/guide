---
title: AngularJS
---
## AngularJS

AngularJS is a JavaScript framework. It can be added to an HTML page with a `<script>` tag.

AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.

AngularJS is distributed as a JavaScript file, and can be added to a web page with a script tag:

```js
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
```
### AngularJS Extends HTML

AngularJS extends HTML with `ng-directives`.

The `ng-app` directive defines an AngularJS application.

The `ng-model` directive binds the value of HTML controls (input, select, textarea) to application data.

The `ng-bind` directive binds application data to the HTML view.

example: 
```js
<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<body>

<div ng-app="">
  <p>Name: <input type="text" ng-model="name"></p>
  <p ng-bind="name"></p>
</div>

</body>
</html>
```

### AngularJS starts automatically when the web page has loaded.

The ng-app directive tells AngularJS that the <div> element is the "owner" of an AngularJS application.

The ng-model directive binds the value of the input field to the application variable name.

The ng-bind directive binds the innerHTML of the <p> element to the application variable name.
