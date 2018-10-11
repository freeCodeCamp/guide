temp = None
def merge(arr, left, right):
    global temp
    mid = (left + right) // 2
    for i in range(left, right + 1):
        temp[i] = arr[i]
    
    k, L, R = left, left, mid + 1
    while L <= mid and R <= right:
        if temp[L] <= temp[R]:
            arr[k] = temp[L]
            L += 1
        else:
            arr[k] = temp[R]
            R += 1
        k += 1
    
    while L <= mid:
        arr[k] = temp[L]
        L += 1
        k += 1
        
    while R <= right:
        arr[k] = temp[R]
        R += 1
        k += 1    
        
def merge_sort(arr, left, right):
    if left >= right:
        return
    
    mid = (left + right) // 2
    merge_sort(arr, left, mid)
    merge_sort(arr, mid + 1, right)
    merge(arr, left, right)

arr = [1,6,3,1,8,4,2,9,3]
temp = [None for _ in range(len(arr))]
merge_sort(arr, 0, len(arr) - 1)
print(arr, inversions)
