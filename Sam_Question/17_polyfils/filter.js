const arr=[1,2,3,4,5,6,7,8];

Array.prototype.MyFilter=function(cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
         if(cb(this[i])){
            newArr.push(this[i]);
         }
    }
    return newArr;
}

function cb(incomingArray){
    return incomingArray > 2
}

console.log(arr.MyFilter(cb))
