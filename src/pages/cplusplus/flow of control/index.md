
#### There are 3 types of statements that control the flow of a program :-

1. **Selection statements:** if and else, switch

    A selection statement selects among a set of statements depending on the value of a controlling expression. The selection statements are the if statement and the switch statement, which are discussed in the following sections.

    e.g. 
    ```
        if(boolean_expression) {
    
        // statement(s) will execute if the boolean expression is true

        } else {
        
        // statement(s) will execute if the boolean expression is false
        
        }
    
2. **Iteration statements:** for, while, do-while

    Loops repeat a statement a certain number of times, or while a condition is fulfilled. They are introduced by the keywords while, do, and for.

    e.g.
    ```
      for ( initialisation; condition; increment ) {
 
      statement(s);
      
      }

3. **Jump statements:** goto, break, return, continue

    Jump statements allow altering the flow of a program by performing jumps to specific locations.

    e.g.
    ```
      a = 0 ;
      
      start :
      
      cout << "\n" << ++a ;
      
      if(a < 50)
	    
      goto start ;
      
