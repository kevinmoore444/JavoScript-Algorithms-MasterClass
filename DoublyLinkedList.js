class Node {
    //Constructs a Node
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    //Constructs a new instance of an empty SLL
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++;
        return this;
    }


    pop(){
        if(this.head === null){
            return undefined;
        }
        var poppedNode = this.tail
        if(this.length === 1){
            this.head = null
            this.tail = null
            poppedNode.prev = null;
        }
        else{
            this.tail = poppedNode.prev;
            this.tail.next = null
        }
        this.length--;
        return poppedNode;

    }

    shift(){
        if(this.head === null){
            return undefined;
        }
        var oldhead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = oldhead.next
            this.head.prev = null
            oldhead.next=null 
        }
        this.length--;
        return oldhead;
    }

    unshift(val){
        var newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++;
        return this
    }


    get(index){
        if(index < 0 || index >= this.length){
            return null
        }
        if(index > (this.length / 2)){
            var count = 0;
            var current = this.head;
            while(count !== index){
                console.log("Working From Start")
                current = current.next;
                count++;
            }
        }
        else{
            console.log("Working From End")
            var count = this.length -1;
            var current = this.tail
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;  
    }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode !== null){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length){
            return null
        }
        if(index === 0){
            this.unshift(val)
        }
        else if(index === this.length){
            this.push(val)
        }
        else{
            var foundNode = this.get(index-1);
            var foundNodeNext = this.get(index);
            var newNode = new Node(val);
            foundNode.next = newNode
            newNode.prev = foundNode
            newNode.next = foundNodeNext
            foundNodeNext.prev = newNode
        }
        length++;
        return true;
    }    

    remove(index){
        if(index < 0 || index > this.length-1){
            return null
        }
        if(index === 0){
            this.length--
            return this.shift()
        }
        if(index === this.length-1){
            this.length--
            return this.pop()
        }
        else{
            var foundNode = this.get(index)
            var prevNode = this.get(index-1)
            var nextNode = this.get(index+1)
            foundNode.next = null
            foundNode.prev = null
            prevNode.next = nextNode
            nextNode.prev = prevNode
            this.length--;
            return foundNode;
            }
        }
    
}
//Instantiate a list
list = new DoublyLinkedList();
list.push(99)
list.push(100)
list.push(101)
list.push(102)
list.push(103)
//Remove the last value of the list
list.pop()

//Remove the first value of the list
list.shift()

//Add the first value back in
list.unshift(99)


//Display the list
console.log(list)