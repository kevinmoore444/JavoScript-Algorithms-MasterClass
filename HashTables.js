class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i = 0; i<Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    
    //Accepts a key and a value
    //Hashes the key
    //Stores the key-value pair in the hash table array via separate chaining 
    //O(1) run time
    set(key, value){
        let index = this._hash(key);
        //Initialize empty array if there isn't one already
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        //Push an array storing the key and value into he keymap
        this.keyMap[index].push([key, value]);
    }


    //Accepts a key 
    //Hashes the key
    //Retrieves the value O(1) run time
    get(key){
        let searchIndex = this._hash(key);
        if(this.keyMap[searchIndex]){
            //Iterating over all sub-arrays within a particular array at the serachIndex.
            for(let i = 0; i < this.keyMap[searchIndex].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }

    values(){
        let valuesArr = [];
        //For each array in the keymap
        for(let i=0; i<this.keyMap.length; i++){
            //If there is an array of key/values at a particular place in the keymap
            if(this.keyMap[i]){
                //For each sub-array within that particular array
                for(let j=0; j<this.keyMap[i].length; j++){
                    //If this particular value doesn't appear already
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                    valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr;
    }

    keys(){
        let keysArr = [];
        //For each array in the keymap
        for(let i=0; i<this.keyMap.length; i++){
            //If there is an array of key/values at a particular place in the keymap
            if(this.keyMap[i]){
                //For each sub-array within that particular array
                for(let j=0; j<this.keyMap[i].length; j++){
                    //If this particular key doesn't appear already
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                    keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr;
    }

    

}

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
ht.set("purple", "#DDA0DD")
ht.set("violet", "#DDA0DD")

console.log(ht.keys());
console.log(ht.values());