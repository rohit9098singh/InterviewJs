function removeDublicates(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

console.log(removeDublicates([1,2,2,3,4,4]))

console.log(removeDublicates(["a","b","a","c"]))

console.log(removeDublicates([1,"1",1]))

console.log(removeDublicates([]))

console.log(removeDublicates([true,false,true]))

