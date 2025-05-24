// map
const nums = [1, 2, 3, 4];

const doubled = nums.map(num => num * 2);

console.log(doubled);  //[ 2, 4, 6, 8 ]

//====================== forEach=======================

const num=[1,2,3,4];

nums.forEach((num)=>(
    console.log(num*2)
))

//Sirf kaam ho raha hai (like printing) — koi array return nahi hota.
// output :    2
            // 4
            // 6
            // 8 