---
title: Depth First Search (DFS)
---
## Depth First Search (DFS)

Depth First Search is one of the most simple graph algorithms. It traverses the graph by first checking the current node and then moving to one of its sucessors to repeat the process. If the current node has no sucessor to check, we move back to its predecessor and the process continues (by moving to another sucessor). If the solution is found the search stops.


### Visualisation

![](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif)

### Evaluation

Space Complexity: O(n)

Worse Case Time Complexity: O(n)
Depth First Search is complete on a finite set of nodes. I works better on shallow trees.

### Implementation of DFS in C++
```c++
#include<iostream>
#include<vector>
#include<queue>

using namespace std;

struct Graph{
	int v;
	bool **adj;
	public:
		Graph(int vcount);
		void addEdge(int u,int v);
		void deleteEdge(int u,int v);
		vector<int> DFS(int s);
		void DFSUtil(int s,vector<int> &dfs,vector<bool> &visited);
};
Graph::Graph(int vcount){
	this->v = vcount;
	this->adj=new bool*[vcount];
	for(int i=0;i<vcount;i++)
		this->adj[i]=new bool[vcount];
	for(int i=0;i<vcount;i++)
		for(int j=0;j<vcount;j++)
			adj[i][j]=false;
}

void Graph::addEdge(int u,int w){
	this->adj[u][w]=true;
	this->adj[w][u]=true;
}

void Graph::deleteEdge(int u,int w){
	this->adj[u][w]=false;
	this->adj[w][u]=false;
}

void Graph::DFSUtil(int s, vector<int> &dfs, vector<bool> &visited){
	visited[s]=true;
	dfs.push_back(s);
	for(int i=0;i<this->v;i++){
		if(this->adj[s][i]==true && visited[i]==false)
			DFSUtil(i,dfs,visited);
	}
}

vector<int> Graph::DFS(int s){
	vector<bool> visited(this->v);
	vector<int> dfs;
	DFSUtil(s,dfs,visited);
	return dfs;
}
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<a href='https://github.com/freecodecamp/guides/computer-science/data-structures/graphs/index.md' target='_blank' rel='nofollow'>Graphs</a>

<a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md' target='_blank' rel='nofollow'>Breadth First Search (BFS)</a>




[Depth First Search (DFS) - Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)
