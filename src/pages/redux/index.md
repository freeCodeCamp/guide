---
title: Redux
---
## Redux

Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

To better understand what Redux is to React, think of a global variable in a vanilla js. This global variable is accessible to all functions in the JS file. It can be manipulated by all of the functions. Any change to the global variable would be received by all the functions i.e it can said to be the source of truth for all funcions in the JS file. 
Similarly, redux allows to keep/ maintain a central state which allows the developer to use it as the only source of truth allowing better structure.
All the react components could listen to this state tree and update themselves accordingly. This helps immensely since props cannot be changed but states can be changed but states are locally restricted to individual component. Adding redux allows us developers to ditch local state, to a certain extent, and use the redux state tree in it's place which is shared accross all components. In short using redux would only simplify the life of a developer. 

For more information head to <a href='http://redux.js.org/' target='_blank' rel='nofollow'>http://redux.js.org/</a>
