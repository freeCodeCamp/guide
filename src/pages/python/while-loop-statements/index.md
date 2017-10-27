---
title: While Loop Statements
---
## While Loop Statements

<!-- Please add any articles you think might be helpful to read before writing the article -->
Python utilizes different the while loop similar to other popular languages.  The while loop continuously iterates through a block of code as long as the condition is true.  Once condition is proven to be false then it breaks out of the block of code.  

The basic syntax is:

```python
counter = 0
while (counter < 10):
   # Execute the block of code here as
   # long as counter is less than 10
```

An example is shown below:
```python
days = 0
week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
while (days < 7):
   print("Today is " + week[days])
   days += 1
```

Output:

```
Today is Monday
Today is Tuesday
Today is Wednesday
Today is Thursday
Today is Friday
Today is Saturday
Today is Sunday
```

Here is an another example of the use of a while loop. I recently built a while loop as part of a game I was making and I used it as a way to repeat the turns until someone won. Here is the base code: 

"""
win = 0
while (win == 0):
		#test code:
      
		def P1Turn():
         #some code here
			
		def P2Turn():
         #some code here
         
		def GControl():
         #This is my control function that manages turns and wins
			global win
			gmset = 1
			if (Turn == 1):
				if (P2Health <= 0):
					win = 1
					game()
				elif (P1Health <= 0):
					win = 2
					game()
				else:
					P1Turn()
			elif (Turn == 2):
				if (P1Health <= 0):
					win = 2
					game()
				elif (P2Health <= 0):
					win = 1
					game()
				else:
					P2Turn()
		if (gmset == 0):
			GControl()
	else:
		if win == 1:
			print "Player 1 WINS!!!"
		elif win == 2:
			print "Player 2 WINS!!!"
  """
  
