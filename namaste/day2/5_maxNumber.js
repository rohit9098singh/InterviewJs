function findMaxNumber(arr){
    if(arr.length===0) return null;

    let maxNumber=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>maxNumber){
            maxNumber=arr[i];
        }
    }
    return maxNumber;
}