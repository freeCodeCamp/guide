public class bubble-sort {  
    static void sort(int[] arr) {  
        int n = arr.length;  
        int temp = 0;  
         for(int i=0; i < n; i++){  
                 for(int x=1; x < (n-i); x++){  
                          if(arr[x-1] > arr[x]){  
                                 temp = arr[x-1];  
                                 arr[x-1] = arr[x];  
                                 arr[x] = temp;  
                         }  
                          
                 }  
         }  
  
    }  
    public static void main(String[] args) {  
                
		for(int i=0; i < 15; i++){
			int arr[i] = (int)(Math.random() * 100 + 1);
		}
                 
                System.out.println("array before sorting\n");  
                for(int i=0; i < arr.length; i++){  
                        System.out.print(arr[i] + " ");  
                }
                bubbleSort(arr);
                System.out.println("\n array after sorting\n");  
                for(int i=0; i < arr.length; i++){  
                        System.out.print(arr[i] + " ");  
                }  
   
        }  
}  
