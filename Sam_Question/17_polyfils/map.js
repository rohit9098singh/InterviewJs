const arr=[1,2,3,4,5,6,7,8];

Array.prototype.myMap=function(cb){
    let newArr=[];
    for(let i=0;i<this.length;i++){
         newArr.push(cb(this[i]));
    }

    return newArr;
}


console.log(arr.myMap((value)=>value*2)
)
