# RoadMap for Ruby on Rails
## Introduction - What is Rails? Why use it?

Ruby on Rails is a full stack opinionated web application framework. Woah, that's a lot of jargon right there. What does that mean? Firstly, full stack means that everything from the stuff you display on the screen to the user(s) to the stuff that happens at the server is created and managed with a single framework. Opinionated means that the framework ships with tools that are already picked after much thought by experts. You probably know what Web Application Framework means. :D

Rails uses the Ruby programming language. Ruby is so full of syntactic sugar that it feels almost as and in some cases just as sweet as writing something in English. This makes coding in Ruby much more intuitive when compared to something more verbose like say, C++. 

The ideology that flows in every drop of the framework's metaphorical blood is something called "Convention over Configuration". This means that when you start a new Rails app, you get a preconfigured codebase and tools that are ready for you to plug code into. You don't have to put work into bootstrapping the application by choosing different tools and configuration settings like you'd do if you used something like ExpressJs or Sinatra.

Why should one use Rails? Is it relevant in today's web application development scenario where a new groundbreaking JS-based framework seems to come up every other week? 

Here's the deal. Rails is designed to make it easy for a developer to create functionality for his/her app as fast as possible. It will not leave you stuck in the details. Once you are up close and cozy with the conventions, creating web applications will take you days instead of weeks.

A few features of Rails:

* It uses the **MVC** paradigm
* It combats **CSRF** by automatically including **tokens** in the rendered HTML
* It has robust **generation tools** to generate all kinds of stuff, ranging from models to views to, you guessed it, controllers ;)
* It has a special **console** where the user can access the database without having to write queries. Apart from that, the console does much more too
* It has useful abstraction libraries like **ActiveRecord** enabled by default
* It has many sturdy testing options and ships with **minitest** by default; That said, shifting to **rspec** is really simple
* With Rails, if you choose to have an **API** instead of a full-blown app, you can do that very easily
* Iterating upon the above point, a Rails API integrates well with pretty much every frontend framework out there; Angular, React, Ionic, you name it
* It is extensible; Any Ruby **gem** you like and many you probably don't can be used in your Rails application
* By default, Rails and its recommended conventions are **RESTful** in nature

Rails embraces the Ruby way and exists solely to make programming web applications and APIs intuitive and delightful. Learn it if you're looking for something clear, concise and yet sweet.

# Contents
* #### A few prerequisites
* #### Rails directory structure, conventions and default settings
* #### MVC - Models, Views and Controllers
* #### Introduction to Rails
* #### RESTful Routing
* #### MVC Project
* #### Rails associations
* #### Associations projects
* #### Action Cable
* #### Rails APIs
* #### Final Project

# A few prerequisites

* This course assumes that the student has a working knowledge of frontend and/or has completed the frontend course
* This course assumes that the student uses a linux-based operating system or OS X. Frankly, programming with Ruby and Rails on Windows is a pain in the worst place. We don't recommend it and for good reason. If you're looking to install a good linux-based operating system on your computer, here's an awesome one -> [Ubuntu](https://www.ubuntu.com/download/desktop). If you want a way to learn and create Ruby programs and Rails applications on Windows, check out the cloud9 IDE, where you can create an Ubuntu based system for yourself to practice on right on the web. Or any other online IDEs you like will work fine. It is highly recommended that you use a Linux-based system or OS X and install everything from scratch, as that is part of the course
* The course assumes that you can copy paste commands in a terminal console. It also assumes you can search on Google to solve errors.
* Expertise with the Ruby programming language. If you haven't learnt it or programmed with it, don't worry. Your quest begins here. 

* **Topics covered in this lesson**: Basics of Ruby, syntax, control flow, basic data structures in Ruby ,loops, object oriented programming using Ruby

* ## The lesson 

