---
title: Greedy Algorithms
---
## Greedy Algorithms

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/greedy-algorithms/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


//this algorithm helps us to find the Cycles of length n in an undirected and connected graph in c++
#include <bits/stdc++.h>
using namespace std;

// Number of vertices
const int V = 5;

void DFS(bool graph[][V], bool marked[], int n,
			int vert, int start, int &count)
{
	// mark the vertex vert as visited
	marked[vert] = true;

	// if the path of length (n-1) is found
	if (n == 0) {

		// mark vert as un-visited to make
		// it usable again.
		marked[vert] = false;

		// Check if vertex vert can end with
		// vertex start
		if (graph[vert][start])
		{
			count++;
			return;
		} else
			return;
	}

	// For searching every possible path of
	// length (n-1)
	for (int i = 0; i < V; i++)
		if (!marked[i] && graph[vert][i])

			// DFS for searching path by decreasing
			// length by 1
			DFS(graph, marked, n-1, i, start, count);

	// marking vert as unvisited to make it
	// usable again.
	marked[vert] = false;
}

// Counts cycles of length N in an undirected
// and connected graph.
int countCycles(bool graph[][V], int n)
{
	// all vertex are marked un-visited intially.
	bool marked[V];
	memset(marked, 0, sizeof(marked));

	// Searching for cycle by using v-n+1 vertices
	int count = 0;
	for (int i = 0; i < V - (n - 1); i++) {
		DFS(graph, marked, n-1, i, i, count);

		// ith vertex is marked as visited and
		// will not be visited again.
		marked[i] = true;
	}

	return count/2;
}

int main()
{
	bool graph[][V] = {{0, 1, 0, 1, 0},
					{1, 0, 1, 0, 1},
					{0, 1, 0, 1, 0},
					{1, 0, 1, 0, 1},
					{0, 1, 0, 1, 0}};
	int n = 4;
	cout << "Total cycles of length " << n << " are "
		<< countCycles(graph, n);
	return 0;
}
