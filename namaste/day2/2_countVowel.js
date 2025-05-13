function countVowel(str) {
    const incomingString = str.trim().toLowerCase().replace(/[^a-z]/gi, "");  
    console.log(incomingString)
    let count = 0;
    let consonants = 0;
    let vowels = "aeiou";  

    // Iterate through the string
    for (let i = 0; i < incomingString.length; i++) {
        let char = incomingString[i];
        if (vowels.includes(char)) {
            count++;  
        } else {
            consonants++;  
        }
    }
    return { vowels: count, consonants: consonants }; 
}

console.log(countVowel("rohi@#%#t"));