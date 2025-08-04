function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  // Convert to array, sort, and join back to string
  let sorted1 = str1.split('').sort().join('');
  let sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}
console.log(isAnagram("listen", "silent"));  // true
console.log(isAnagram("hello", "world"));    // false


