---
title: Multiple Inputs in a single line
---

In order to accept multiple inputs from the user in a single line we can use the following code in python-2:

        >>> x, y, z = map(int, raw_input().split())
        # Inputs three values like '2 5 8' separated by a space into three variables(x, y, z) as integer values
