class Stack{
    constructor(){
       this.items=[];
    }

    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        else{
            return this.items.pop();
        }
    }
    peek(){
        if(this.isEmpty()){
          return "Stack is empty"; 
        }
        return this.items[this.items.length - 1];

    }
    isEmpty(){
       if(this.items.length===0){
        return true;
       }
       else{
        return false;
       }
    }

    size(){
        this.items.length;
    }
    clear(){
        this.items=[];
    }

}

const stack=new Stack()
stack.isEmpty();
stack.push(10);
stack.push(20);
stack.push(30);
stack.size();
stack.peak();
stack.pop();
stack.clear();
stack.isEmpty(); 
console.log( stack.isEmpty())