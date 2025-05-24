let a=[1,2,3,4,5,6,7,8];

let mappedValue=a.map((value)=>(
 value*2
));

let filteredData=a.filter((val)=>(
    val%2===0
))

console.log(mappedValue);
console.log(filteredData)