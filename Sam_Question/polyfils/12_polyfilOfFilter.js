const arr = [1, 2, 3, 4, 5];

const filteredArr = arr.filter((el, i, arr) => (
  el > 3
));

console.log(filteredArr); 


Array.prototype.MyFilter=function(cb){
    let newFilteredArray=[];
    for(let i=0;i<this.length;i++){
          const modifiedValue=cb(this[i],i,this);

          return newFilteredArray.push(modifiedValue);
    }
    return newFilteredArray;
}

const arr2 = [1, 2, 3, 4, 5];

const filteredArr2 = arr.filter((el, i, arr) => (
  el > 3
));

console.log(filteredArr2); 