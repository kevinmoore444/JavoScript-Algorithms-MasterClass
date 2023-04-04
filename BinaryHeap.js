class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }


    insert(element){
        this.values.push(element)
        this.bubbleUp(element);
    }

    //Helper function for insert
    bubbleUp(element){
        //This is the newly inserted element
        var index = this.length-1
        
        while(true){
            let parentIndex = Math.floor(index-1)/2;
            let parent = this.values[parentIndex]
                if(element <= parent){
                    break;
                }
                this.values[parentIndex] = element;
                this.values[index] = parent;
                index = parentIndex;
            }

    }

    extractMax(){
        //Pop off the last value and insert it at the head (max). 
        //Then perform sinkdown to get that new head into it's proper place.
        const max = this.values[0]
        const end = this.values.pop();
        this.values[0] = end;
        //Condition if there is only one value left in the binary heap. You will pop it and leave nothing left, 
        //(as opposed to reinserting that value at the head and sinking down)
        if(this.values.length > 0) {
        this.sinkDown();
        }
        return max;
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
                if(leftChild > element){
                    swapFlag = leftChildIdx;
                }
            }

            //Same logic as the block of code above, BUT, if the right child is greater than the left child,
            //then the parent needs to swap with the right child and the swap flag is overwritten. 
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx]
                if((swapFlag === null && rightChild > element) || (swapFlag !== null && rightChild > leftChild)) 
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
    




