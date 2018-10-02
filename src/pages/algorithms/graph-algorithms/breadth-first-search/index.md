---
title: Breadth First Search (BFS)
---
## Breadth First Search (BFS)

Breadth First Search is one of the most simple graph algorithms. It traverses the graph by first checking the current node and then expanding it by adding its successors to the next level. The process is repeated for all nodes in the current level before moving to the next level. If the solution is found the search stops.

### Visualisation

![](https://upload.wikimedia.org/wikipedia/commons/4/46/Animated_BFS.gif)


### Evaluation

Space Complexity: O(n)

Worse Case Time Complexity: O(n)

Breadth First Search is complete on a finite set of nodes and optimal if the cost of moving from one node to another is constant.

### Implementation (C++14)
```C++
#include <iostream> 
#include <vector> 
#include <queue>  
using namespace std; 
  
class Graph{ 
    int v;    // number of vertices 
  
    // pointer to a vector containing adjacency lists 
    vector < int > *adj;    
public: 
    Graph(int v);  // Constructor 
  
    // function to add an edge to graph 
    void add_edge(int v, int w);  
  
    // prints bfs traversal from a given source `s` 
    void bfs(int s);   
}; 
  
Graph::Graph(int v){ 
    this -> v = v; 
    adj = new vector < int >[v]; 
} 
  
void Graph::add_edge(int u, int v){ 
    adj[u].push_back(v); // add v to u’s list
    adj[v].push_back(v);  // add u to v's list (remove this statement if the graph is directed!)
} 
  
void Graph::bfs(int s){ 
    // mark all the vertices as not visited 
    vector < bool > visited(v, false); 
  
    // create a queue for bfs 
    queue < int > que; 
  
    // mark the current node as visited and enqueue it 
    visited[s] = true; 
    que.push(s); 
  
    // 'itr' is the iterator that will be used to get all adjacent 
    // vertices of a vertex 
    vector < int > :: iterator itr; 
  
    while(!que.empty()){ 
        // dequeue a vertex from queue and print it 
        s = que.front(); 
        cout << s << " "; 
        que.pop(); 
  
        // get all adjacent vertices of the dequeued 
        // vertex s. If a adjacent has not been visited,  
        // then mark it visited and enqueue it 
        for (itr = adj[s].begin(); itr != adj[s].end(); ++itr){ 
            if (!visited[*itr]){ 
                visited[*itr] = true; 
                que.push(*itr); 
            } 
        } 
    } 
} 
  
int main() 
{ 
    // create a graph using the Graph class we defined above
    Graph g(4); 
    g.add_edge(0, 1); 
    g.add_edge(0, 2); 
    g.add_edge(1, 2); 
    g.add_edge(2, 0); 
    g.add_edge(2, 3); 
    g.add_edge(3, 3); 
  
    cout << "Following is the Breadth First Traversal of the provided graph"
         << "(starting from vertex 0): "; 
    g.bfs(0); 
    // output would be: 0 1 2 3
    
    cout << "\nFollowing is the Breadth First Traversal of the provided graph"
         << "(starting from vertex 2): "; 
    g.bfs(2);
    // output would be: 2 0 3 1
    return 0; 
} 
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href='https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md' target='_blank' rel='nofollow'>Graphs</a>

<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/depth-first-search/index.md' target='_blank' rel='nofollow'>Depth First Search (DFS)</a>
