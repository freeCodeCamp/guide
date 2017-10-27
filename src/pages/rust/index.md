---
title: Rust
---
## Rust

Rust is a systems programming language focused on three goals: safety, speed, and concurrency. It maintains these goals without having a garbage collector, making it a useful language for a number of use cases other languages aren’t good at: embedding in other languages, programs with specific space and time requirements, and writing low-level code, like device drivers and operating systems. 

For more information head to <a href='https://www.rust-lang.org' target='_blank' rel='nofollow'>Rust's Homepage</a>.
#How Rust Compares to Other Programming Languages
##More like C++ and Go, less like Node and Ruby
While Rust is a general purpose language, you could write your next web app in Rust, but you wouldn’t be best experiencing what it has to offer. Rust is a low-level language, best suited for systems, embedded, and other performance critical code. While it is conceivable that one day people will be writing the latest 3D video games in Rust — an area where high performance has historically been critical — it is unlikely ever to have a web framework that will go toe-to-toe with Ruby on Rails.

###*Safer than C/C++*
The biggest — and some would say most vital — difference between Rust and C++ is the emphasis on writing safe code.

With “safe code,” objects are managed by the programming language from the beginning to end. The developer doesn’t do any pointer arithmetic or manage memory, as can be necessary in C or C++ programs.

For a given object the proper amount of memory is promised to be allocated — or, reserved — for the object. When accessing this object, it is impossible to accidentally access a memory location that is out of bounds. And when its job is done, the object will automatically be deallocated by the system, by which I mean the programmer will not have to manually “free” or unreserve the memory used by that object.

With unmanaged code, not only is it harder to write code that is correct and bug-free, but leaves code far more vulnerable to security threats. A particularly common threat is a buffer overflow, where a user can enter more information than can be contained within the program’s allotted memory space, allowing a malicious user to modify memory in parts of the system not under direct control of the code.

While dangerous, unsafe code can on occasion be very useful in achieving performance gains. Rust gives programmers the best of both worlds by allowing you to write unsafe code, but defaulting to safe code. In comparison, unsafe code is the default in C and C++; you must explicitly opt-in to unsafe code in Rust with the unsafe keyword.
#More Sophisticated than Go
Go is another modern language that aims to allow programmers to write low-level code that is memory safe, and has the performance characteristics of a low-level language. Additional goals of the Go programming language include powerful concurrency support through Go’s channels construct, and simplicity.  But Go is a bit like Node.js, in asynchronous code is a first-class citizen of the language, and you can’t really ignore concurrency when writing Go code.

While Rust is also great at concurrent programming, it’s not the primary goal of the language. While Rust does not strive to be complex for the sake of complexity, the language does not focus in on simplicity nearly as aggressively as Go does. For example, Go frequently leaves out features considered essential by other languages, such as generic types, to keep in line with its goal of simplicity. Rust, on the other hand, is a fairly complex language and is far more similar to C++.

Rust’s language goal is to enable fast, efficient, and memory safe systems programming; simplicity has never been touted as one of its design fundamentals. Neither approach is fundamentally better, but they are quite different approaches to building a language. Due to this divergence, I imagine most programmers will have a strong preference for one language or the other.