1. **Installing** Ruby and Rails on Linux-based and OS X systems:
  * Install GPG keys for **RVM**. Follow the instructions in the "Install GPG keys" part of the [RVM install page](https://rvm.io/rvm/install).
  * **Install Ruby and rails using RVM.** Run the command "\curl -sSL https://get.rvm.io | bash -s stable --rails" in a terminal console. 
  
  
Task | Duration | Resource Type
:--:  |   :--:    | :--: 
[Complete the Codeacademy Course for the Ruby language](https://www.codecademy.com/es/learn/learn-ruby) | 8-12 hours  | Interactive coding based course

# Rails directory structure, conventions and default settings

* There's a reason why Rails is preferred by many startups without a big developer team
* It's easy and very fast to develop and release a Rails application, when compared to the other popular options
* Convention over Configuration is one of the few core ideologies, if not the core ideology that Rails advocates
* It means that Rails provide you with the best configuration and opinionated tools beforehand
* Rails also gives you a set of conventions
* Following these conventions makes developing web applications much faster than with other web frameworks

**Topics covered in this lesson**

Concept | Duration | Video Resource | Text Resource
 :--:   |  :--:    |    :--:        |  :--:
The Rails Doctrine | 30 minutes | - | [The official Rails doctrine](http://rubyonrails.org/doctrine/)
High level overview of Rails and file structure | 40 minutes | [Drifting Ruby's awesome video on Rails architectural overview](https://www.youtube.com/watch?v=9PAN-dvROl4) | [Tutorialspoint's article on the Rails file structure](https://www.tutorialspoint.com/ruby-on-rails/rails-directory-structure.htm)

It is highly recommended to read the Rails doctrine fully word by word as it, in essence gives clarity about the motivations of Rails and its conventions.

# RESTful routing in Rails
* The Rails router is an extremely powerful and flexible thing
* In a single file, you can define as many routes or API endpoints as you need
* This file exists in the **config** directory
* It is called **routes.rb**
* General convention is to use RESTful routes
* Prerequisite : Understanding of HTTP and GET requests, understanding of REST

Concept | Duration | Video Resource | Text Resource
 :--:   |  :--:    |    :--:        |  :--:  
Introduction to the Rails router | 30 minutes | [Vebotech YouTube channel](https://www.youtube.com/watch?v=16Bk_0RADLQ) | [RichOnRails](https://richonrails.com/articles/understanding-rails-routing)


# MVC - Models, Views and Controller

* The MVC paradigm lies deep inside the metaphorical heart and soul of the RoR framework
* If you're well versed in MVC, you know exactly what to do and just have to learn syntax and conventions
* MVC is basically a way of applying the rule of **separation of concerns**
* The Model does the data representation
* The Controller does the fetching and serving
* The View is what the user sees

* ## The lesson

Concept | Duration | Video Resource | Text Resource
:--: |  :--:    | :--: | :--:
Intro to MVC | 2 hours | [DevMarketer video](https://www.youtube.com/watch?v=1IsL6g2ixak)  | [Better Explained's article](https://betterexplained.com/articles/intermediate-rails-understanding-models-views-and-controllers/)  | 


# Active Record Associations

* To truly harness the power of relationships between data while using Rails, one has to master associations
* Active Record Associations can be a tad confusing in the beginning
* It's mostly just a set of conventions to model a concept
* Learn the concept well and before you know it, you'll be building really complex data models without even blinking twice

* ## The lesson

Concept | Duration | Video Resource | Text Resourcce
 :--:   | :--:     |   :--:         |  :--: 
 Active Record Associations | 2 hours | [Railscast - Polymorphic Associations](http://railscasts.com/episodes/154-polymorphic-association-revised?autoplay=true) | [Ruby on Rails guides](http://guides.rubyonrails.org/association_basics.html)
 Joins | 30 minutes | [An awesome Youtube video on joins](https://www.youtube.com/watch?v=wjEeLjGkBeA)| [Ruby on Rails guides](guides.rubyonrails.org/active_record_querying.html#joins)
 
 
# Action Cable - Real time communication within Rails

* Ever wonder how chat works in real time?
* Or a game of chess against someone who is in another country?
* The browser never seems to refresh and yet data is being sent from your browser and recieved by you
* This happens through Web Sockets
* A web socket is basically technology that exists on your browser
* Once connected, the web socket stays open to receiving(listening for) data and sending(emitting) data
* The same thing happens at the other person's end

**Topics covered in this lesson**: Web Sockets, Action Cable

Concept | Duration | Video Resource | Text Resource
  :--:  |  :--:    |   :--:         |   :--:
  Introduction to Web Sockets | 40 minutes | [Intro to Web Sockets by Dave Xiang](https://www.youtube.com/watch?v=Y0g3M4VG6Ns) | [Tutorials Point](https://www.tutorialspoint.com/websockets/websockets_quick_guide.htm)
Building functionality with Action Cable | 4 hours | [Action Cable Chat App by DHH](https://www.youtube.com/watch?v=n0WUjGkDFS0) | [M. Hartl's awesome book for bulding an app using Action Cable ](https://www.learnenough.com/action-cable-tutorial) 

# Rails APIs

* An API is an application program interface
* A web API is supposed to take in requests and respond to those requests with data
* So why an API? Why not build everything using ActionView?
* You can build a normal website that refreshes on every reload using Rails
* What if you wanted to make a single page application powered by Angular or React? Or an Android application?
* Rails allows you the flexibility to use it just for the backend like an API and integrate it with just about any frontend framework that can make HTTP 
* Just like everything else with Ruby and Rails, you don't have to do much configuration to setup an API
* You just have to use a '--api' flag
* The full command will look something like this:  "rails new cool_app --api"
* In this course, we will focus on building REST APIs
* The REST(Representational State Transfer) paradigm is a powerful tool

Concept | Duration | Video Resource | Text Resource
 :--:   |  :--:    |   :--:         |   :--:
 HTTP refresher | 20 minutes | [The HTTP and the web - A short video by WebDev Cave](https://www.youtube.com/watch?v=eesqK59rhGA) | [Small article on HTTP from Webnots](https://www.webnots.com/what-is-http/)
REST paradigm | 1 hour | [Intro to REST by Google Developers](https://www.youtube.com/watch?v=YCcAE2SCQ6k) | [rest.elkstein.com's blog on REST](http://rest.elkstein.org/)
RESTful APIs using Rails | 2 hours | [Ruby on Rails REST API from scratch by Traversy Media](https://www.youtube.com/watch?v=QojnRc7SS9o) | [Scotch.io's tutorial on building a RESTful JSON API using Rails](https://scotch.io/tutorials/build-a-restful-json-api-with-rails-5-part-one) 

# Building a full fledged web app using Rails

* We're at the home stretch now
* This is the time to put all that Rails muscle you've built up to good use
* You're gonna build an actual fully functional Rails web application
