# Interop

Interop is extraordinarily important if you want your language to succeed!

This is just a historical fact. A huge part of why C++ was so successful was that it was easy to migrate a massive C codebase. If you look at the JVM, you see Scala and Clojure carving out pretty big niches for themselves thanks to their nice interop story with Java. For industrial users, there is no point in having an amazing language with great guarantees if there is no way to slowly introduce it into an existing codebase. It is exactly the same in browsers too.

This section focuses on the major kinds of interop that you need when working in browsers.

How to communicate with external services using JSON.
How to embed Elm programs in existing HTML or React apps.
How to communicate with existing JavaScript code.
Each of these types of interop are guided by the self-imposed constraints that (1) there must be a clear way to introduce Elm gradually into diverse environments and (2) Elm should not have to sacrifice its core design principles. In other words, Elm should be great and it should be possible to use Elm at work.

# Advice on Introducing Elm

The correct path is to first use Elm in a small experiment. If the experiment goes bad, stop it! If it goes great, expand the experiment a bit more. Then just repeat this process until you are using Elm or not! History seems to suggest that there is no realistic way to translate an existing project into a new language all at once. You have to evolve gradually!

Every company I know of that introduced Elm into an existing codebase did it gradually. You need to make sure it is worth it. You probably need to do some pairing or mentorship to get your teammates comfortable. You may even want to use React as a stepping stone if you are on something before that. Basically, anything you can do to minimize risk and make the process feel gradual will improve your odds. Now none of this is as fun as just switching, but it has the great benefit of actually working out in practice.
