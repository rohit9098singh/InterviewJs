const arr=[1,2,3,4,5,6,7,8];

// arr.reduce((acc,curr)=>{},0)


Array.prototype.myReduce=function(cb,initialValue){
    let index=0;
    if(initialValue=== undefined){
        initialValue=this[0];
        index=1;
    }
    for(let i=index;i<this.length;i++){
          initialValue=cb(initialValue,this[i]);
    }
    return initialValue;
}

console.log(arr.myReduce((acc,curr)=>acc+curr,5))


