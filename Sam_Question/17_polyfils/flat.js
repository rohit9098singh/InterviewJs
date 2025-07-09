const arr2 = [1, [2, [3, [4]]]];
const flatArr = arr2.flat(Infinity);

console.log(flatArr);
// Output: [1, 2, 3, 4]


// Designing the polyfills for that 
Array.prototype.myFlat=function(dept=1){
      const result=[];
       function flattern(arr,d){
          for(let item of arr){
              if(Array.isArray(item) && d>0){
                  flattern(item,d-1);
              }
              else{
                result.push(item)
              }
          }
       }
       flattern(this,dept)
       return result
}

const arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];

console.log(arr.myFlat(1));        
// Output: [1, 2, 3, 4, [5, 6, [7, 8]]]

console.log(arr.myFlat(2));        
// Output: [1, 2, 3, 4, 5, 6, [7, 8]]

console.log(arr.myFlat(Infinity)); 
// Output: [1, 2, 3, 4, 5, 6, 7, 8]