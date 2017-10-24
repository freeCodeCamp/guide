---
title: Erase–remove idiom
---

## Desctiprion

The erase–remove idiom is a common C++ technique to eliminate elements that fulfill a certain criterion from a C++ Standard Library container.
In C++, this could be achieved using a hand-written loop. It is, however, preferred to use an algorithm from the C++ Standard Library for such tasks.
`erase` can be used to delete an element from a collection, but for containers which are based on an array, such as `vector`, all elements after the deleted element have to be moved forward, to avoid "gaps" in the collection. Calling erase multiple times on the same container generates lots of overhead of moving the elements.

The `algorithm` library provides the `remove` and `remove_if` algorithms for this. These algorithms do not remove elements from the container, but move all elements which don't fit the remove criteria to the front of the range, keeping the relative order of the elements. This is done in a single pass through the data range.

As no elements are actually removed and the container has still the same size, there is a number of elements equal to the number of "removed" items left in the back of the range, having a valid but unspecified state. `remove` returns an iterator pointing to the first of these elements, so they can be deleted using a single call to `erase`.

### Example

```cpp
#include <vector> // the general-purpose vector container
#include <iostream> // cout
#include <algorithm> // remove and remove_if

bool is_odd(int i)
{
    return (i % 2) != 0;
}

void print(const std::vector<int> &vec)
{
    for (const auto& i : vec)
        std::cout << i << ' ';
    std::cout << std::endl;
}

int main()
{
    // initialises a vector that holds the numbers from 1-10.
    std::vector<int> v = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    print(v);

    // removes all elements with the value 5
    v.erase(std::remove(v.begin(), v.end(), 5), v.end());
    print(v);

    // removes all odd numbers
    v.erase(std::remove_if(v.begin(), v.end(), is_odd), v.end());
    print(v);

    // removes all odd numbers using lambda
    std::vector<int> v2 = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    v2.erase(std::remove_if(v2.begin(), v2.end(), [](int n) { return (n % 2) != 0; }), v2.end());
    print(v2);

    return 0;
}

/*
Output:
1 2 3 4 5 6 7 8 9 10
1 2 3 4 6 7 8 9 10
2 4 6 8 10
2 4 6 8 10
*/
```

### Sources
Meyers, Scott (2001). Effective STL: 50 Specific Ways to Improve Your Use of the Standard Template Library. Addison-Wesley.
