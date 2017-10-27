import java.util.Scanner;

public class InsertionAt_ithPosition {
	public static Node<Integer> takeInput(){
		Scanner s=new Scanner(System.in);
		Node<Integer>head=null,tail=null;
		System.out.println("Enter data");
		int data=s.nextInt();

		while(data!=-1){
			Node<Integer>newNode=new Node<>(data);
			if(head==null){
				head=newNode;
				tail=newNode;
			}
			else{
				tail.next=newNode;
				tail=newNode;
			}
			System.out.println("enter data:");
			data=s.nextInt();
		}
		return head;
	}
	public static Node<Integer> InsertionAtI(Node<Integer> head,int i){
		Scanner s=new Scanner(System.in);

		System.out.println("Enter data to insert at i");
		int data=s.nextInt();
		Node<Integer> newNode=new Node<Integer>(data);

		int pos=1;
		Node<Integer> temp=head;
		if(i==1){
			newNode.next=temp;
			head=newNode;
		}
		else{
		while(pos<i-1){
			temp=temp.next;
			pos++;
		}

		newNode.next=temp.next;	
		temp.next=newNode;
		}
	
	return head;

}
	public static void print(Node<Integer> head){
		while(head!=null){
			System.out.print(head.data+"->");
			head=head.next;
		}
	}

public static void main(String[] args) {
	// TODO Auto-generated method stub
	Node<Integer> head=takeInput();
//  print(head);
	Scanner s=new Scanner(System.in);
	System.out.println("enter int i");
	int i=s.nextInt();
	print(InsertionAtI(head,i));


}

}