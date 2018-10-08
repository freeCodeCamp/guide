/* WORKING FIRST FILE */
#include <iostream>
#include <fstream> 
using namespace std;
int main(){
	char msg[100];
	ofstream escritura("File1.txt");
	if(escritura.fail()){
			cout<<"Error in FILE";
	}else{
			cout<<"FILE Successfully generated"<<endl;
			cout<<"Msg: ";
			fflush(stdin);	
			gets(msg);
			escritura<<msg;
	}

	escritura.close();
	/*	cout<<"Archivo -- close"<<endl;
		char ar[100];
		ifstream lectura("archivo1.txt");
		lectura >> ar;
		cout<<ar<<endl;
		lectura.close();	
	*/
}