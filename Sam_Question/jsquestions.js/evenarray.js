function filterEven(arr){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
          if(arr[i]%2===0){
            newArray.push(arr[i]);
          }
    }
    return newArray
}

console.log(filterEven([1,2,3,4,5,5,6]))