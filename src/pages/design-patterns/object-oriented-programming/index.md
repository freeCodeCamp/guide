---
title: Object Oriented Programming (OOP)
---

## Outline
* Why Object Oriented (henceforth abbreviated as OO)?
* OO concepts
* What next?

## Why OO?
In this paradigm, entities are represented as real world data. For instance, we want to represent a dog. In OO paradigm, we simply create a class named "dog", and give it attributes (colour, age, sex, etc) and behaviour (bark, run, eat, etc). Behaviour is changed through "methods" (functions in simple words) that make changes to attributes.

## OO concepts
What makes OO programming powerful is its ability to do the following:
* Inheritence
* Polymorphism
* Encapsulation
* Abstraction

In procedural programming, we simply create variables and change them when required. However in OO programming, we can literally simulate real world objects. Encapsulation is achieved by creating a specific class for an entity, for example dog. Objects of this class are then created, which are nothing but instances of the class. Each object has its own attribute values.

Another extremely useful concept is that of inheritance. The idea is that a class can inherit attributes and behaviour from a base class. For example, while creating a game, we have a player and enemy. We can create a base class called person, and give it attributes like name, age, gender, etc. Person's behaviour can be walk and jump. A player and enemy can then inherit these "qualities" from person, and can have added qualities like kill, score, eat, etc.

This helps in reusing code and making you rcode structure much more clean. Data hiding is another cool feature. In OO, we have the notion of private and public attributes. Private attributes can be accessed and modified only by methods of that particular class, while public data can be modified from anywhere in the program (within scope obviously).

## What next?
Pick an OO language, and build a basic terminal based game to illustrate these concepts.
