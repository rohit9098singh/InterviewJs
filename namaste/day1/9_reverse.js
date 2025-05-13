function reverseWords(sentence) {
    return (sentence.match(/(\s+|\S+)/g) || [])
        .map(token => token.trim() ? token.split('').reverse().join('') : token)
        .join('');
}



console.log(reverseWords("Hello World"))
console.log(reverseWords("JavaScript is fun"))
console.log(reverseWords("   Lead   and  trail"))
console.log(reverseWords("OneWord"))

module.exports = reverseWords