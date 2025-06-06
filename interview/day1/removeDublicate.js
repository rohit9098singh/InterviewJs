// You have an array of numbers and need to remove duplicates. You cannot use external libraries like Lodash. How would you achieve this in JavaScript?

const numbers = [1, 2, 3, 2, 4, 1, 5];

const uniqueValue=[...new Set(numbers)];
console.log(uniqueValue)


// filter and indexof

const nextUnique=numbers.filter((value,index,self)=>{
    return self.indexOf(value)===index;
})

console.log(nextUnique);

// without any fucntion

const num=[1, 2, 3, 2, 4, 1, 5]

const unique=[];

for(let i=0;i<num.length;i++){
    let alreadyExist=false;

    for(let j=0;j<unique.length;j++){
        if(num[i]===unique[j]){
            alreadyExist=true;
            break;
        }
    }
    if(alreadyExist){
        unique.push(num[i]);
    }
}

console.log(unique);
