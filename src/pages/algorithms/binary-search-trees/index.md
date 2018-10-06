---
title: Binary Search Trees
---
## Binary Search Trees
![Binary Search Tree](https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png)

A tree is a data structure composed of nodes that has the following characteristics:
1. Each tree has a root node (at the top).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on. This create a subtree in the tree. Every node has it's own subtree made up of his children and their children, etc. This means that every node on its own can be a tree.

A binary search tree adds these two characteristics:
1. Each node has up to two children.
2. For each node, its left descendent nodes are less than the current node, which is less than the right descendent nodes.

The BST is build up on the idea of a <a href='https://guide.freecodecamp.org/algorithms/search-algorithms/binary-search' targer='_blank' rel='nofollow'>binary search</a>, because of that it allows fast lookup, insert and removal of nodes. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree, O(log n). However, some times the worst case can happen, when the tree isn't balanced and the time complexity is O(n) for all three of these functions. That is why self balancing trees(AVL, red-black, ..) are a lot more effective than the basic BST.

Worst case scenario example - this can happen when you keep adding nodes that are ALWAYS larger than the node before(it's parent), the same can happen when you always add nodes with values lower than their parents.

### Basic operations of the BST
create - create a empty tree
insert - insert a node to the tree
search - searches for a node in the tree
delete - deletes a node from the tree

Search - we always start searching the tree at the root node and go down from there. We compare the data in each node with the one we are looking for. If the compared node isn't the one we are looking then we either proceed to the right child or the left child. This decision depends on the outcome of the comparison, if the node that we are searching for is lower than the one we were comparing it with, we proceed to to the left child, otherwise if it's larger then we go to the right child. Why? Because the BST is structured, that the right child is always larger than the parent and the left child is always lesser. Time complexity depends on the height of the tree h, so the worst case is O(h).

Insert - is very similar to the serach function. We again start at the root of the tree and recurseively go down, searching for the right place for our new node the same way as explained in the search function. If a node with the same value is already in the tree, we can choose to insert the duplicate or not. Some trees allow duplicates, some don't, it depends on the certain implementation.

Deletion - there are 3 cases that can happen, when the node we are trying to delete has:
1. no subtree(no children) - this one is the easiest, we simply just delete him, without any needed additional actions
2. one subtree(one child) - we have to make sure that after the node is deleted that it's child is then connected to the deleted childs parent
3. two subtrees(two children) - now we have to find and replace the node we want to delete with its successor(the letfmost node in the right subtree) 
Time complexity depends on the height of the tree h, so the worst case is O(h). 

### Successor

### Predecessor

### Special types of BT
Heap
Red-black tree
B tree
Splay tree
N-ary tree
Trie(Radix tree)


### Runtime
**Data structure: Array**
- Worst-case performance: O(log n)
- Best-case performance: O(1)
- Average performance: O(log n)
- Worst-case space complexity: O(1)

Let us define a BST node having some data, referencing to its left and right child nodes.

```c
struct node {
   int data;   
   struct node *leftChild;
   struct node *rightChild;
};
```

## Search Operation
Whenever an element is to be searched, start searching from the root node. Then if the data is less than the key value, search for the element in the left subtree. Otherwise, search for the element in the right subtree. Follow the same algorithm for each node.
```c
struct node* search(int data){
   struct node *current = root;
   printf("Visiting elements: ");
	
   while(current->data != data){
	
      if(current != NULL) {
         printf("%d ",current->data);
			
         //go to left tree
         if(current->data > data){
            current = current->leftChild;
         }//else go to right tree
         else {                
            current = current->rightChild;
         }
			
         //not found
         if(current == NULL){
            return NULL;
         }
      }			
   }
   return current;
}
```

## Insert Operation

Whenever an element is to be inserted, first locate its proper location. Start searching from the root node, then if the data is less than the key value, search for the empty location in the left subtree and insert the data. Otherwise, search for the empty location in the right subtree and insert the data.

```c
void insert(int data) {
   struct node *tempNode = (struct node*) malloc(sizeof(struct node));
   struct node *current;
   struct node *parent;

   tempNode->data = data;
   tempNode->leftChild = NULL;
   tempNode->rightChild = NULL;

   //if tree is empty
   if(root == NULL) {
      root = tempNode;
   } else {
      current = root;
      parent = NULL;

      while(1) {                
         parent = current;
			
         //go to left of the tree
         if(data < parent->data) {
            current = current->leftChild;                
            //insert to the left
				
            if(current == NULL) {
               parent->leftChild = tempNode;
               return;
            }
         }//go to right of the tree
         else {
            current = current->rightChild;
            
            //insert to the right
            if(current == NULL) {
               parent->rightChild = tempNode;
               return;
            }
         }
      }            
   }
}        
```

Binary search trees (BSTs) also give us quick access to predecessors and successors.
  Predecessors can be described as the node that would come right before the node you are currently at.
   - To find the predecessor of the current node, look at the rightmost/largest leaf node in the left subtree.
  Successors can be described as the node that would come right after the node you are currently at.
   - To find the successor of the current node, look at the leftmost/smallest leaf node in the right subtree.

### Let's look at a couple of procedures operating on trees.
Since trees are recursively defined, it's very common to write routines that operate on trees that are themselves recursive. 

So for instance, if we want to calculate the height of a tree, that is the height of a root node, We can go ahead and recursively do that, going through the tree. So we can say:

* For instance, if we have a nil tree, then its height is a 0.
* Otherwise, We're 1 plus the maximum of the left child tree and the right child tree.
* So if we look at a leaf for example, that height would be 1 because the height of the left child is nil, is 0, and the height of the nil right child is also 0. So the max of that is 0, then 1 plus 0.
#### Height(tree) algorithm
```
if tree = nil:
    return 0
return 1 + Max(Height(tree.left),Height(tree.right))
```

#### Here is the code in C++
```
int maxDepth(struct node* node)
{
    if (node==NULL)
        return 0;
   else
   {
       int rDepth = maxDepth(node->right);
       int lDepth = maxDepth(node->left);

       if (lDepth > rDepth)
       {
           return(lDepth+1);
       }
       else
       {
            return(rDepth+1);
       }
   }
}  
```

We could also look at calculating the size of a tree that is the number of nodes.

* Again, if we have a nil tree, we have zero nodes.
* Otherwise, we have the number of nodes in the left child plus 1 for ourselves plus the number of nodes in the right child. So 1 plus the size of the left tree plus the size of the right tree.
#### Size(tree) algorithm
```
if tree = nil
    return 0
return 1 + Size(tree.left) + Size(tree.right)
```

#### Here is the code in C++
```
int treeSize(struct node* node)
{
    if (node==NULL)
        return 0;
    else
        return 1+(treeSize(node->left) + treeSize(node->right));
}
```

### Relevant videos on freeCodeCamp YouTube channel
* [Binary Search Tree](https://youtu.be/5cU1ILGy6dM)
* [Binary Search Tree: Traversal and Height](https://youtu.be/Aagf3RyK3Lw)

Following are common types of Binary Trees:-
Full Binary Tree/Strict Binary Tree: A Binary Tree is full or strict if every node has 0 or 2 children

               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40
      
 In Full Binary Tree, number of leaf nodes is equal to number of internal nodes plus one.
 
 Complete Binary Tree: A Binary Tree is complete Binary Tree if all levels are completely filled except possibly the last level and the last level has all keys as left as possible
 
               18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40
     /  \   /
    8   7  9 
