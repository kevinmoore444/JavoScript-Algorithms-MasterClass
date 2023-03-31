class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        var current = this.root
        var newNode = new Node(value)
        while(current !== null){
        if(value === current.value){
            return undefined;
        }
        if(value > current.value){
            current = current.right
        }
        else{
            current = current.left
        }
        }
        newNode = current
        return this;
    }
    
    find(value){
        var current = this.root
        while(current.value !== null){
        if (value === current.value){
            return true
        }
        else if (value > current.value ) {
            current = current.right
        }
        else {
            current = current.left
        }
        }
        return false
    }




}