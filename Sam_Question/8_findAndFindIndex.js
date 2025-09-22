// find:
// It will return the first element of array that passes specified condition.

function findMethod(){
    let arr=[{name:"rohit",id:1},{name:"aman",id:2}];

    let data=arr.find((d)=>d.id===2);
    return data;
}

console.log(findMethod())


// findByIndex => it will return the index of the first element that satisfy the condition 

 function findIndexMethod(){
    let arr=[{name:"rohit",id:1},{name:"aman",id:2}];
    let data=arr.findIndex((data)=> data.id===2)
    return data;
 }

 console.log(findIndexMethod());


 