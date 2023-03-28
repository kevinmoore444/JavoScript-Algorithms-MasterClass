class ListNode {

    //Constructs a Node
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    //Constructs a new instance of an empty SLL
    constructor() {
        this.head = null;
    }

    //Determines if an SLL is empty
    isEmpty() {
        return this.head === null;
    }



    //Insert a node at the back of the list
    insertAtBack(data) {
        if (this.isEmpty()) {
            this.head = new ListNode(data);
        }
        else {
            let current = this.head
            while (current.next !== null) {
                current = current.next
            }
            current.next = new ListNode(data)
        }
    }

    //Insert at the back recursively
    insertAtBackRecursive(data, runner = this.head) {
        if (!this.isEmpty()) {
            if (runner.next == null) {
                runner.next = new ListNode(data);
                this.getNodes();
                return;
            }
            runner = runner.next;
            this.insertAtBackRecursive(data, runner);
        }
        else{
            this.head = new ListNode(data);
        }
    }



    //Prints a list of nodes
    getNodes() {
        const output = []
        let current = this.head
        while (current.next !== null) {
            output.push({ "ListNode": { "data": current.data } })
            current = current.next
        }
        output.push({ "ListNode": { "data": current.data } })
        return output
    }

    //Insert Node to the front
    insertAtFront(data) {
    let headNodeVariable = this.head;
    this.head = new ListNode(data);
    this.head.next = headNodeVariable;
    }

    //Insert each value of an array into the front of a Singly Linked List
    seedFromArr(array){
        if (array.length > 0) {
            for (let i = 0; i < array.length; i++) {
                this.insertAtFront(array[i]);
            }
        }
    }

    //Convert the singly linked list into an Array
    toArray() {
        if (!this.isEmpty()) {
            let array = [];
            let current = this.head;
            while(current.next !== null) {
                array.push(current.data);
                current = current.next;
            }
            array.push(current.data);
            return array;
        }
    }


    // Remove Head
    removeHead () {
    if (!this.isEmpty()) {
        this.head = this.head.next;
    }
    }

    // Remove from Back
    removeFromBack() {
    if (this.isEmpty()) {
        console.log("List is empty. Nothing to remove.")
        return null
    } 
    else {
        let current = this.head
        while (current.next.next !== null) {
        current = current.next
        }
        
        const data = current.next.data
        this.last = current
        this.last.next = null
        console.log(`Removed ${data} from the end of the list`)
        return data
        }
    }


    //Search a singly linked list for a value
    contains(value) {
        if (!this.isEmpty()) {
            let current = this.head;
            while(current != null) {
                if (current.data == value) {
                    return true;
                }
                current = current.next
            }
        }
        return false
    }

    //Search a singly linked list recursively
    containsRecursive(value, current = this.head) {
        if(current === null){
            return false
        }
        if(current.data === value){
            return true
        }
    
        return this.containsRecursive(value, current.next)
    }

    //Determine the average of the values in a singly linked list, recursively
    average(count=0, sum=0, current=this.head) {
        if(this.isEmpty()){
            return NaN
        }
        if(Number.isNaN(this.data)){
            return NaN
        }
        if(current.next === null){    
            count += 1
            sum += current.data
            return "The average is " + sum/count
        }
        count += 1
        sum += current.data
        return this.average(count, sum, current.next)
    }

    //Retrieve the value of the 2nd to last node
    secondToLast(current = this.head){
        if(this.isEmpty() || current.next === null){
            return null
        }
        if(current.next.next === null){
            return current.data
        }
        return this.secondToLast(current.next)

    }

    //Pass in a value, and if it exists, remove it and return true.
    //If not found, return false.
    removeValue(value) {
        if (!this.isEmpty()) {
            if (this.head.data == value) {
                this.head = this.head.next;
                return this.getNodes();
            }
            let current = this.head;
            while(current.next !== null) {
                if (current.next.data == value) {
                    current.next = current.next.next;
                    return this.getNodes();
                }
                current = current.next
            }
        }
        return "Value not found"
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val);
        if(index === 0) this.insertAtFront(val);
        
        //Logic for finding correct indext and insert
    }


}

//Instantiate a new singly linked list
let list1 = new SinglyLinkedList();

//Populate that singly linked list with values using "Insert at Back"
list1.insertAtBack(50);
list1.insertAtBack(100);
list1.insertAtBack(150);
list1.insertAtBack(200);

//Add to the list using "Insert at back recursive". 
list1.insertAtBackRecursive(250)

//Inserts an array to the front of our singly linked list.
list1.seedFromArr([0,2])

//Remove node from the front
list1.removeHead()

//Remove node from the back
list1.removeFromBack()

//Search a singly linked list for a specified value. 
// console.log(list1.contains(50))
// console.log(list1.contains(5000))

//Search a singly linked list for a specified value RECURSIVELY. 
// console.log(list1.containsRecursive(50))
// console.log(list1.containsRecursive(5000))

//Returns the second to last value in a singly linked list.
// console.log(list1.secondToLast())

//Calculate the average of the values in the singly linked list
// console.log(list1.average())

// Converts the Singly Linked List to an Array
// console.log(list1.toArray())

//Remove a specified value from the list
// list1.removeValue(150)

//Get Nodes returns the entire Singly Linked List
console.log(list1.getNodes())