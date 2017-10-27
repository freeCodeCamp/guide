
---
title: method_overloading

<html class="client-nojs" lang="en" dir="ltr">
<body class="mediawiki ltr sitedir-ltr mw-hide-empty-elt ns-0 ns-subject page-Java_Programming_Overloading_Methods_and_Constructors rootpage-Java_Programming vector-experimental-print-styles vector-nav-directionality skin-vector action-view">	
</ul>
</td>
</tr>
</table>
<h2><span class="mw-headline" id="Method_overloading">Method overloading</span>
<span class="mw-editsection"><span class="mw-editsection-bracket">
</span>
</span></h2>
<p>In a class, there can be several methods with the same name. However they must have a different <i>signature</i>. The signature of a method is comprised of its name, its parameter types and the order of its parameters. The signature of a method is <b>not</b> comprised of its return type nor its visibility nor the exceptions it may throw. The practice of defining two or more methods within the same class that share the same name but have different parameters is called <i>overloading methods</i>.</p>
<p>Methods with the same name in a class are called <i>overloaded methods</i>. Overloading methods offers no specific benefit to the JVM but it is useful to the programmer to have several methods do the same things but with different parameters. For example, we may have the operation <code>runAroundThe</code> represented as two methods with the same name, but different input parameter types:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Example"  title="Example" width="32" height="32" data-file-width="128" data-file-height="128" /></td>
<td style="background-color:#f0fff0; border-left: 4px solid green; padding-left: 6px;"><span id="code-section-22">
<b>Method overloading.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno">1 </span><span class="kd">public</span> <span class="kt">void</span> <span class="nf">runAroundThe</span><span class="o">(</span><span class="n">Building</span> <span class="n">block</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">2 </span>  <span class="o">...</span>
<span class="lineno">3 </span><span class="o">}</span>
<span class="lineno">4 </span>
<span class="lineno">5 </span><span class="kd">public</span> <span class="kt">void</span> <span class="nf">runAroundThe</span><span class="o">(</span><span class="n">Park</span> <span class="n">park</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">6 </span>  <span class="o">...</span>
<span class="lineno">7 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>One type can be the subclass of the other:</p>
<table style="width: 100%;">
<tr>
<td valign="top">
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Computer code"data-file-width="60" data-file-height="60" /></td>
<td style="background-color:#ffeee0; border-left: 4px solid orange; padding-left: 6px; font-family: Monaco, Consolas, 'Courier New', Courier; font-size:1.0em; line-height:1.5 !important;"><span id="code-listing-10"></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno"> 1 </span><span class="kd">public</span> <span class="kd">class</span> <span class="nc">ClassName</span> <span class="o">{</span>
<span class="lineno"> 2 </span>
<span class="lineno"> 3 </span>  <span class="kd">public</span> <span class="kd">static</span> <span class="kt">void</span> <span class="nf">sayClassName</span><span class="o">(</span><span class="n">Object</span> <span class="n">aObject</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno"> 4 </span>    <span class="n">System</span><span class="o">.</span><span class="na">out</span><span class="o">.</span><span class="na">println</span><span class="o">(</span><span class="s">"Object"</span><span class="o">);</span>
<span class="lineno"> 5 </span>  <span class="o">}</span>
<span class="lineno"> 6 </span>
<span class="lineno"> 7 </span>  <span class="kd">public</span> <span class="kd">static</span> <span class="kt">void</span> <span class="nf">sayClassName</span><span class="o">(</span><span class="n">String</span> <span class="n">aString</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno"> 8 </span>    <span class="n">System</span><span class="o">.</span><span class="na">out</span><span class="o">.</span><span class="na">println</span><span class="o">(</span><span class="s">"String"</span><span class="o">);</span>
<span class="lineno"> 9 </span>  <span class="o">}</span>
<span class="lineno">10 </span>
<span class="lineno">11 </span>  <span class="kd">public</span> <span class="kd">static</span> <span class="kt">void</span> <span class="nf">main</span><span class="o">(</span><span class="n">String</span><span class="o">[]</span> <span class="n">args</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">12 </span><span class="hll">    <span class="n">String</span> <span class="n">aString</span> <span class="o">=</span> <span class="k">new</span> <span class="n">String</span><span class="o">();</span>
</span><span class="lineno">13 </span><span class="hll">    <span class="n">sayClassName</span><span class="o">(</span><span class="n">aString</span><span class="o">);</span>
</span><span class="lineno">14 </span>
<span class="lineno">15 </span><span class="hll">    <span class="n">Object</span> <span class="n">aObject</span> <span class="o">=</span> <span class="k">new</span> <span class="n">String</span><span class="o">();</span>
</span><span class="lineno">16 </span><span class="hll">    <span class="n">sayClassName</span><span class="o">(</span><span class="n">aObject</span><span class="o">);</span>
</span><span class="lineno">17 </span>  <span class="o">}</span>
<span class="lineno">18 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
</td>
<td valign="top">
<table style="padding:2px; margin:2px;">
<tr valign="top">

</pre></td>
</tr>
</table>
</td>
</tr>
</table>
<p>Although both methods would be fit to call the method with the <code>String</code> parameter, it is the method with the nearest type that will be called instead. To be more accurate, it will call the method whose parameter type is a subclass of the parameter type of the other method. So, <code>aObject</code> will output <code>Object</code>. Beware! The parameter type is defined by the <i>declared</i> type of an object, <b>not</b> its <i>instantiated</i> type!</p>
<p>The following two method definitions are valid</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Example" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/32px-Nuvola_apps_edu_miscellaneous.svg.png" title="Example" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/48px-Nuvola_apps_edu_miscellaneous.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/64px-Nuvola_apps_edu_miscellaneous.svg.png 2x" data-file-width="128" data-file-height="128" /></td>
<td style="background-color:#f0fff0; border-left: 4px solid green; padding-left: 6px;"><span id="code-section-23">Method overloading with the type order.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno">1 </span><span class="kd">public</span> <span class="kt">void</span> <span class="nf">logIt</span><span class="o">(</span><span class="n">String</span> <span class="n">param</span><span class="o">,</span> <span class="n">Error</span> <span class="n">err</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">2 </span>  <span class="o">...</span>
<span class="lineno">3 </span><span class="o">}</span>
<span class="lineno">4 </span>
<span class="lineno">5 </span><span class="kd">public</span> <span class="kt">void</span> <span class="nf">logIt</span><span class="o">(</span><span class="n">Error</span> <span class="n">err</span><span class="o">,</span> <span class="n">String</span> <span class="n">param</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">6 </span>  <span class="o">...</span>
<span class="lineno">7 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>because the type order is different. If both input parameters were type String, that would be a problem since the compiler would not be able to distinguish between the two:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td><a href="/wiki/File:Nuvola_apps_important.svg" class="image" title="Warning"><img alt="Warning" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/32px-Nuvola_apps_important.svg.png" width="32" height="27" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/48px-Nuvola_apps_important.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/64px-Nuvola_apps_important.svg.png 2x" data-file-width="600" data-file-height="500" /></a></td>
<td style="background-color:#fff0f0; border-left: 4px solid red; padding-left: 6px;"><span id="code-section-24" style="color: red;"><b> Bad method overloading.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno">1 </span><span class="kd">public</span> <span class="kt">void</span> <span class="nf">logIt</span><span class="o">(</span><span class="n">String</span> <span class="n">param</span><span class="o">,</span> <span class="n">String</span> <span class="n">err</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">2 </span>  <span class="o">...</span>
<span class="lineno">3 </span><span class="o">}</span>
<span class="lineno">4 </span>
<span class="lineno">5 </span><span class="kd">public</span> <span class="kt">void</span> <span class="nf">logIt</span><span class="o">(</span><span class="n">String</span> <span class="n">err</span><span class="o">,</span> <span class="n">String</span> <span class="n">param</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">6 </span>  <span class="o">...</span>
<span class="lineno">7 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>The compiler would give an error for the following method definitions as well:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td><a href="/wiki/File:Nuvola_apps_important.svg" class="image" title="Warning"><img alt="Warning" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/32px-Nuvola_apps_important.svg.png" width="32" height="27" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/48px-Nuvola_apps_important.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/64px-Nuvola_apps_important.svg.png 2x" data-file-width="600" data-file-height="500" /></a></td>
<td style="background-color:#fff0f0; border-left: 4px solid red; padding-left: 6px;"><span id="code-section-25" style="color: red;"><b>Another bad method overloading.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno">1 </span><span class="kd">public</span> <span class="kt">void</span> <span class="nf">logIt</span><span class="o">(</span><span class="n">String</span> <span class="n">param</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">2 </span>  <span class="o">...</span>
<span class="lineno">3 </span><span class="o">}</span>
<span class="lineno">4 </span>
<span class="lineno">5 </span><span class="kd">public</span> <span class="n">String</span> <span class="nf">logIt</span><span class="o">(</span><span class="n">String</span> <span class="n">param</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">6 </span>  <span class="n">String</span> <span class="n">retValue</span><span class="o">;</span>
<span class="lineno">7 </span>  <span class="o">...</span>
<span class="lineno">8 </span>  <span class="k">return</span> <span class="n">retValue</span><span class="o">;</span>
<span class="lineno">9 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>Note, the return type is not part of the unique signature. Why not? The reason is that a method can be called without assigning its return value to a variable. This feature came from C and C++. So for the call:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td><a href="/wiki/File:Nuvola_apps_important.svg" class="image" title="Warning"><img alt="Warning" src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/32px-Nuvola_apps_important.svg.png" width="32" height="27" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/48px-Nuvola_apps_important.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuvola_apps_important.svg/64px-Nuvola_apps_important.svg.png 2x" data-file-width="600" data-file-height="500" /></a></td>
<td style="background-color:#fff0f0; border-left: 4px solid red; padding-left: 6px;"><span id="code-section-26" style="color: red;"><b> Ambiguous method call.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno">1 </span><span class="n">logIt</span><span class="o">(</span><span class="n">msg</span><span class="o">);</span>
</pre></div>
</td>
</tr>
</table>
<p>the compiler would not know which method to call. It is also the case for the thrown exceptions.</p>
<div class="collapsible" style="width:100%; clear:both; border:none;">
<div class="title" style="background:transparent; text-align:left; background:#cedff2;border:1px solid lightgrey;">Test your knowledge</div>
<div class="body" style="background:transparent; text-align:left; background:#e7eff9;border:solid 1px lightgrey;padding:8px;">
<p><b>Question...</b>: Which methods of the <code>Sample code</code> class will cause compile errors?</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Computer code" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/32px-Gnome-settings-accessibility-keyboard.svg.png" title="Computer code" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/48px-Gnome-settings-accessibility-keyboard.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/64px-Gnome-settings-accessibility-keyboard.svg.png 2x" data-file-width="60" data-file-height="60" /></td>
<td style="background-color:#ffeee0; border-left: 4px solid orange; padding-left: 6px; font-family: Monaco, Consolas, 'Courier New', Courier; font-size:1.0em; line-height:1.5 !important;"><b>Question6.java</b>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno"> 1 </span><span class="kd">public</span> <span class="kd">class</span> <span class="nc">Sample code</span> <span class="o">{</span>
<span class="lineno"> 2 </span> 
<span class="lineno"> 3 </span>  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">example1</span><span class="o">()</span> <span class="o">{</span>
<span class="lineno"> 4 </span>  <span class="o">}</span>
<span class="lineno"> 5 </span>
<span class="lineno"> 6 </span>  <span class="kd">public</span> <span class="kt">int</span> <span class="nf">example1</span><span class="o">()</span> <span class="o">{</span>
<span class="lineno"> 7 </span>  <span class="o">}</span>
<span class="lineno"> 8 </span>
<span class="lineno"> 9 </span>  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">example2</span><span class="o">(</span><span class="kt">int</span> <span class="n">x</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">10 </span>  <span class="o">}</span>
<span class="lineno">11 </span>
<span class="lineno">12 </span>  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">example2</span><span class="o">(</span><span class="kt">int</span> <span class="n">y</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">13 </span>  <span class="o">}</span>
<span class="lineno">14 </span>
<span class="lineno">15 </span>  <span class="kd">private</span> <span class="kt">void</span> <span class="nf">example3</span><span class="o">()</span> <span class="o">{</span>
<span class="lineno">16 </span>  <span class="o">}</span>
<span class="lineno">17 </span>
<span class="lineno">18 </span>  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">example3</span><span class="o">()</span> <span class="o">{</span>
<span class="lineno">19 </span>  <span class="o">}</span>
<span class="lineno">20 </span>
<span class="lineno">21 </span>  <span class="kd">public</span> <span class="n">String</span> <span class="nf">example4</span><span class="o">(</span><span class="kt">int</span> <span class="n">x</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">22 </span>    <span class="k">return</span> <span class="kc">null</span><span class="o">;</span>
<span class="lineno">23 </span>  <span class="o">}</span>
<span class="lineno">24 </span>
<span class="lineno">25 </span>  <span class="kd">public</span> <span class="n">String</span> <span class="nf">example4</span><span class="o">()</span> <span class="o">{</span>
<span class="lineno">26 </span>    <span class="k">return</span> <span class="kc">null</span><span class="o">;</span>
<span class="lineno">27 </span>  <span class="o">}</span>
<span class="lineno">28 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<div class="collapsible" style="width:100%; clear:both; border:none;">
<div class="title" style="background:transparent; text-align:left; background:#cedff2;border:1px solid lightgrey;">Answer</div>
<div class="body" style="background:transparent; text-align:left; background:#e7eff9;border:solid 1px lightgrey;padding:8px;">
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Computer code" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/32px-Gnome-settings-accessibility-keyboard.svg.png" title="Computer code" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/48px-Gnome-settings-accessibility-keyboard.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/64px-Gnome-settings-accessibility-keyboard.svg.png 2x" data-file-width="60" data-file-height="60" /></td>
<td style="background-color:#ffeee0; border-left: 4px solid orange; padding-left: 6px; font-family: Monaco, Consolas, 'Courier New', Courier; font-size:1.0em; line-height:1.5 !important;"><b>Question6.java</b>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno"> 1 </span><span class="kd">public</span> <span class="kd">class</span> <span class="nc">Question6</span> <span class="o">{</span>
<span class="lineno"> 2 </span> 
<span class="lineno"> 3 </span><span class="hll">  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">example1</span><span class="o">()</span> <span class="o">{</span>
</span><span class="lineno"> 4 </span>  <span class="o">}</span>
<span class="lineno"> 5 </span>
<span class="lineno"> 6 </span><span class="hll">  <span class="kd">public</span> <span class="kt">int</span> <span class="nf">example1</span><span class="o">()</span> <span class="o">{</span>
</span><span class="lineno"> 7 </span>  <span class="o">}</span>
<span class="lineno"> 8 </span>
<span class="lineno"> 9 </span><span class="hll">  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">example2</span><span class="o">(</span><span class="kt">int</span> <span class="n">x</span><span class="o">)</span> <span class="o">{</span>
</span><span class="lineno">10 </span>  <span class="o">}</span>
<span class="lineno">11 </span>
<span class="lineno">12 </span><span class="hll">  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">example2</span><span class="o">(</span><span class="kt">int</span> <span class="n">y</span><span class="o">)</span> <span class="o">{</span>
</span><span class="lineno">13 </span>  <span class="o">}</span>
<span class="lineno">14 </span>
<span class="lineno">15 </span><span class="hll">  <span class="kd">private</span> <span class="kt">void</span> <span class="nf">example3</span><span class="o">()</span> <span class="o">{</span>
</span><span class="lineno">16 </span>  <span class="o">}</span>
<span class="lineno">17 </span>
<span class="lineno">18 </span><span class="hll">  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">example3</span><span class="o">()</span> <span class="o">{</span>
</span><span class="lineno">19 </span>  <span class="o">}</span>
<span class="lineno">20 </span>
<span class="lineno">21 </span>  <span class="kd">public</span> <span class="n">String</span> <span class="nf">example4</span><span class="o">(</span><span class="kt">int</span> <span class="n">x</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">22 </span>    <span class="k">return</span> <span class="kc">null</span><span class="o">;</span>
<span class="lineno">23 </span>  <span class="o">}</span>
<span class="lineno">24 </span>
<span class="lineno">25 </span>  <span class="kd">public</span> <span class="n">String</span> <span class="nf">example4</span><span class="o">()</span> <span class="o">{</span>
<span class="lineno">26 </span>    <span class="k">return</span> <span class="kc">null</span><span class="o">;</span>
<span class="lineno">27 </span>  <span class="o">}</span>
<span class="lineno">28 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>The <code>example1</code>, <code>example2</code> and <code>example3</code> methods will cause compile errors. The <code>example1</code> methods cannot co-exist because they have the same signature (remember, return type is <b>not</b> part of the signature). The <code>example2</code> methods cannot co-exist because the names of the parameters are not part of the signature. The <code>example3</code> methods cannot co-exist because the visibility of the methods are not part of the signature. The <code>example4</code> methods can co-exist, because they have different method signatures.</p>
</div>
</div>
</div>
</div>
<h2><span class="mw-headline" id="Variable_Argument">Variable Argument</span>
<span class="mw-editsection"><span class="mw-editsection-bracket"></span></span></h2>
<p>Instead of overloading, you can use a dynamic number of arguments. After the last parameter, you can pass optional unlimited parameters of the same type. These parameters are defined by adding a last parameter and adding <code>...</code> after its type. The dynamic arguments will be received as an array:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Example" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/32px-Nuvola_apps_edu_miscellaneous.svg.png" title="Example" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/48px-Nuvola_apps_edu_miscellaneous.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/64px-Nuvola_apps_edu_miscellaneous.svg.png 2x" data-file-width="128" data-file-height="128" /></td>
<td style="background-color:#f0fff0; border-left: 4px solid green; padding-left: 6px;"><span id="code-section-27"><b>Variable argument.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno"> 1 </span><span class="hll">  <span class="kd">public</span> <span class="kt">void</span> <span class="nf">registerPersonInAgenda</span><span class="o">(</span><span class="n">String</span> <span class="n">firstName</span><span class="o">,</span> <span class="n">String</span> <span class="n">lastName</span><span class="o">,</span> <span class="n">Date</span><span class="o">...</span> <span class="n">meeting</span><span class="o">)</span> <span class="o">{</span>
</span><span class="lineno"> 2 </span>    <span class="n">String</span><span class="o">[]</span> <span class="n">person</span> <span class="o">=</span> <span class="o">{</span><span class="n">firstName</span><span class="o">,</span> <span class="n">lastName</span><span class="o">};</span>
<span class="lineno"> 3 </span>    <span class="n">lastPosition</span> <span class="o">=</span> <span class="n">lastPosition</span> <span class="o">+</span> <span class="mi">1</span><span class="o">;</span>
<span class="lineno"> 4 </span>    <span class="n">contactArray</span><span class="o">[</span><span class="n">lastPosition</span><span class="o">]</span> <span class="o">=</span> <span class="n">person</span><span class="o">;</span>
<span class="lineno"> 5 </span>
<span class="lineno"> 6 </span><span class="hll">    <span class="k">if</span> <span class="o">(</span><span class="n">meeting</span><span class="o">.</span><span class="na">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="o">)</span> <span class="o">{</span>
</span><span class="lineno"> 7 </span><span class="hll">      <span class="n">Date</span><span class="o">[]</span> <span class="n">temporaryMeetings</span> <span class="o">=</span> <span class="n">registeredMeetings</span><span class="o">.</span><span class="na">length</span> <span class="o">+</span> <span class="n">meeting</span><span class="o">.</span><span class="na">length</span><span class="o">;</span>
</span><span class="lineno"> 8 </span><span class="hll">      <span class="k">for</span> <span class="o">(</span><span class="n">i</span> <span class="o">=</span> <span class="mi">0</span><span class="o">;</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="n">registeredMeetings</span><span class="o">.</span><span class="na">length</span><span class="o">;</span> <span class="n">i</span><span class="o">++)</span> <span class="o">{</span>
</span><span class="lineno"> 9 </span><span class="hll">        <span class="n">temporaryMeetings</span><span class="o">[</span><span class="n">i</span><span class="o">]</span> <span class="o">=</span> <span class="n">registeredMeetings</span><span class="o">[</span><span class="n">i</span><span class="o">];</span>
</span><span class="lineno">10 </span><span class="hll">      <span class="o">}</span>
</span><span class="lineno">11 </span><span class="hll">      <span class="k">for</span> <span class="o">(</span><span class="n">i</span> <span class="o">=</span> <span class="mi">0</span><span class="o">;</span> <span class="n">i</span> <span class="o">&lt;</span> <span class="n">meeting</span><span class="o">.</span><span class="na">length</span><span class="o">;</span> <span class="n">i</span><span class="o">++)</span> <span class="o">{</span>
</span><span class="lineno">12 </span><span class="hll">        <span class="n">temporaryMeetings</span><span class="o">[</span><span class="n">registeredMeetings</span><span class="o">.</span><span class="na">length</span> <span class="o">+</span> <span class="n">i</span><span class="o">]</span> <span class="o">=</span> <span class="n">meeting</span><span class="o">[</span><span class="n">i</span><span class="o">];</span>
</span><span class="lineno">13 </span><span class="hll">      <span class="o">}</span>
</span><span class="lineno">14 </span><span class="hll">      <span class="n">registeredMeetings</span> <span class="o">=</span> <span class="n">temporaryMeetings</span><span class="o">;</span>
</span><span class="lineno">15 </span><span class="hll">    <span class="o">}</span>
</span><span class="lineno">16 </span>  <span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>The above method can be called with a dynamic number of arguments, for example:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Example" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/32px-Nuvola_apps_edu_miscellaneous.svg.png" title="Example" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/48px-Nuvola_apps_edu_miscellaneous.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/64px-Nuvola_apps_edu_miscellaneous.svg.png 2x" data-file-width="128" data-file-height="128" /></td>
<td style="background-color:#f0fff0; border-left: 4px solid green; padding-left: 6px;"><span id="code-section-27"><b>Constructor calls.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno">1 </span><span class="n">registerPersonInAgenda</span><span class="o">(</span><span class="s">"John"</span><span class="o">,</span> <span class="s">"Doe"</span><span class="o">);</span>
<span class="lineno">2 </span><span class="n">registerPersonInAgenda</span><span class="o">(</span><span class="s">"Mark"</span><span class="o">,</span> <span class="s">"Lee"</span><span class="o">,</span> <span class="k">new</span> <span class="n">Date</span><span class="o">(),</span> <span class="k">new</span> <span class="n">Date</span><span class="o">());</span>
</pre></div>
</td>
</tr>
</table>
<p>This feature was not available before Java 1.5 .</p>
<h2><span class="mw-headline" id="Constructor_overloading">Constructor overloading</span>
<span class="mw-editsection"><span class="mw-editsection-bracket"></span></span></h2>
<p>The constructor can be overloaded. You can define more than one constructor with different parameters. For example:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Computer code" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/32px-Gnome-settings-accessibility-keyboard.svg.png" title="Computer code" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/48px-Gnome-settings-accessibility-keyboard.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/64px-Gnome-settings-accessibility-keyboard.svg.png 2x" data-file-width="60" data-file-height="60" /></td>
<td style="background-color:#ffeee0; border-left: 4px solid orange; padding-left: 6px; font-family: Monaco, Consolas, 'Courier New', Courier; font-size:1.0em; line-height:1.5 !important;"><span id="code-listing-12"><b>Constructors.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno"> 1 </span><span class="kd">public</span> <span class="kd">class</span> <span class="nc">MyClass</span> <span class="o">{</span>
<span class="lineno"> 2 </span>
<span class="lineno"> 3 </span>  <span class="kd">private</span> <span class="n">String</span> <span class="n">memberField</span><span class="o">;</span>
<span class="lineno"> 4 </span> 
<span class="lineno"> 5 </span>  <span class="cm">/**</span>
<span class="lineno"> 6 </span><span class="cm">   * MyClass Constructor, there is no input parameter</span>
<span class="lineno"> 7 </span><span class="cm">   */</span>
<span class="lineno"> 8 </span><span class="hll">  <span class="kd">public</span> <span class="nf">MyClass</span><span class="o">()</span> <span class="o">{</span>
</span><span class="lineno"> 9 </span><span class="hll">     <span class="o">...</span>
</span><span class="lineno">10 </span><span class="hll">  <span class="o">}</span>
</span><span class="lineno">11 </span> 
<span class="lineno">12 </span>  <span class="cm">/**</span>
<span class="lineno">13 </span><span class="cm">   * MyClass Constructor, there is one input parameter</span>
<span class="lineno">14 </span><span class="cm">   */</span>
<span class="lineno">15 </span><span class="hll">   <span class="kd">public</span> <span class="nf">MyClass</span><span class="o">(</span><span class="n">String</span> <span class="n">param1</span><span class="o">)</span> <span class="o">{</span>
</span><span class="lineno">16 </span><span class="hll">     <span class="n">memberField</span> <span class="o">=</span> <span class="n">param1</span><span class="o">;</span>
</span><span class="lineno">17 </span><span class="hll">     <span class="o">...</span>
</span><span class="lineno">18 </span><span class="hll">  <span class="o">}</span>
</span><span class="lineno">19 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>In the <a href="#code-listing-12"></a>, we defined two constructors, one with no input parameter, and one with one input parameter. You may ask which constructor will be called. Its depends how the object is created with the <code><a href="/wiki/Java_Programming/Keywords/new" title="Java Programming/Keywords/new"><font style="color:DodgerBlue4; text-decoration: none; font-weight: bold;">new</font></a></code> keyword. See below:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Example" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/32px-Nuvola_apps_edu_miscellaneous.svg.png" title="Example" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/48px-Nuvola_apps_edu_miscellaneous.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/64px-Nuvola_apps_edu_miscellaneous.svg.png 2x" data-file-width="128" data-file-height="128" /></td>
<td style="background-color:#f0fff0; border-left: 4px solid green; padding-left: 6px;"><span id="code-section-29"><b>Constructor calls.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno">1 </span><span class="c1">// The constructor with no input parameter will be called</span>
<span class="lineno">2 </span><span class="n">MyClass</span> <span class="n">obj1</span> <span class="o">=</span> <span class="k">new</span> <span class="n">MyClass</span><span class="o">();</span>
<span class="lineno">3 </span>
<span class="lineno">4 </span><span class="c1">// The constructor with one input param. will be called</span>
<span class="lineno">5 </span><span class="n">MyClass</span> <span class="n">obj2</span> <span class="o">=</span> <span class="k">new</span> <span class="n">MyClass</span><span class="o">(</span><span class="s">"Init Value"</span><span class="o">);</span>
</pre></div>
</td>
</tr>
</table>
<p>In the <a href="#code-section-29"></a>, we created two objects from the same class, or we can also say that <code>obj1</code> and <code>obj2</code> both have the same type. The difference between the two is that in the first one the <code>memberField</code> field is not initialized, in the second one that is initialized to <code>"Init Value"</code>. A constructor may also be called from another constructor, see below:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Computer code" src="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/32px-Gnome-settings-accessibility-keyboard.svg.png" title="Computer code" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/48px-Gnome-settings-accessibility-keyboard.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gnome-settings-accessibility-keyboard.svg/64px-Gnome-settings-accessibility-keyboard.svg.png 2x" data-file-width="60" data-file-height="60" /></td>
<td style="background-color:#ffeee0; border-left: 4px solid orange; padding-left: 6px; font-family: Monaco, Consolas, 'Courier New', Courier; font-size:1.0em; line-height:1.5 !important;"><span id="code-listing-13"><b>Constructor pooling.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno"> 1 </span><span class="kd">public</span> <span class="kd">class</span> <span class="nc">MyClass</span> <span class="o">{</span>
<span class="lineno"> 2 </span>
<span class="lineno"> 3 </span>  <span class="kd">private</span> <span class="n">String</span> <span class="n">memberField</span><span class="o">;</span>
<span class="lineno"> 4 </span> 
<span class="lineno"> 5 </span>  <span class="cm">/**</span>
<span class="lineno"> 6 </span><span class="cm">   * MyClass Constructor, there is no input parameter</span>
<span class="lineno"> 7 </span><span class="cm">   */</span>
<span class="lineno"> 8 </span>  <span class="kd">public</span> <span class="nf">MyClass</span><span class="o">()</span> <span class="o">{</span>
<span class="lineno"> 9 </span><span class="hll">    <span class="n">MyClass</span><span class="o">(</span><span class="s">"Default Value"</span><span class="o">);</span>
</span><span class="lineno">10 </span>  <span class="o">}</span>
<span class="lineno">11 </span> 
<span class="lineno">12 </span>  <span class="cm">/**</span>
<span class="lineno">13 </span><span class="cm">   * MyClass Constructor, there is one input parameter</span>
<span class="lineno">14 </span><span class="cm">   */</span>
<span class="lineno">15 </span>  <span class="kd">public</span> <span class="nf">MyClass</span><span class="o">(</span><span class="n">String</span> <span class="n">param1</span><span class="o">)</span> <span class="o">{</span>
<span class="lineno">16 </span>    <span class="n">memberField</span> <span class="o">=</span> <span class="n">param1</span><span class="o">;</span>
<span class="lineno">17 </span>    <span class="o">...</span>
<span class="lineno">18 </span>  <span class="o">}</span>
<span class="lineno">19 </span><span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>In the <a href="#code-listing-13"></a>, the constructor with no input parameter calls the other constructor with the default initial value. This call must be the first instruction of a constructor or else a compiler error will occur. The code gives an option to the user, to create the object with the default value or create the object with a specified value. The first constructor could have been written using the <code><a href="/wiki/Java_Programming/Keywords/this" title="Java Programming/Keywords/this"><font style="color:DodgerBlue4; text-decoration: none; font-weight: bold;">this</font></a></code> keyword as well:</p>
<table style="padding:2px; margin:2px;">
<tr valign="top">
<td style="width:32px;"><img alt="Example" src="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/32px-Nuvola_apps_edu_miscellaneous.svg.png" title="Example" width="32" height="32" srcset="//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/48px-Nuvola_apps_edu_miscellaneous.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Nuvola_apps_edu_miscellaneous.svg/64px-Nuvola_apps_edu_miscellaneous.svg.png 2x" data-file-width="128" data-file-height="128" /></td>
<td style="background-color:#f0fff0; border-left: 4px solid green; padding-left: 6px;"><span id="code-section-30"><b> Another constructor pooling.</b></span>
<div class="mw-highlight mw-content-ltr" dir="ltr">
<pre>
<span class="lineno">1 </span>  <span class="kd">public</span> <span class="nf">MyClass</span><span class="o">()</span> <span class="o">{</span>
<span class="lineno">2 </span><span class="hll">    <span class="k">this</span><span class="o">(</span><span class="s">"Default Value"</span><span class="o">);</span>
</span><span class="lineno">3 </span>  <span class="o">}</span>
</pre></div>
</td>
</tr>
</table>
<p>Such a call reduces the code repetition.</p>
	</body>
</html>
