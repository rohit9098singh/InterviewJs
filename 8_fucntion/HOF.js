 {/**
      const radius=[1,2,3,4];

// calculated the radius 
const calculateRadius= function(r){
    const output=[];
    for(let i=0;i<radius.length;i++){
          output.push(Math.PI * r[i] *r[i])
    }

    return output;
}

// calculated the cicumference

const calculateCircumference=function(r){
   const output=[];
   for (let i=0;i<radius.length;i++)[
      output.push(Math.PI *2 * r[i])
   ]

   return output

}

console.log("radius of all side is ",calculateRadius(radius))
console.log("circumference of all side ",calculateCircumference(radius)) 
    
*/}

// ======================   the problem in the above code is that we are writing nearly the same code multiple times =====================

let radii = [1, 2, 4, 5];

// Function to calculate circumference for a single radius
const calculateCircumference = function(singleRadius) {
    return Math.PI * 2 * singleRadius;
}

// Function to calculate area for a single radius
const calculateArea = function(singleRadius) {
    return Math.PI * singleRadius * singleRadius;
}

// Higher-order function that takes logic and list of radii
const calculate = function(logicFunction, inputRadiiArray) {
    const result = [];
    for (let index = 0; index < inputRadiiArray.length; index++) {
        const currentRadius = inputRadiiArray[index];
        result.push(logicFunction(currentRadius));
    }
    return result;
}

console.log("Areas:", calculate(calculateArea, radii));
console.log("Circumferences:", calculate(calculateCircumference, radii));

