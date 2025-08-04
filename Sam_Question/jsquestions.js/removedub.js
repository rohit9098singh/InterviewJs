let arr=[1,1,2,2,3,3,5,5,];


function removeDublicate(arr){
    let newArray=[];

    for (let i=0;i<arr.length;i++){
         let isDublicate=false;
         for(let j=0;j<newArray.length;j++){
            if(arr[i]===newArray[j]){
                isDublicate=true
                break;
            }
         }
         if(!isDublicate){
            newArray.push(arr[i])
         }
    }
    return newArray
}

console.log(removeDublicate(arr));

