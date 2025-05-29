const a =1<2<3;
const b=1>2>3;

console.log(a,b);


// falsy values = false, 0, "", null, undefined, NaN
const removeFalsy = (arr) => {
  return arr.filter(Boolean);
};

const mixedArray = [0, "hello", false, undefined, 42, "", null, "JS", NaN];

console.log(removeFalsy(mixedArray));
