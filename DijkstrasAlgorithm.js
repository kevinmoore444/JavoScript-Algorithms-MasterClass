//This is our Naive priority queue. Initially written for simplicity's sake

// class PriorityQueue {
//     constructor(){
//         this.values = [];
//     }
//     enqueue(val, priority){
//         this.values.push({val, priority});
//         this.sort();
//     }
//     dequeue() {
//         return this.values.shift();
//     }
//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority);
//     }
//}

//This is our more elaborate priority queue, which we wrote as a structure for a previous exercise. 

class PriorityQueue {
    constructor(){
        this.values = [];
    }


    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode)
        this.bubbleUp();
    }

    //Helper function for insert
    bubbleUp(element){
        //This is the newly inserted element
        var index = this.length-1
        
        while(true){
            let parentIndex = Math.floor(index-1)/2;
            let parent = this.values[parentIndex]
                if(element.priority >= parent.priority){
                    break;
                }
                this.values[parentIndex] = element;
                this.values[index] = parent;
                index = parentIndex;
            }

    }

    dequeue(){
        //Pop off the last value and insert it at the head (max). 
        //Then perform sinkdown to get that new head into it's proper place.
        const min = this.values[0]
        const end = this.values.pop();
        this.values[0] = end;
        //Condition if there is only one value left in the binary heap. You will pop it and leave nothing left, 
        //(as opposed to reinserting that value at the head and sinking down)
        if(this.values.length > 0) {
        this.sinkDown();
        }
        return min;
    }

    //Helper Function for extractMax
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        //This is the element you swapped in during extractMax which must sink down
        const element = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx +1        
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild;
            let swapFlag = null;

            //If the value of the sinking down element is greater than the value of it's left child, then flag that
            //as the one to be swapped later down in the code
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swapFlag = leftChildIdx;
                }
            }

            //Same logic as the block of code above, BUT, if the right child is greater than the left child,
            //then the parent needs to swap with the right child and the swap flag is overwritten. 
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if((swapFlag === null && rightChild.priority < element.priority) || (swapFlag !== null && rightChild.priority < leftChild.priority)) 
                    {
                        swapFlag = rightChildIdx;
                    }
            }
            //If you haven't swapped in the above loop, then break out of the loop and return to extractMax function
            if(swapFlag === null) break;
            //If you have identified a swap between parent and child, then perform the swap:
            this.values[idx] = this.values[swapFlag]
            this.values[swapFlag] = element
            idx = swapFlag;
        }

    }
}
    class Node {
        constructor(val, priority){
            this.val = val;
            this.priority = priority;
        }
    }



class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    //For Building up an initial weighted graph
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2, weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }

    //Start of Dijkstras Algorithm
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {}; //Here we store the current shortest distance from the start to any given vertex. All distances
        //start at ininity, other than the start which begins at 0. 
        const previous = {}; //We store the quickest point to each vertex by marking the previous point on that quickest route.
        //The previous point also stores it's own "previous point" for quickest route, and so forth back to the start.
        let path = []; //We return this at the end to describe the shortest path from start to finish.
        let smallest;

        //Build up initial state - the distance from the starting point to the starting point is 0.
        //We assume the distance to the other points are ininity until we find a distance that's shorter.
        //We're also adding each vertex to our priority queue.
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }
            else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        //Dequeue nodes one at a time as long as there is something to visit.
        while(nodes.values.length){
            //Dequeue is structured to give us the value node with the smallest weight/priority from it's previous node
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //If we made it to the finish, we're done. This is beacuase, as per the rules of priority queue,
                //we've evaluated all nodes whose "distance-to" is shorter than the "distance-to" for the finish.
                //So there are no other possible paths which could be shorter. 
                //Did we get the distance to the finish? Yes. We evaluated this when the finish was a neighboring node. 
                //Now we're building up the path taken to the finish. Starting with smallest (the finish), each node will
                //have a "previous" which reflects the shortest path to that node - so we're following that path back to the
                //beginning. Then we will reverse that path/list below. 
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                //The adjacency list contains vertexes and each vertex contains neighboring nodes with their
                //respective weights, as specified in the addEdge function. So we're mapping over the neighbors.
                for(let neighbor in this.adjacencyList[smallest]){
                    //For each neighbor, one at a time, we're going to start by instantiating it.
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //Remember that our distances object stores each node, and the current shortest distance to that node. 
                    //So we're taking the shortest distance to the node we're visiting (smallest) and adding the weight of 
                    //"nextnode", to get the distance to next-node.
                    let candidate = distances[smallest] + nextNode.weight;
                    //So now in "candidate" we have the distance to the current node via the path we're currently following.
                    //Here were going to compare that candidate distance to any other path/distance which we may have evaluated 
                    //for the current node. If the candidate node's distance is the new shortest route, then we're going to update 
                    //two things: our distance list will reflect the new shortest distance to that node. Our previous list will 
                    //reflect the "node previous" for the new shortest path. 
                    if(candidate < distances[nextNode.node]){
                        //Updating new smallest distance
                        distances[nextNode.node] = candidate;
                        //Updating previous node on shortest path
                        previous[nextNode.node] = smallest;
                        //Updating the priority of this node in our priority queue. nodes is the name of the 
                        //priority queue which we instantiated. 
                        nodes.enqueue(nextNode.node, candidate);
                    }
                }
            }
        }
        console.log(path.concat(smallest).reverse());

    }
}



var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstra("A", "E");