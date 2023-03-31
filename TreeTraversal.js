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

    BreadthFirstSearch(){
        var node = this.root,
        data = [],
        queue = [];
        queue.push(this.root);

        while(queue.length){
            node = queue.shift();
            data.push(node.value)
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
            return data;
        }
    }

    DepthFirstSearchPreOrder(){
        var data = []
        function traverse(node){
            data.push(node)
            if(node.left){
                return traverse(node.left);
            }
            if(node.right){
                return traverse(node.right);
            }
            //Have to actually CALL the helper function
            traverse(this.root)
        }
        return data;
    }

    DepthFirstSearchPostOrder(){
        var data = []
        function traverse(node){
            
            if(node.left){
                return traverse(node.left);
            }
            if(node.right){
                return traverse(node.right);
            }
            //Same as the last function but were pushing the node at a different spot. 
            //The result is the at you traverse from left to right, bottom to top 
            //whereas the in the other one you traverse from left to right top to bottom. 
            data.push(node)

            traverse(this.root)
        }
        return data;
    }

    DepthFirstSearchInOrder(){
        var data = []
        function traverse(node){
            
            if(node.left){
                return traverse(node.left);
            }
            //Same as the last function but were pushing the node at a different spot. 
            //This one will return the numbers in order.
            data.push(node)
            if(node.right){
                return traverse(node.right);
            }
            traverse(this.root)
        }
        return data;
    }


}