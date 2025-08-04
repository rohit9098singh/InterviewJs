function checkPrime(number){
    for(let i=2;i<number;i++){
          if(number%i===0){
            return false
          }
          return true
    }
}

console.log(checkPrime(11))


const findReverse = (sampleString) => {
 let reverse = "";
 for (let i = sampleString.length - 1; i >= 0; i--) {
 reverse += sampleString[i];
 }
 console.log(reverse);
};
findReverse("Hello Iam Saikrishna Ui Developer");