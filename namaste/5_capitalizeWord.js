function capitalizeWords(sentence) {
    return sentence
        .trim()
        .split(/\s+/)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

//For the purpose of user debugging.
console.log(capitalizeWords("hello world"))
console.log(capitalizeWords("javaScript is FUN")) 
console.log(capitalizeWords("    multiple spaces   "))
console.log(capitalizeWords(" "))
