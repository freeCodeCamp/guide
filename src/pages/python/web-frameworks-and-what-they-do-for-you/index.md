---
title: Python Web Frameworks and What They Do 
---
We have used the word `framework` quite liberally in the earlier articles. You may or may not be familiar with what that is. Nonetheless, we will discuss what Python Web Frameworks do for you, out-of-the-box.

Web Frameworks, to put it informally, do for you what would be doing _repeatedly_ if you were to build a lot of websites with different functionalities. 

Let's take an extremely crude example and attempt to make a simple analogy. Say, you go to dinner, and it's a fancy restaurant. It could be any type of restaurant - Italian, Mexican, Indian, Korean, Pan-Asian.

Try to think of the common things that happen in a restaurant when a customer walks in. A valet might take your car and validate parking. You might be asked at the reception if you had booking; and how many of your friends are with you. You would probably be shown to your table, or asked to wait - depending on the crowd inside.

Once seated, you would be asked if you wanted regular or bottled water. Then someone would ask if you prefer drinks. You might order some starters, followed by main-course; and finally, some dessert. You have to pay the bill.

I understand if you would like to take a moment to take a trip down memory lane, enjoying a delicious toothsome. Once you are done, you need to put yourself in the position of the person who is running the business.

If you notice, there are some activities that you are doing repeatedly for every customer. And based on the type of restaurant and time of day, there are some things that would be different. For instance, the menu and food prices.

Say, you are running the business; you would also need to handle other aspects of this business that a customer would be oblivious to. For instance; the salary of the staff, managing books, paying rent and tax on the property, printing new menu cards etc.

You are wondering where this conversation is headed. Calm down! We are getting back to Python Web Development ASAP.

A Web Framework does these repeating activities for you - that you would do when you build a web application using only a programming language and some networking libraries. Like Request Handling, URL Routing, Template Compilation, Context Setting, CSRF Protection, Logging, Database Interaction via ORM, Authentication, Response Rendering etc.

You are probably wondering what, then, is left for the developer to do? Based on the application, you have to use the framework APIs and write your application-specific logic.

Your code will fill the gaps _intentionally_ left in the framework code - and combining your code with the framework; your web application would have life breathed into it!

## Popular Python Web Frameworks


### Django

Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design. 
Built by experienced developers, it takes care of much of the hassle of Web development, so you can focus on writing your app without needing to reinvent the wheel. 
It’s free and open source.


[Official page](https://www.djangoproject.com/ "Official page")


### Django Rest Framework (DRF)

Django REST framework is a powerful and flexible toolkit for building Web APIs.

Some reasons you might want to use REST framework:
- The Web browsable API is a huge usability win for your developers.
- Authentication policies including packages for OAuth1a and OAuth2.
- Serialization that supports both ORM and non-ORM data sources.
- Customizable all the way down - just use regular function-based views if you don't need the more powerful features.
- Extensive documentation, and great community support.
- Used and trusted by internationally recognised companies including Mozilla, Red Hat, Heroku, and Eventbrite.

[Official page](http://www.django-rest-framework.org/ "Official page")


### Flask

Flask is a microframework for Python based on Werkzeug, Jinja 2 and good intentions.
And before you ask: It's BSD licensed!


[Official page](http://flask.pocoo.org/ "Official page")


#### Flask is fun

```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"
```


### Tornado

Tornado is a Python web framework and asynchronous networking library, originally developed at FriendFeed.
By using non-blocking network I/O, Tornado can scale to tens of thousands of open connections, making it ideal for long polling, WebSockets, and other applications that require a long-lived connection to each user.


[Official page](http://www.tornadoweb.org/en/stable/ "Official page")


### Pyramid

Pyramid makes it easy to write web applications.
You can start small with this "hello world" minimal request/response web app.
This may take you far, especially while learning.
As your application grows, Pyramid offers many features that make writing complex software take less effort.


[Official page](https://trypyramid.com/ "Official page")


