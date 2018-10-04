import java.util.*;
class Graph
{
	class Edge implements Comparable<Edge>
	{
		int s;
		int d;
		int w;
		public int compareTo(Edge compareEdge)
		{
			return this.w-compareEdge.w;
		}
	};
	int V;
	int E;
	Edge[] edge;
	Graph(int v,int e)
	{
		V = v;
		E = e;
		edge = new Edge[E];
		for(int i = 0;i < E;i++)
		{
			edge[i] = new Edge();
		}
	}
	class subset
	{
		int p;
		int r;
	};
	int find(subset A[],int i)
	{
		if(A[i].p != i)
			A[i].p = find(A,A[i].p);
		return A[i].p;
	}
	void UNI(subset A[],int x,int y)
	{
		int x_root = find(A,x);
		int y_root = find(A,y);
		if(A[x_root].r < A[y_root].r)
			A[x_root].p = y_root;
		else if(A[x_root].r > A[y_root].r)
			A[y_root].p = x_root;
		else
		{
			A[y_root].p = x_root;
			A[x_root].r++;
		}
	}
	void KSL()
	{
		Edge[] R = new Edge[V];
		int e = 0;
		int i =0;
		for(i = 0;i < V;i++)
		{
			R[i] = new Edge();
		}
		Arrays.sort(edge);
		subset[] s = new subset[V];
		for(i =0;i<V;i++)
		{
			s[i] = new subset();
		}
		for(int v = 0;v < V;v++)
		{
			s[v].p = v;
			s[v].r = 0;
		}
		i = 0;
		while(e < V-1)
		{
			Edge nxt_edge = new Edge();
			nxt_edge = edge[i++];
			int x = find(s,nxt_edge.s);
			int y = find(s,nxt_edge.d);
			if(x != y)
			{
				R[e++] = nxt_edge;
				UNI(s,x,y);
			}
		}
		for(i = 0;i < e;i++)
		{
			System.out.println(R[i].s+" - "+R[i].d+" = "+R[i].w);
		}
	}
}
public class MST {

	public static void main(String[] args) {
		Scanner x = new Scanner(System.in);
		int V = x.nextInt();
		int E = x.nextInt();
		Graph G = new Graph(V,E);
		for(int i = 0;i < E;i++)
		{
			G.edge[i].s = x.nextInt();
			G.edge[i].d = x.nextInt();
			G.edge[i].w = x.nextInt();
		}
		G.KSL();
		x.close();
	}
}
