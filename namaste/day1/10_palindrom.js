function validatePalindrom(str){
     let cleanedStr='';

     for(let i=0;i<str.length;i++){
        const char=str[i].toLowerCase();
        if((char>="a" && char<="z") || (char >="0" && char<="9")){
            cleanedStr +=char;
        }
     }

     let revStr="";
     for(let i=cleanedStr.length-1;i>=0;i--){
        revStr +=cleanedStr[i]
     }

     return cleanedStr === revStr;
}

console.log(validatePalindrom("race a race"));
console.log(validatePalindrom(" "));