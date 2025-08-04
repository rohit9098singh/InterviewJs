function checkPalindrom(str){
    let len=str.length;  //5
    for(let i=0;i<len/2;i++){
        if(str[i] !==str[len-i-1]){
            return "not palindrom"
        }
    }
    return "palindrom"
}

console.log(checkPalindrom("madam"))