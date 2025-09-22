function toCheckPrime(num){
    if(num ===1){
        return 
    }
    else{
        for(let i=2;i<num;i++){
            if(num %i===0){
               return "it is a not a prime  number"
            }
        }
        return "it is a prime number"
    }
}

const num=10;
console.log(toCheckPrime(num))


function check(arr1,arr2){
    for (let char of arr1){
        if(!arr2.includes(char * char)){
            return false;
        }
    }
    return true
}

console.log(check([1,2,3,4],[1,4,9,16]));
// true


function anagram(arr1,arr2){
    let count={};
    for(let char of arr1){
        count[char]=(count[char] || 0) +1;
    }
    for(let char of arr2){
        if(!count[char]){
              return false;
        }
        else{
            count[char]--;
        }
    }
    return true
}
console.log(anagram([1,2,3,4],[1,2,3,4]))

function uniqueObj(arr){
    let seen={}
    let newArray=[];
    for(let key of arr){
        let char =JSON.stringify(key)
        if(!seen[char]){
            newArray.push(char);
            seen[char]=true;
        }
    }
    return newArray;
}
let arr = [{name: "sai"},{name:"Nang"},{name: "sai"}]
console.log(uniqueObj(arr))


// string into an object 
function stringToObj(str){
    try {
        return JSON.parse(str);
    } catch (e) {
        return "Invalid JSON string";
    }
}

console.log(stringToObj('{"name":"Rohit","age":21}')); 
// { name: 'Rohit', age: 21 }
