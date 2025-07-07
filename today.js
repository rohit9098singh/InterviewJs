// console.log(a)
// console.log(b)
// var a = b = 5;

// const func1 = (val) => {
//     console.log(this.name , val)
// }

// func1.call({ name: "Abhishek" } , "abhishek")

const user = {
    id: 123,
    name: "Abhishek",
    address: {
        currentlocation: "Banglore",
        homeTown: "Bihar"
    }
}


// Object.defineProperty(user,"id",{
//     writable:false,
// })

// user.id=1234
// console.log(user.id)

// Object.defineProperty(user.address,"homeTown",{
//     writable:false
// })

// user.address.homeTown="banglore"
// console.log(user.address.homeTown)

var removeElement = function(nums, val) {
    let newArray=[]
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!==val){
             newArray.push(nums[i])
        }
    }
    return newArray;
};

console.log(removeElement([1,2,3,1,2],2))