---
title: Abstract classes and methods
---
<!-- Abstract Methods and Classes -->
<p>An <i>abstract class</i> is a class that is declared <code>abstract</code>&#151;it may or may not include abstract methods. Abstract classes cannot be instantiated, but they can be subclassed.</p>
<p>An <i>abstract method</i> is a method that is declared without an implementation (without braces, and followed by a semicolon), like this:</p>
<div class="codeblock"><pre>
abstract void moveTo(double deltaX, double deltaY);
</pre></div>
<p>If a class includes abstract methods, then the class itself <i>must</i> be declared <code>abstract</code>, as in:</p>
<div class="codeblock"><pre>
public abstract class GraphicObject {
   // declare fields
   // declare nonabstract methods
   abstract void draw();
}
</pre></div>
<p>When an abstract class is subclassed, the subclass usually provides implementations for all of the abstract methods in its parent class. However, if it does not, then the subclass must also be declared <code>abstract</code>.</p>
<div class="note"><hr /><strong>Note:</strong>&nbsp;Methods in an <i>interface</i> (see the 
<a class="TutorialLink" target="_top" href="../IandI/createinterface.html">Interfaces</a> section) that are not declared as default or static are <i>implicitly</i> abstract, so the <code>abstract</code> modifier is not used with interface methods. (It can be used, but it is unnecessary.)
<hr /></div>


<h2><a name="abstact_classes_compared_to_interfaces">Abstract Classes Compared to Interfaces</a></h2>

<p>Abstract classes are similar to interfaces. You cannot instantiate them, and they may contain a mix of methods declared with or without an implementation. However, with abstract classes, you can declare fields that are not static and final, and define public, protected, and private concrete methods. With interfaces, all fields are automatically public, static, and final, and all methods that you declare or define (as default methods) are public. In addition, you can extend only one class, whether or not it is abstract, whereas you can implement any number of interfaces.</p>

<p>Which should you use, abstract classes or interfaces?</p>

<ul>
  <li>Consider using abstract classes if any of these statements apply to your situation:
    <ul>
      <li>You want to share code among several closely related classes.</li>
      <li>You expect that classes that extend your abstract class have many common methods or fields, or require access modifiers other than public (such as protected and private).</li>
      <li>You want to declare non-static or non-final fields. This enables you to define methods that can access and modify the state of the object to which they belong.</li>
    </ul>
  </li>
  <li>Consider using interfaces if any of these statements apply to your situation:
    <ul>
      <li>You expect that unrelated classes would implement your interface. For example, the interfaces
<a class="APILink" target="_blank" href="https://docs.oracle.com/javase/8/docs/api/java/lang/Comparable.html"><code>Comparable</code></a> and
<a class="APILink" target="_blank" href="https://docs.oracle.com/javase/8/docs/api/java/lang/Cloneable.html"><code>Cloneable</code></a> are implemented by many unrelated classes.</li>
      <li>You want to specify the behavior of a particular data type, but not concerned about who implements its behavior.</li>
      <li>You want to take advantage of multiple inheritance of type.</li>
    </ul>
  </li>
</ul>

<p>An example of an abstract class in the JDK is
<a class="APILink" target="_blank" href="https://docs.oracle.com/javase/8/docs/api/java/util/AbstractMap.html"><code>AbstractMap</code></a>, which is part of the Collections Framework. Its subclasses (which include <code>HashMap</code>, <code>TreeMap</code>, and <code>ConcurrentHashMap</code>) share many methods (including <code>get</code>, <code>put</code>, <code>isEmpty</code>, <code>containsKey</code>, and <code>containsValue</code>) that <code>AbstractMap</code> defines.</p>

