---
title: Angularjs Interview Questions
---
## Angularjs Interview Questions

Question: List out the Directives in AngularJS?
Answer: ngBind, ngModel, ngClass, ngApp, ngInit, ngRepeat

Question : What is $scope in AngularJS?
Answer: $scope in AngularJS is an object which refers to an application model. It is an object that binds view (DOM element) with the controller. In controller, model data is accessed via $scope object. As we know, AngularJS supports MV* pattern, $scope object becomes the model of MV*. 

Question: What is SPA (Single page application) in AngularJS?
Answer: Single-Page Applications (SPAs) are web applications that load a single HTML page and dynamically update that page as the user interacts with the app. SPAs use AJAX and HTML to create fluid and responsive web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript.
A single HTML page here means UI response page from the server. The source can be ASP, ASP.NET, ASP.NET MVC, JSP and so on.
A single-page web application, however, is delivered as one page to the browser and typically does not require the page to be reloaded as the user navigates to various parts of the application. This results in faster navigation, more efficient network transfers, and better overall performance for the end user.

Question: What is routing in AngularJS?
Answer: Routing is a core feature in AngularJS. This feature is useful in building SPA (Single Page Application) with multiple views. In SPA application, all views are different Html files and we use Routing to load different parts of the application and it's helpful to divide the application logically and make it manageable. In other words, Routing helps us to divide our application in logical views and bind them with different controllers.

Question: Explain ng-repeat directive.
Answer: The ng-repeat directive is the most used and very useful AngularJS Directive feature. It iterates over a collection of items and creates DOM elements. It constantly monitors the source of data to re-render a template in response to change.

---
title: Some more important questions
---

Question: What is controllers? What is their lifecycle and how controllers are related to scope?
Answer: Controllers are classes, i.e constructor functions, which are bound to a scope AND a section of HTML through the directive “ng-controller”, routing, or through a directive. Setting a controller creates a new scope (or we can say with every controller there is a scope attached). The controller’s purpose is to set up the initial state of the scope and also manipulate it by adding behaviour, setting watches, event listeners, etc.

Controllers are bound to their scope, and so is their lifecycle. Once a new scope is created, the $compile service sets up initial watches on the scope. At that point, the scope can be manipulated, models on the scope can be created, mutated or destroyed, new watches and listeners can be set. For the changes to take effect, a digest phase needs to be triggered. That allows for observing and responding to model mutation (which is a reaction, thus the next step). The scope’s lifecycle ends with its destruction. Additional events are fired on that occasion. This usually is also the end of the interest for the controller, though it may live on as JavaScript closures do.

Question: What is controllerAs and why it is used?
Answer: The controllerAs is an alias name for the controller. By using this we are giving up the use of $scope, but we can still have all the advantages of it. For example.

#### Example -
  var app = angular.module('app', []);
  app.controller('myController', function($scope) {
    $scope.message = 'Hello'
  });
  
  In template,
  <body ng-app="app">
  <div ng-controller="myController as vm">
    <p>{{ vm.message }}</p>
  </div>
  
Using controllerAs makes it obvious which controller we are referring in the template in case of nested controller.

Question: What is $http service in Angular?
Answer: $http service is one of the Angular's core service used to communicate with HTTP servers. This service is based on the deffred/promise API exposed by $q service. 

#### Example -
$http.get('/someUrl').then(successCallback, errorCallBack);

Here, the then function works once the request is resolved by eiither success or error.

Question: What are all the ways available to communicate between controllers and modules?
Answer: There are multiple ways provided by Angular to communicate between controllers and modules.
1) Using $rootScope - $rootScope is at top of the hierarchy so adding a property to $rootScope will be available in all the controllers. But the best practice is to avoid adding many properties to $rootScope as it is like a global scope.
2) Using services - This can be considered as the best way to communicate. Add data or functions to the services and inject them wherever is required.
3) $emit and $broadcast - A publisher-subscriber pattern in AngularJS to register event listener and dispatch event to share data.



