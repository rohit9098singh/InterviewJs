function validatePalindrom(str){
      let refinedStr="";

      for(let i=0;i<str.length;i++){
          let char=str[i].toLowerCase();
          if(char>="a" && char <="z" ||char>="0" && char <="9" ){
            refinedStr +=char;
          }
      }

      let reverseStr="";
      for (let i=refinedStr.length;i>0;i--){
         refinedStr=reverseStr+refinedStr[i];
      }

      return refinedStr===reverseStr;
}

console.log(validatePalindrom("race a race"))
console.log(validatePalindrom(""))