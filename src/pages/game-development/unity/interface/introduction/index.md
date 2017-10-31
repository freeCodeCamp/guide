---
title: Unity Interface
---
##  Introduction To The Unity Editor Interface.

Before we get started you need to know a few bits of jargon that are going to be used a lot when working with unity.


Assets: Any resource used in unity is characterized as some type of asset. This means all scripts, models, etc.


GameObjects: GameObjects are a specific type of unity entity used to represent and manipulate any in-game object. This means very obvious things like blocks, enemies, and so forth. However many things may count as game objects besides the obvious, such as invisible controller objects; placeholders that exist purely to hold scripts and as a way for those scripts to be accessed. 


Components: Components are anything that goes on a game object; so scripts, textures, any any special components provided by unity to help in creating a game.


Scenes: Scenes are more of a construct in general game design than one with a specific meaning in unity. In the most abstract terms a scene is a particular collection of game objects that you have set up. A game’s main menu is a scene, as might be a single level. Although it’s also possible to use multiple scenes in a single level, either by breaking the level into parts and loading into new parts of it at certain points, or by loading multiple scenes at the same time.

Next let’s go over the different parts of the unity editor window. Note that 1 and 5 are both part of the toolbar, but have notably different function. Likewise, 7 and 8 are both part of the project window.

![The Unity Editor](https://i.imgur.com/b7YmcQc.png)

1. To the left we have the Grab, Move, Rotate, Scale, and Game Window Scale Slider buttons. The Grab button is unlike the others in that it is used to affect your view of the scene by clicking and dragging with the mouse to move your view. The other four tools are all used to affect objects in the active scene. The move tool can move game objects along their axis’ using the red, blue, and green axis arrows that appear when an object is selected. Likewise the rotate and scale tools can rotate and scale game objects using slightly different looking versions of the same axis arrows. The game window scale slider is somewhat different in that it scales objects in the x and y direction relative to your viewing window. In practice, only the move and rotate tools are commonly used.


2. This is the object hierarchy, which is an overview of all the objects within a particular unity scene (whichever scene you presently have loaded). This is particularly useful for adding new objects to the scene, and duplicating objects. It is also very useful for altering the parent-child relationships of objects, which is something you’ll need to learn more about later. 
	If you want to see what this looks like though, simply try dragging and dropping one object in the hierarchy window onto another. You can also right click to add different types of unity game objects to the window and scene.


3. This is the scene view. In the scene view you can of course view the currently loaded scene, as well as select, place, and move unity game objects. The scene view also displays icons for certain types of components that are on game objects, such as game objects which are lights. You can see a small sun icon in the image above which indicates a gameobject with a lighting component. 


4. This is the game view, it shows you what your main camera would actually be seeing in game if your game was currently running. This can be very useful for getting an idea of what things like fog or lighting settings would actually look like at runtime. You can also play the scene and this view will render in real time and allow you to actually play the game without building the entire game like you would to make it playable outside of the editor. 
	I also have the stats tab open which displays information about your scene, primarily relating to performance, which can help you get an idea of how well your game will perform when you’re actually playing it, as well as what resources are the most used. There is also a profiler available to get much more detailed information along these lines, however that is another topic in and of itself.


5. These are in order from left to right the Play, Pause, and Increment buttons. The play button runs your currently active game scene, allowing you to play and test your game. The pause button freezes your game in place while playing in order for you to examine things in the editor if needed. The increment button allows you to move a paused game forward one frame at a time.


6. This is the Inspector. This is where you can edit information on all game objects. That means adding components, as well as editing any information about the components you have added. This includes things like the position and rotation of game objects, or the color of a light component for example. There is a more detailed example of the inspector screen farther down in this article.


7. This is your project folder hierarchy, which you can use to quickly skip up or down a few levels in more complicated file structures.


8. This is the main project window, which is where you’ll access all of your scripts and other assets like textures, models, and so on. The folder structure I have in this picture is from an actual project I am working on with another person using version control. Numbered 0-8 are fairly standard folders for things most any project would have, then after that I’ve got a little clutter going on from some imported assets I’m experimenting with before moving them around and adding them to version control, which is a great example of what not to do.


That should give you a general understanding of the Unity3d UI layout. However there is one thing we need to cover in greater detail.


![The Inspector](https://i.imgur.com/rtfUBbu.png)

The Inspector is one of the most important parts of the unity GUI. The inspector window exposes a wide variety of basic attributes of unity game objects.

* At the top we have a checkbox to enable or disable the game object, the name of the game object, and some game object properties including its tag, layer, and static flag (these will need to be discussed in more detail in separate sections).


* Below the basic object information we have the components that are attached to this game object. At the top you can see the transform component, and a little lower the box collider component. Unity provides many built in components like this which are very powerful in handling basic elements common to almost any type of game, such as positioning objects in the game world, or handling collisions between objects. All components on a game object can also be interacted with programmatically as well as in the inspector, and detailed information on this can be found in the unity documentation. [Read the component documentation here.](https://docs.unity3d.com/ScriptReference/Component.html)


* Scripts deserve special mention as writing scripts, which in unity are each their own class, is quite different from standard coding practices outside of game development. If you look at the bottom of the provided image, you’ll see that there are two script components displayed in the inspector. They each have a number of elements such as, “basic enemy bullet,” for example; these are public variables within the scripts. Unity makes extensive use of public variables to allow scripts to be manipulated in the editor and set up differently across different objects. These variables can not only be standard c# data types, but also custom data types and unity objects or components, which can allow very complex interaction in conjunction with inheritance and custom data types.

Those are the key things to know about the inspector window. It used to edit variables of unity components, which can include your own scripts.


#### More Information:

[Official Editor UI Overview](https://unity3d.com/learn/tutorials/topics/interface-essentials/interface-overview)
<!-- Please add any articles you think might be helpful to read before writing the article -->
