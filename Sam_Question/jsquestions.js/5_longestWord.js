function longestWord(sentense){
    let array=sentense.split(" ");
    let longestWord=""

    for(let i=0;i<array.length;i++){
          if(array[i].length>longestWord.length){
                longestWord=array[i]
          }
    }
    return longestWord

}

console.log(longestWord("hi my name is rohit singh from banglore"))