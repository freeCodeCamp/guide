---
title: Binary Search Trees
---
## Binary Search Trees

![Binary Search Tree](https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png)

A tree is a data structure composed of nodes that has the following characteristics:
1. Each tree has a root node (at the top).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on.

A binary search tree adds these two characteristics:
1. Each node has up to two children.
2. For each node, its left descendent nodes are less than the current node, which is less than the right descendent nodes.

Binary search trees allow fast lookup, insert and removal of nodes. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

Let us define a BST node having some data, referencing to its left and right child nodes.

struct node {
   int data;   
   struct node *leftChild;
   struct node *rightChild;
};

## Search Operation
Whenever an element is to be searched, start searching from the root node. Then if the data is less than the key value, search for the element in the left subtree. Otherwise, search for the element in the right subtree. Follow the same algorithm for each node.

Algorithm
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

## Insert Operation

Whenever an element is to be inserted, first locate its proper location. Start searching from the root node, then if the data is less than the key value, search for the empty location in the left subtree and insert the data. Otherwise, search for the empty location in the right subtree and insert the data.

Algorithm
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

### Relevant videos on freeCodeCamp YouTube channel
* <a href='https://youtu.be/5cU1ILGy6dM' target='_blank' rel='nofollow'>Binary Search Tree</a>
* <a href='https://youtu.be/Aagf3RyK3Lw' target='_blank' rel='nofollow'>Binary Search Tree: Traversal and Height</a>

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
