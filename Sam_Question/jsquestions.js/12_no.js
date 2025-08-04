function maxConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      currentCount++;
      if (currentCount > maxCount) {
        maxCount = currentCount;
      }
    } else {
      currentCount = 0; 
    }
  }

  return maxCount;
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 0, 1]));  


 