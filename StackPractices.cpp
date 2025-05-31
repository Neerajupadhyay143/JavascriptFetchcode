#include<iostream.h>
#include<conio.h>
using namespace std;

class Stack {
    private:
    int top;
    int arr[5];
    
    public:
    Stack(){
        top =-1;
        for(int i=0; i<5; i++){
           arr[i] = 0;
        }
    };
    
    bool isEmpty(){
        if(top ==-1){
            return true;
            
        }else
        {
            return false;
        }
    };
    
    bool isFull(){
        if(top ==4){
            return true;
            
        }else{
            return false;
        }
    };
    
    void Push( int val){
        cout<<"Pushing:";
        if( isFull()){
            cout<<"Stack OverFlow cannot Push "<< val <<endl;
        }else{
            top ++;
           int data= arr[top]=val;
           cout<<data<<" "<<endl;
        }
    };
    
    int pop(){
        cout<<"Poping:"<<arr[top]<<endl;
        if(isEmpty()){
            cout<<"Stack OverFlow cannot Push ";
        }else{
            int popvalue =arr[top];
            arr[top]= 0;
            top--;
            return popvalue;
        }
        
    };
    
    void Display (){
        cout<< "Display:";
        for(int i =4;i>=0;i--){
            cout<<arr[i]<<" ";
        }
        cout<<endl;
    };
};


int main(){
    Stack s1;
    int values ;
s1.Display();
s1.Push(10);
s1.Push(20);
s1.Push(30);
s1.Push(40);
s1.Push(50);
s1.Display();
s1.pop(); 
s1.Display();
s1.pop(); 
    getch();
}