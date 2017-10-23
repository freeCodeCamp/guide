---
title: Algorithms
---
## Algorithms

An algorithm is like a recipe. It's a series of steps you take in order to achieve a specific outcome.

Some common types of algorithms include sorting algorithms, search algorithms, and compression algorithms.

[youtube](https://www.youtube.com/watch?v=kPRA0W1kECg)

freeCodeCamp's curriculum heavily emphasizes creating algorithms. This is because learning algorithms is a good way to practice programming skills. Interviewers most commonly test candidates on algorithms during developer job interviews.




// A C++ program to find the largest subsquare
// surrounded by 'X' in a given matrix of 'O' and 'X'
#include<iostream>
using namespace std;

// Size of given matrix is N X N
#define N 6

// A utility function to find minimum of two numbers
int getMin(int x, int y) { return (x<y)? x: y; }

// Returns size of maximum size subsquare matrix
// surrounded by 'X'
int findSubSquare(int mat[][N])
{
	int max = 1; // Initialize result

	// Initialize the left-top value in hor[][] and ver[][]
	int hor[N][N], ver[N][N];
	hor[0][0] = ver[0][0] = (mat[0][0] == 'X');

	// Fill values in hor[][] and ver[][]
	for (int i=0; i<N; i++)
	{
		for (int j=0; j<N; j++)
		{
			if (mat[i][j] == 'O')
				ver[i][j] = hor[i][j] = 0;
			else
			{
				hor[i][j] = (j==0)? 1: hor[i][j-1] + 1;
				ver[i][j] = (i==0)? 1: ver[i-1][j] + 1;
			}
		}
	}

	// Start from the rightmost-bottommost corner element and find
	// the largest ssubsquare with the help of hor[][] and ver[][]
	for (int i = N-1; i>=1; i--)
	{
		for (int j = N-1; j>=1; j--)
		{
			// Find smaller of values in hor[][] and ver[][]
			// A Square can only be made by taking smaller
			// value
			int small = getMin(hor[i][j], ver[i][j]);

			// At this point, we are sure that there is a right
			// vertical line and bottom horizontal line of length
			// at least 'small'.

			// We found a bigger square if following conditions
			// are met:
			// 1)If side of square is greater than max.
			// 2)There is a left vertical line of length >= 'small'
			// 3)There is a top horizontal line of length >= 'small'
			while (small > max)
			{
				if (ver[i][j-small+1] >= small &&
					hor[i-small+1][j] >= small)
				{
					max = small;
				}
				small--;
			}
		}
	}
	return max;
}

// Driver program to test above function
int main()
{
	int mat[][N] = {{'X', 'O', 'X', 'X', 'X', 'X'},
					{'X', 'O', 'X', 'X', 'O', 'X'},
					{'X', 'X', 'X', 'O', 'O', 'X'},
					{'O', 'X', 'X', 'X', 'X', 'X'},
					{'X', 'X', 'X', 'O', 'X', 'O'},
					{'O', 'O', 'X', 'O', 'O', 'O'},
					};
	cout << findSubSquare(mat);
	return 0;
}
