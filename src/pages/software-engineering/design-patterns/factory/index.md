---
title: Factory
---
 
 The factory is a design pattern that restricts the creation of each object of a class to a common factory interface rather than spreading throughout in the codes.
 
## Factory in Python3
We could implemnet Factory easily with static methods.

```python
class Drink(object):
    def __init__(self, name, price=None):
        self.name = name
        self.price = price


class Tea(Drink):
    def __str__(self):
        return 'This is tea: {} in ${}'.format(self.name, self.price)


class Milk(Drink):
    def __str__(self):
        return 'This is milk: {} in ${}'.format(self.name, self.price)


class DrinkFactory(object):
    @staticmethod
    def generate(drink_type=None, *args, **kwargs):
        if drink_type == 'tea':
            return Tea(*args, **kwargs)
        elif drink_type == 'milk':
            return Milk(*args, **kwargs)
        raise NotImplementedError("{} drink do not exist.".format(drink_type))


# Testing
black_tea = DrinkFactory.generate('tea', 'Black Tea', price=4.39)
whole_milk = DrinkFactory.generate('milk', 'Whole Milk', price=5.49)
print(black_tea)
print(whole_milk)
```
