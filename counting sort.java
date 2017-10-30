import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

  
        public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		int n=sc.nextInt();
		int arr[]=new int[100];
		
		for(int i=0;i<n;i++){
			int input=sc.nextInt();
			arr[input]++;
		}
		sc.close();
		
		for(int i=0;i<100;i++){
			for(int j=0;j<arr[i];j++){
				System.out.print(i+" ");
			}
		
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    }
        }}
