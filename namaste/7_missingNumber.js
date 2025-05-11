function findMissingNumber(nums) {
    let n=nums.length;
    let expectedSum=(n*(n+1))/2;
    let actualSum= nums.reduce((acc,curr)=>acc+curr,0)
    return expectedSum-actualSum;
}
console.log(findMissingNumber([3,0,1]));