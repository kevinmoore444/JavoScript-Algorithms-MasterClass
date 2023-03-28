

//Bubble Sort - from beginning to end of array, swap the first value with the 
//second value if the first value is greater. The result is that, for each iteration 
//through the array, the highest value bubbles to the top. It involves nested for loops 
//so not really efficient. If code is optimized, it’s useful in arrays that are almost 
//sorted. Time complexity: O(n2)

function bubbleSort(arr){
    var noSwaps;
    for(var i= arr.length; i>0; i--){
        noSwaps = true;
        for(var j=0; j<i-1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log("Bubble Sort Solution: " + bubbleSort([37, 45, 29, 8]))



//Selection Sort - Nested For loops- Iterate through the entire array to find 
//the smallest value, swap it with the first value in the array, progress to the 
//2nd value in the array and repeat. Time complexity O(n2)

function selectionSort(arr){
    for(var i = 0; i< arr.length; i++){
        var lowest = i;
        for(var j = i+1; j<arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j; 
            } 
        }
        if(i !== lowest){
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        }
    }
    return arr;
}


console.log("Selection Sort Solution: " + selectionSort([0, 2, 43, 22, 10, 19, 17]))


//Insertion Sort - Building up a sorted “left-side” of the array by selecting 
//one value at a time and inserting it in it’s correct position on the left. 
//Very good if the data is nearly sorted. Time complexity O(n2)

function insertionSort(arr){
    for(var i = 1; i<arr.length; i++){
        var currentVal = arr[i];
        for(var j = i-1; j>= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal
    }

    return arr;
}

console.log("Insertion Sort Solution: " + insertionSort([2,1,9,76,4]))


//Merge Sort - Continue splitting arrays in half until each value has it’s own 
//individual array. Then you merge each individual array with one other array until 
//everything is merged together - and merging two sorted arrays is a relatively 
//easy process. 

//First write a merge function:

function merge(arr1, arr2){
    let results = []
    let i = 0;
    let j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr2[j] >= arr1[i]){
            results.push(arr1[i])
            i++;
        }
        else{
            results.push(arr2[j])
                j++;
        }
    }
    while(i<arr1.length){
        results.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        results.push(arr2[j])
    }
    return results;
}

//Merge Sort 

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

console.log("Merge Sort Solution " + mergeSort([10, 24, 76, 73, 72, 1, 9]))