/*P5.42 Program to print triad numbers*/
#include<stdio.h>
int main(void)
{
	int m,n,p,num;
	int i,k,d1,d2,d3;
	for(num=100; num<=999/3; num++)/*Loop A*/
	{
		for(i=num; i<=3*num; i+=num )/*loop B*/
		{
			k=i;
			d1=k%10; k/=10;
			d2=k%10; k/=10;
			d3=k%10; k/=10;
			if(d1==d2 || d2==d3 || d3==d1)
				goto nextnum;
		}/*End of loop B*/
		for(m=num; m>0; m/=10)/*Loop C*/
		{
			d1=m%10;
			for(n=num*2; n>0; n/=10)/*Loop D*/
			{
				d2=n%10;
				for(p=num*3; p>0; p/=10) /*Loop E*/
				{
					d3=p%10;
					if(d1==d2 || d2==d3 || d1==d3)
						goto nextnum;
				}/*End of Loop E*/
			}/*End of Loop D*/
		}/*End of loop C*/
		printf("%d %d %d\t",num,num*2,num*3);
		nextnum:
		;	
	}/*End of loop A*/
	return 0;
}/*End of main()*/
