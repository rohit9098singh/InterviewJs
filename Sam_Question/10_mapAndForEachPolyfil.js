if (!Array.prototype.map) {
  Array.prototype.map = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        result.push(callback(this[i], i, this));
      }
    }
    return result;
  };
}
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]

// ====================== forEach ======================
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        callback(this[i], i, this);
      }
    }
    return result;
  };
}
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((item, index) => {
  console.log(index + ": " + item);
});