<p>An example of a class in the JDK that implements several interfaces is 
<a class="APILink" target="_blank" href="https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html"><code>HashMap</code></a>, which implements the interfaces <code>Serializable</code>, <code>Cloneable</code>, and <code>Map&lt;K, V&gt;</code>. By reading this list of interfaces, you can infer that an instance of <code>HashMap</code> (regardless of the developer or company who implemented the class) can be cloned, is serializable (which means that it can be converted into a byte stream; 
see the section
<a class="TutorialLink" target="_top" href="../../jndi/objects/serial.html">Serializable Objects</a>), and has the functionality of a map. In addition, the <code>Map&lt;K, V&gt;</code> interface has been enhanced with many default methods such as <code>merge</code> and <code>forEach</code> that older classes that have implemented this interface do not have to define.</p>

<p>Note that many software libraries use both abstract classes and interfaces; the <code>HashMap</code> class implements several interfaces and also extends the abstract class <code>AbstractMap</code>.</p>

<h2>An Abstract Class Example</h2>
<p>In an object-oriented drawing application, you can draw circles, rectangles, lines, Bezier curves, and many other graphic objects. These objects all have certain states (for example: position, orientation, line color, fill color) and behaviors (for example: moveTo, rotate, resize, draw) in common. Some of these states and behaviors are the same for all graphic objects (for example: position, fill color, and moveTo). Others require different implementations (for example, resize or draw). All <code>GraphicObject</code>s must be able to draw or resize themselves; they just differ in how they do it. This is a perfect situation for an abstract superclass. You can take advantage of the similarities and declare all the graphic objects to inherit from the same abstract parent object (for example, <code>GraphicObject</code>) as shown in 
<span id="figure:classes-graphicObject.gif">the following figure.</span></p>
<center><img src="../../figures/java/classes-graphicObject.gif" width="372" height="80" align="bottom" alt="Classes Rectangle, Line, Bezier, and Circle Inherit from GraphicObject " /></p><p class="FigureCaption">Classes Rectangle, Line, Bezier, and Circle Inherit from GraphicObject</p></center><p>First, you declare an abstract class, <code>GraphicObject</code>, to provide member variables and methods that are wholly shared by all subclasses, such as the current position and the <code>moveTo</code> method. <code>GraphicObject</code> also declares abstract methods for methods, such as <code>draw</code> or <code>resize</code>, that need to be implemented by all subclasses but must be implemented in different ways. The <code>GraphicObject</code> class can look something like this:</p>
<div class="codeblock"><pre>
abstract class GraphicObject {
    int x, y;
    ...
    void moveTo(int newX, int newY) {
        ...
    }
    abstract void draw();
    abstract void resize();
}
</pre></div>
<p>Each nonabstract subclass of <code>GraphicObject</code>, such as <code>Circle</code> and <code>Rectangle</code>, must provide implementations for the <code>draw</code> and <code>resize</code> methods:</p>
<div class="codeblock"><pre>
class Circle extends GraphicObject {
    void draw() {
        ...
    }
    void resize() {
        ...
    }
}
class Rectangle extends GraphicObject {
    void draw() {
        ...
    }
    void resize() {
        ...
    }
}
</pre></div>
<h2>When an Abstract Class Implements an Interface</h2>
<p>In the section on 
<a class="TutorialLink" target="_top" href="../IandI/createinterface.html"><code>Interfaces</code></a>, it was noted that a class that implements an interface must implement <i>all</i> of the interface&#39;s methods. It is possible, however, to define a class that does not implement all of the interface's methods, provided that the class is declared to be <code>abstract</code>. For example,</p>
<div class="codeblock"><pre>
abstract class X implements Y {
  // implements all but one method of Y
}

class XX extends X {
  // implements the remaining method in Y
}
</pre></div>
<p>In this case, class <code>X</code> must be <code>abstract</code> because it does not fully implement <code>Y</code>, but class <code>XX</code> does, in fact, implement <code>Y</code>.</p>
<h2>Class Members</h2>
<p>An abstract class may have <code>static</code> fields and <code>static</code> methods. You can use these static members with a class reference (for example, <code>AbstractClass.staticMethod()</code>) as you would with any other class.</p>
