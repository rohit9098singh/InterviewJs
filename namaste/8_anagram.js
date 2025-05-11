function isAnagram(str1,str2){
    if(str1.length !==str2.length){
        return false;
    }
    const firstSortedString=str1.split("").sort().join();
    const secondSortedString=str2.split("").sort().join();
    return firstSortedString === secondSortedString;
}

console.log(isAnagram("listen","hhahaj"))