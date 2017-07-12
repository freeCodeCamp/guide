---
title: Ruby Introduction
---
## What is Ruby?

<a>Ruby</a> is an interpreted scripting language for quick and easy object-oriented programming. Which means:

*   Ability to make operating system calls directly
*   Powerful string operations and regular expressions
*   Immediate feedback during development
*   Variable declarations are unnecessary
*   Variables are not typed
*   Syntax is simple and consistent
*   Memory management is automatic
*   Everything is an object
*   Classes, methods, inheritance, etc.
*   Singleton methods
*   Has "mixin" functionality by module
*   Iterators and closures

If you are unfamiliar with some of the concepts above, read on, and don't worry. The mantra of the ruby language is quick and easy.

## Version

The current stable version is 2.3.0\. It has various performance improvements and syntactic additions from its predecessor, ruby v2.2.4.

## Installation

Mac OS X and many Linux distributions come pre-installed with Ruby. To check if ruby is pre-installed in your system, just run `ruby -v` on your shell. There are several ways to install Ruby:

*   When you are on a UNIX-like operating system, using your system’s package manager is the easiest way of getting started. However, the packaged Ruby version usually is not the newest one.
*   Installers can be used to install a specific or multiple Ruby versions. There is also an installer for Windows.
*   Managers help you to switch between multiple Ruby installations on your system.
*   And finally, you can also build Ruby from source.

To know about how to install Ruby through package managers, installers and source, click [here](https://www.ruby-lang.org/en/documentation/installation/). RVM (Ruby Version Manager) and rbenv are the most popular Ruby managers to manage multiple Rubies. If you get stuck anywhere, don't worry, just head over to our [Gitter chat room](https://gitter.im/FreeCodeCamp/ruby) and ask us anything.

## IRB

IRB stands for Interactive Ruby Shell. The abbreviation irb comes from the fact that the filename extension for Ruby is ".rb", although interactive Ruby files do not have an extension of ".irb". The program is launched from a command line and allows the execution of Ruby commands with an immediate response, experimenting in real-time. It features command history, line editing capabilities, and job control, and is able to communicate directly as a shell script over the Internet and interact with a live server. It was developed by Keiju Ishitsuka.

    irb
    2.3.0 :001 > print "Hello World"
    Hello World! => nil

## Ruby Interpreter

The Ruby interpreter is what is used to run Ruby scripts. If it is available and in Unix shell’s search path makes it possible to start it by typing the command `ruby` followed by the script name will invoke the interpreter and run the script.

`hello_campers.rb`

    if 'welcome' == 'welcome'
        print('Hello campers!')
    end

From command-line:

    $ ruby hello_campers.rb
    Hello campers!

## Documentation

Ruby is well [documented](https://www.ruby-lang.org/en/documentation/). These docs include tutorials, guides, references and meta information for language.  
Another important resouce for documentation is [Ruby Doc](http://ruby-doc.org/core-2.3.0/). You should visit this [link](https://github.com/airbnb/ruby) to know more about Ruby style guide, written by developers of AirBnB.

## Debugging

Inline `print` statements can be used for simple debugging:

    print some_variable # prints to console

> **... often the quickest way to debug a program is to add a few print statements to the source: the fast edit-test-debug cycle makes this simple approach very effective.**

Ruby also includes more powerful tools for debugging, such as:  
* [_pry-debugger_](https://github.com/nixme/pry-debugger)

## Hello World!

Going back to the docs, we can read about the [`print`](http://ruby-doc.org/core-2.3.0/Kernel.html#method-i-print) method, one of the built-in methods of the [the Kernel module](http://ruby-doc.org/core-2.3.0/Kernel.html).  

    print(obj, ...) → nil

Prints each object to $stdout. Objects that aren’t strings will be converted by calling their `to_s` method. The return value of print is `nil`. So when you run `print "Hello World!` in your IRB. The output is:

    2.3.0 :001 > print "Hello World!"
    Hello World!
     => nil

## Frameworks

Ruby has several frameworks for quickly scaffolding applications. The most popular by far is [Rails](http://rubyonrails.org/) which was initially released in 2004\. Other frameworks for Ruby include [Sinatra](http://www.sinatrarb.com/), [Lotus](http://lotusrb.org/), and [Volt](http://voltframework.com/). Each of these options has their pros and cons for development and cater to a variety needs.