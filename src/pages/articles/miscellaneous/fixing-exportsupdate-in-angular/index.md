---
title: Fixing Exportsupdate In Angular
---
As it turns out, in **thing.controller.js** as well as in any other endpoints you may generate, the _exports.update_ function that is called when you make an _$http.put_ call from your frontend to modify an existing database object is broken. This is a [known issue](https://github.com/DaftMonk/generator-angular-fullstack/issues/310), and can be fixed by changing the following line:

    // Updates an existing thing in the DB.
    exports.update = function(req, res) { 
    ...    
        var updated = _.extend(thing, req.body); 
        // change _.merge to _.extend
    ... 
     };