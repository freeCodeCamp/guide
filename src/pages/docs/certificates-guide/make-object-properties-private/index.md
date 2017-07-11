---
title: "Make Object Properties Private"
parent: "certificates-guide"
---

Objects have their own attributes, called _properties_, and their own functions, called _methods_.

You can use the `this` keyword to reference _public properties and methods_ of the current objects. However, when You need to create private ones so they are not accessible from the outside of the object you just remove the keyword `this` from the object property or method declaration and declare it with `var` so that it is private outside its scope.

    var Bike = function() {
      var speed = 100; // private
      function addUnit(value) { // private
        return value + "KM/H";
      }

      this.getSpeed = function () {  // public
        return addUnit(speed);
      };

    };

## Another example:

    var Cake = function() {

      var loot = 2;
      // Getter to know how much loot you have
      this.getLoot = function() {
        return loot;
      };

      // Setter to change the ammount of loot
      this.setLoot = function(num){
        loot = num;
      };
