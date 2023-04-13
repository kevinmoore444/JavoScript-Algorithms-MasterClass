//Time complexity is O(2 to the power of N) - very slow
function fib(n){
    if(n <=2) return 1;
    return fib(n-1) + fib(n-2);
}


//Enter: Dynamic Programming“A method for solving a complex problem by breaking it 
//down into a collection of simpler subproblems, solving each of those subproblems 
//just once, and storing their solutions.”

//Memoization
//Essentially memo[1] = 1, memo[2]=1...and then the 4th element in the array fib[3] will be associate with arr[3]
function fib(n, memo=[undefined, 1, 1]){
    if(memo[n] !== undefined) return memo[n];
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

//Tabulation
//This takes a little bit less space than memoization.
//Loop forward calculating one fibNumber at a time and adding to the array until you get to
//the N that you're searching for, then return it. 
function fib_table(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i=3; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}