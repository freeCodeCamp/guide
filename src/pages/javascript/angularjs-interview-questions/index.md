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

Question: How do you cancel a timeout with AngularJs?
Answer: $timeout is AngularJs' wrapper for window.setTimeout, you cancel a timeout applying the function: 

    $timeout.cancel(function (){
      // write your code.
    });

Question: What is the Dependency Injection?
Answer: Dependency Injection (DI) is a software design pattern that deals with how components get hold of their dependencies.
The AngularJS injector subsystem is in charge of creating components, resolving their dependencies, and providing them to other components as requested.
