
#include <stdio.h>
#include <string.h>
#define RANGE 255
 
void countSort(char arr[])
{
  
    char output[strlen(arr)];

    int count[RANGE + 1], i;
    memset(count, 0, sizeof(count));
 
    
    for(i = 0; arr[i]; ++i)
        ++count[arr[i]];

    for (i = 1; i <= RANGE; ++i)
        count[i] += count[i-1];

    for (i = 0; arr[i]; ++i)
    {
        output[count[arr[i]]-1] = arr[i];
        --count[arr[i]];
    }
 
    for (i = 0; arr[i]; ++i)
        arr[i] = output[i];
}
 
int main()
{
    char arr[] = "geeksforgeeks";//"applepp";
 
    countSort(arr);
 
    printf("Sorted character array is %sn", arr);
    return 0;
}
