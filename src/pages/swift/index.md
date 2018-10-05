---
title: Swift
---

![Swift Logo](https://developer.apple.com/assets/elements/icons/swift-playgrounds/swift-playgrounds-64x64_2x.png)

# What is Swift?

Swift is an [open source](https://en.wikipedia.org/wiki/Open-source_software), general-purpose programming language developed by Apple Inc. They describe it as:

> Swift is a powerful and intuitive programming language for macOS, iOS, watchOS and tvOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.<sup>1</sup>

Want to try out Swift right now? [Repl.it](https://repl.it/languages/swift) offers an online Read-Eval-Print loop for Swift. You won't have access to UIKit or other APIs that are commonly used, but give it a shot!

##Libraries, runtime and development

Swift uses the same runtime as the extant Objective-C system, but requires iOS 7 or macOS 10.9 or higher.[54] Swift and Objective-C code can be used in one program, and by extension, C and C++ also. In contrast to C, C++ code cannot be used directly from Swift. An Objective-C or C wrapper must be created between Swift and C++.[55] In the case of Objective-C, Swift has considerable access to the object model, and can be used to subclass, extend and use Objective-C code to provide protocol support.[56] The converse is not true: a Swift class cannot be subclassed in Objective-C.[57]

To aid development of such programs, and the re-use of extant code, Xcode 6 offers a semi-automated system that builds and maintains a bridging header to expose Objective-C code to Swift. This takes the form of an additional header file that simply defines or imports all of the Objective-C symbols that are needed by the project's Swift code. At that point, Swift can refer to the types, functions, and variables declared in those imports as though they were written in Swift. Objective-C code can also use Swift code directly, by importing an automatically maintained header file with Objective-C declarations of the project's Swift symbols. For instance, an Objective-C file in a mixed project called "MyApp" could access Swift classes or functions with the code #import "MyApp-Swift.h". Not all symbols are available through this mechanism, however—use of Swift-specific features like generic types, non-object optional types, sophisticated enums, or even Unicode identifiers may render a symbol inaccessible from Objective-C.[58]

Swift also has limited support for attributes, metadata that is read by the development environment, and is not necessarily part of the compiled code. Like Objective-C, attributes use the @ syntax, but the currently available set is small. One example is the @IBOutlet attribute, which marks a given value in the code as an outlet, available for use within Interface Builder (IB). An outlet is a device that binds the value of the on-screen display to an object in code.


# Version

The latest version is [Swift 4.2](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/RevisionHistory.html), released Sept. 17, 2018. Swift is constantly evolving, and you can expect more changes in the future. It is recommended you use the latest version of Swift when starting a new project.

# Documentation

Swift is heavily documented. Keep in mind that coding Swift involves not just
using the language, but also many APIs. The best way to learn Swift is to make a
project or application, no matter how small!

* [Source Code](https://github.com/apple/swift)

* [Developing iOS Apps (Swift)](https://developer.apple.com/library/content/referencelibrary/GettingStarted/DevelopiOSAppsSwift/): Want to make iOS Apps? This is a great place to start.

* [Language Guide](https://developer.apple.com/library/content/documentation/Swift/Conceptual/Swift_Programming_Language/): Has an overview of just about every feature in Swift. If you get confused when reading someone else's code, this document can help you.

# Want to learn more?

* [RayWenderlich.com](https://www.raywenderlich.com/) : Has many great tutorials for Swift and iOS development.

### Sources

1. "Swift 4 - The powerful programming language that is also easy to learn." Apple, [developer.apple.com/swift](https://developer.apple.com/swift/), Accessed 31 Oct. 2017.

