function longestUniqueSubstring(s){
     let longestSubstring="";
     for (let i=0;i<s.length;i++){
        let seen=[];
        for (let j=i;j<s.length;j++){
            if(seen.includes(s[j])){
               break;
            }
            else{
                seen.push(s[j]);
            }
        }
        if(seen.length >longestSubstring.length){
            longestSubstring=seen.join("");
        }
     }
     return longestSubstring;
}

console.log(longestUniqueSubstring('abcabcbb'));


// working :

// Step i = 0: substring banate hain
// j = 0 → seen = ['a']

// j = 1 → seen = ['a', 'b']

// j = 2 → seen = ['a', 'b', 'c']

// j = 3 → 'a' already hai in seen → break

// Toh pehli substring: "abc" (length 3)

// Ab check karte hain:

// if (seen.length > longestSubstring.length) {
//   longestSubstring = seen.join(''); // "abc"
// }

// longestSubstring ab "abc" ho gaya.


// Step i = 1: ab start karte hain 'b' se
// j = 1 → seen = ['b']

// j = 2 → seen = ['b', 'c']

// j = 3 → seen = ['b', 'c', 'a'] // Yeh “bca” hai

// j = 4 → 'b' already hai in seen → break

// Toh yahan second substring "bca" (length 3)

// Ab check karte hain:
// if (seen.length > longestSubstring.length) {
//   longestSubstring = seen.join('');
// }

// if (3 > 3) {
//   // False, kyunki 3 barabar 3 hai, bada nahi
// }

