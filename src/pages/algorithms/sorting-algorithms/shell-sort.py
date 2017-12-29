'''
Shell Sort
According to Wikipedia "Shell sort or Shell's method, is an in-place comparison sort.
It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by
insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other,
then progressively reducing the gap between elements to be compared. Starting with far apart elements
can move some out-of-place elements into position faster than a simple nearest neighbor exchange."

Best Case O(n logn); Average Case O(depends on gap sequence); Worst Case O(n)

Following is the python implementation of shell-sort algorithm:'''

def shellSort(myList):
    gap = len(myList) // 2
    while gap > 0:
        for i in range(gap, len(myList)):
            currentItem = myList[i]
            j = i
            while j >= gap and myList[j - gap] > currentItem:
                myList[j] = myList[j - gap]
                j -= gap
            myList[j] = currentItem
        gap //= 2

    return myList

if __name__ == '__main__':
    myList = [12, 23, 4, 5, 3, 2, 12, 81, 56, 95]
print(shellSort(myList))
