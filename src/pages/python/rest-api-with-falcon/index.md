---
title: REST APIs with Falcon

---


## Introduction

RESTful APIs are a major component of any well-architected stack, and Python happens to have some brilliant frameworks for quickly composing APIs. One of these frameworks is called [Falcon](https://falconframework.org) - and it's great! Essentially a microframework, it ships with a sizable number of advantages:

1. It's fast. Really fast. Check out the benchmarks [here](https://falconframework.org/#sectionBenchmarks).

2. HTTP Resources are defined as classes, with class methods being used for different REST operations on these resources. This helps maintaining a clean codebase.

3. It's quite extensible - check out [this section](https://github.com/falconry/falcon/wiki/Complementary-Packages) on their wiki, to get a feel for it. 

4. It's based on WSGI - the Pythonic standard for web apps - so it works with Python 2.6, 2.7, and 3.3+. And if you need more performance, run it using PyPy!


 