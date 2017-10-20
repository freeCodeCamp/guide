---
title: Shortest Path on a Graph
---
## Shortest Path on a Graph

<!--  This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/computer-science/shortest-path-on-a-graph/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.-->

<!-- <a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.-->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Quick look at different algorithims
---
| Algorithm Name 	| Runtime 	| When to use 	|
|-----------------------:	|-------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------	|
| Dijkstra's (with list) 	| O(V^2) 	| Requires all edge weights to be positive. 	|
| Bellman-Ford 	| O(V^2) 	| edges can have negative weights and the graph is directed. 	|
| Topological Sort 	| O(V+E) 	|  even if there are negative weight edges, there can be no negative weight cycles. 	|
| Floyd-Warshall 	| O(V^3) 	| Negative edge weight may be present for Floyd-Warshall. 	|
| Johnson's 	| O(V.E+V^2.log(V)) 	| best for sparse graphs (meaning few edges). In sparse graphs, Johnson's algorithm has a lower asymptotic running time compared to Floyd-Warshall. 	|

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://www.tablesgenerator.com/markdown_tables#  
https://en.wikipedia.org/wiki/Shortest_path_problem


