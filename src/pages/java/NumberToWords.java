import java.util.*;
public class intword
{
  void words(int n,String ch)
  {
    String  one[]={"","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ",
        "ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "};
 
    String ten[]={" "," ","twenty ","thirty ","forty ","fifty ","sixty ","seventy ","eighty ","ninety "};
 
    if(n > 19)
        System.out.print(ten[n/10]+""+one[n%10]);
    else  
        System.out.print(one[n]);
    if(n > 0)
        System.out.print(ch);
  }
  public static void main(String[] gunbir)
  {
    int n=0;
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter an integer number: ");
    n = sc.nextInt();
    
   if(n <= 0)                   
      System.out.println("Enter numbers greater than 0");
   
   else
   {
      intword ob = new intword();
      ob.words((n/1000000000),"Hundred ");
      ob.words((n/10000000)%100,"crore ");
      ob.words(((n/100000)%100),"lakh ");
      ob.words(((n/1000)%100),"thousand ");
      ob.words(((n/100)%10),"hundred ");
      ob.words((n%100),"");
    }
  }
}
