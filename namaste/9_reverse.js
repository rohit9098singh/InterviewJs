function reverseWords(sentence) {
    const convertedString = sentence.toString().trim();
    return convertedString.split(/\s+/).map((word)=>word.split("").reverse().join("")).join(" ")
}

console.log(reverseWords("Hello World"))
console.log(reverseWords("JavaScript is fun"))
console.log(reverseWords("   Lead   and  trail"))
console.log(reverseWords("OneWord"))