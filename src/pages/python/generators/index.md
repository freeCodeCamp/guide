---
title: Generators
---

A Python generator is a function which returns a generator iterator. Generator iterators are used either by calling the next method on the generator object returned by a generator function, or using the generator object in a for loop. 

Generator iterators are a fast convenient way to create iterator objects without having to also create the object's __iter__ and next methods that are implicitly called when instantiated and iterated over. In a generator function, the 'yield' keyword takes care of creating the __init__ and next methods for us.

class Fib:                                        
    def __init__(self, max):                      
        self.max = max

    def __iter__(self):                          
        self.a = 0
        self.b = 1
        return self

    def next(self):                          
        fib = self.a
        if fib > self.max:
            raise StopIteration                  
        self.a, self.b = self.b, self.a + self.b
        return fib           

>>> for i in Fib(10):
        print i    

def fib(max):
    a, b = 0, 1
    while a < max:
        yield a
        a, b = b, a + b
