---
title: Finite State Machine
---
The finite state machine (FSM) is a software design pattern where a given model transitions to other behavioral states through external input.

## Finite State Machine
A FSM is defined by it's **states**, it's **initial state** and the **transitions**.

The power of FSM comes from the ability to clearly define different *behaviors* in different conditions. Usually FSM is used with looping behavioral scripts which constantly evaluate the current situation in a loop or with events.

To help form an image of how this might be applied, a coffee machine will be used as an example of a finite state machine. We will also cover a state diagram to visualise the FSM and provide coding examples. 

### State Diagram
![Coffee machine finite state machine diagram](https://raw.githubusercontent.com/arunma/blogimages/master/AkkaFSM/CoffeeMachineFSM.png)
This diagram shows three possible states for the coffee machine:
- Open
- Ready to buy
- PoweredOff

The lines between these states show which transitions are possible between states and in which direction. These transitions have conditions for when the FSM needs to change between states.
- StartUpMachine
From the PoweredOff state to the Open state the machine has to start up. This is done manually in this case.

- deposit >= cost of coffee
The FSM evaluates the amount of deposited cash either in a loop or when the amount changes (recommended in this case)
If you deposit enough cash into the coffee machine, the FSM will go from 'Open' to 'ReadyToBuy'.

- ShutdownMachine
The machine will automatically go from Open to PoweredOff through the ShutDownMachine method if the condition 'no more coffees left' is met.

- DispenseCoffee
In the ReadyToBuy state the user can buy a coffee whereafter it will be brewed and dispensed. The condition is when the BuyCoffee event (!Link to observer pattern!) fires. (not shown in diagram)

- CancelCoffee
If the user opts to cancel, the machine will go from ReadyToBuy to Open.

- ShutDownMachine
The machine will go to PoweredOff state

### States
In every state there is defined behavior which will only be executed when the object is in that state. For instance, during PoweredOff the coffee machine won't brew coffee before it's powered on, during the Open state it will wait either until there's enough cash inserted, until the power down command is given, or until it runs out of coffee. During this Open state it can do routines such as cleaning which won't happen in other states.

### Initial State
Every FSM has an initial state, this means which state it starts in when it is created and has to be defined when constructed or instantiated. Of course it's possible to directly change state if conditions are met.

### Transitions
Every state either constantly evaluates if it should transition to another state or will transition to another state based on a triggered event.
