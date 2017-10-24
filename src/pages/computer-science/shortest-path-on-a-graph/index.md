---
title: Shortest Path on a Graph
---
## Shortest Path on a Graph

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Finding the shortest path between two points on a graph is a common problem in data structures especially when dealing with optimization. A graph is a series of nodes connected by weighted edges.

Some applications of this are flight path optimization or [6 degrees of Kevin Bacon](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon)

The most commen solution for this problem is Dijkstra's algorithm which updates the shortest path between the current node and all of its neighbors. After updating the distance of all of the neighbors it moves to the node with the lowest distance and repeats the process with all unvisted neighbors. This process continues until the entire graph has been visited.

![Image of Levels of Code](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[More On Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

[Other Shortest path algorithms](https://en.wikipedia.org/wiki/Shortest_path_problem#Algorithms)
