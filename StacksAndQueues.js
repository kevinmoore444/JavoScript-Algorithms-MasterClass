class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        }
        else{
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(this.size === 0){
            return null
        }
        var temp = this.first
        if (this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next
        this.size--;
        return temp.val;
    }

}

var stack = new Stack()

console.log("The new stack size is " + stack.push(23))
console.log("The new stack size is " + stack.push(30))
console.log("The new stack size is " + stack.push(40))
console.log("The popped node value is " + stack.pop())
console.log("The popped node value is " + stack.pop())
console.log("The popped node value is " + stack.pop())



class queueNode {
    constructor(val){
        this.value = val
        this.next = null
    }
}


class Queue {
    constructor(){
    this.first = null;
    this.last = null;
    this.size = 0
    }

    //Add to end of linked list
    enqueue(val){
        var newNode = new queueNode(val)
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size
        
    }


    //Removes first value
    dequeue(){
        if(this.size === 0){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        var temp = this.first;
        this.first = this.first.next;
        this.size--;
        return temp.val
    }
}

var queue = new Queue();
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())