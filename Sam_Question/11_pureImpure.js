function add(a,b){
    return a+b;
}

console.log(add(3,4))

// impure 

let count=0;

function incementCount(){
    count ++;
    console.log(count);
}
console.log(incementCount())
console.log(incementCount())
console.log(incementCount())