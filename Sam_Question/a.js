const str="rohit OH";
function extractVowel(str){
    let newStr=""
   for(let char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char=== "u"|| char === "A" || char === "E" || char === "I" || char === "O" || char=== "U"){
               newStr = newStr+char;
        }
   }
   return newStr;
}

console.log(extractVowel(str))


let newString="i am a very handsome and dashing and dusky"

function findLongest(str){
    let words=str.split(" ");
    console.log(words)
    let longest="";
    for(let i=0;i<words.length;i++){
           if(words[i].length > longest.length){
               longest=words[i];
           }
    }
    return longest;
}
console.log(findLongest(newString))