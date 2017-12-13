---
title: Ruby on Rails
---

## What is Ruby on Rails
Ruby on Rails is a server-side framework (gem) built on the Ruby language to make websites. Rails makes web development faster, easier and more fun. It includes everything you need to build fantastic applications and has a big community. Rails was created by David Heinemeir Hansson and is currently on it's 5th version. Rails emphasizes the use of other well-known software engineering patterns and paradigms, including convention over configuration (CoC), don't repeat yourself (DRY), and the active record pattern. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages. Lately, Rails has integrated an API module to make the creation of web-services faster and easier.

## Installing Rails
Rails is downloaded in the same way as any other Ruby gem: with the `gem install` command. Before we download it, we'll need to <a href='https://www.ruby-lang.org' target='_blank' rel='nofollow'>download Ruby</a>. Afterwards we're only 3 words away from starting with Ruby on Rails:

```shell
$ gem install rails
```
## Creating a Rails application

1. After you install Ruby on Rails, it's very simple to create a brand new application, we'll just need 3 more words:
```shell
$ rails new <application_name>
```

2. This command will create a folder with the *application_name* you informed in the last command. Next step is to go to the new directory you've just created:
```shell
$ cd <application_name>
```

3. To run the rails server and see if everything went accordingly is also fast:
```shell
$ rails server
```
It couldn't be anymore simple! Well, this isn't actually 100% true, we could make it even smaller by reducing the `rails server` command to:
```shell
$ rails s
```
4. Now, with you preffered brower, go to `http://localhost:3000` and you'll see: "Yay! You’re on Rails!"

## Convention over Configuration
*Convention over Configuration* means a developer only needs to specify unconventional aspects of the application. For example, if there is a class Sale in the model, the corresponding table in the database is called sales by default. It is only if one deviates from this convention, such as calling the table "products sold", that the developer needs to write code regarding these names. Generally, Ruby on Rails conventions lead to less code and less repetition.

## DRY - Don't Repeat Yourself
*Don't repeat yourself* means that information is located in a single, unambiguous place. For example, using the ActiveRecord module of Rails, the developer does not need to specify database column names in class definitions. Instead, Ruby on Rails can retrieve this information from the database based on the class name.

## Ruby on Rails is open source 
So not only is it free to use, you can also help make it better. More than 3,000 people already have contributed code to <a href='https://github.com/rails/rails' target='_blank' rel='nofollow'>Rails</a>. It’s easier than you think to become one of them.