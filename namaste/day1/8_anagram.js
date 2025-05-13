function isAnagram(str1,str2){
    // Clean both strings: remove non-letters and make lowercase
    const cleanStr1 = str1.replace(/[^a-z]/gi, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-z]/gi, '').toLowerCase();

    // Check length after cleaning
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Sort and compare
    const sortedOne = cleanStr1.split("").sort().join("");
    const sortedTwo = cleanStr2.split("").sort().join("");

    return sortedOne === sortedTwo;
}

console.log(isAnagram("listen","hhahaj"))