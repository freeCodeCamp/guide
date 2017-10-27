/// Rust's immutability system is something 
/// that you don't commonly see in many programming languages. Let's
/// take a closer look at some of the conventions on how it is utilized
/// and why it exists.

fn main(){
    
    /// Variable bindings are immutable by default. This means
    /// that you cannot change the value of a variable once it has been
    /// assigned. 
    
    let a: i32 = 5;
    let b: i32 = 7;
    //a = b;  // ERROR: re-assignment of immutable variable

    /// Why does Rust do something like this? This really does go back
    /// to one of Rust's core features: type safety. Implementing default
    /// immutability does enforce the C/C++ idea that if you don't want to mutate
    /// the contents of an assignment, than might as well leave it as a const.
    /// Of course, Rust does this implicitly, WITHOUT the need of a keyword.
    /// Even the most vigilant of programmers may still run into problems when 
    /// building complex applications, and it is a great idea to be wary of
    /// your variables before you accidentally overwrite it with some other data.
    
    /// With that said, what if you DO need to reassign your variables? Well,
    /// Rust supports the `mut` keyword.
    
    let mut can_change: &str = "Finally! Free of immutability!";
    
    /// Now do keep in mind that Rust's compiler is very mindful of what you
    /// doing with your variables, and may throw warnings like this:
    ///
    ///     warning: unused variable: `a`
    ///
    /// Better yet, if you decided to pass the `mut` keyword to a variable
    /// doesn't actually mutate it's own data within your code, there is
    /// no need to declare it `mut`, right? Rust's compiler __ALSO__ throws
    /// that out.
    ///
    ///    warning: variable does not need to be mutable
    ///
    /// Of course, Rust does provide the option of disabling 
    /// warnings about creating unused variables through an __attribute__.
    /// There are many different attributes you can implement, and they all
    /// have their own effects on succeeding code that you write.
    
    
    #[allow(unused_variables)]
    let dont_use_me = "seriously, don't ever use me!";
    
    /// Now, if you notice, the `unused_variables` lint disappear.
    /// You can often notice different types of lint like `#[warn(unused_variables)]`
    /// popup when you write Rust code. Note that it is recommended for you 
    /// remove any code that is being unused, because it will just be simply you
    /// giving more work to the compiler to create that variable, and eventually put
    /// it out of scope.
    
    /// Let's take a look at some more of Rust's immutability features.
    
    /// While I haven't introduced the concept of ownership and borrowing
    /// yet, I think this example is still understandable.
        
    fn callback(s: &String) -> &String {
        s.push_str(" added on!");
        // return isn't commonly used syntax, but I'm doing it for the sake
        // of the example
        return s; 
    }
    
    let s = String::from("Hello, I'm ");
    callback(&s);
    
    println!("{}", s);
    
    /// Try compiling this code, and you will see what is wrong.
    ///
    ///     error: cannot borrow immutable borrowed content `*s` as mutable
    ///
    /// Interesting. In this example, we declared an immutable String, `s`,
    /// and attempted to append some text to it through a function called
    /// `callback()`. This is an interesting function, since rather than taking
    /// a String type, its taking a *reference* to the String. This is a great
    /// and simple example of Rust's borrowship system. `s` is the owner of the
    /// string "Hello, I'm", and is allowing `callback()` to *borrow* it through
    /// a reference. Now since it is in the possession of `callback()`, it can do what
    /// it wants to the variable, but at the end of the function scope, the 
    /// variable is returned back to `s`. 
    
    /// However, the problem with the code above is that `callback()` is 
    /// attempting to borrow and mutate a variable is that *immutable*!
    /// Let's tweak this code a little bit.
    
    fn callback(s: &mut String) -> &String {
        s.push_str(" added on!");
        return s;
    }
    
    let mut s = String::from("Hello, I'm ");
    callback(&s);
    
    println!("{}", s);
    
    /// Much better. Lesson here? References share the same mutability
    /// as their variable. 
    
    /// Let's take a look at another example example.
    
    let mut borrow_me = 4;
    
    let ill_take_it = &mut borrow_me;
    let me_too = &mut borrow_me;
    
    /// If you recognize something similar to this in C/C++, it is a data race.
    /// In this case, two "pointers" have access to `borrow_me`, and can lead to
    /// catastrophic results, especially when both attempt to modify that data.
    
    /// Of course, scopes save the day. Think of scopes as memory roadblocks,
    /// that reminds your code (at a lower-level abstraction, of course) to
    /// to free and/or give back any data so that the program may finish execution,
    /// continue execution until completion.
    
    let mut borrow_me = 4;
    {
        let mut tmp = 5;
        
        let mut ill_take_it = &mut borrow_me;
        ill_take_it = &mut tmp; // yikes, MORE borrowing??
        
        println!("{}", ill_take_it); //=> 5
    } // say bye to ill_take_it!

    let me_too = &mut borrow_me;
    println!("{}", me_too); //=> reverts back to 4
    
    /// Interesting, right?
    
    /// Well I won't be covering owernship and borrowing and lifetimes
    /// too much in this snippet. Still, I think it is something important
    /// to recognize when writing code in Rust. As a reader,
    /// you might be feeling that Rust's immutability rules are just
    /// handicaps, but I assure you, they aren't. 
        

}