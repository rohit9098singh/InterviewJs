// // pass by value

// let a=10;

// function changeValue(x){
//     x=20;
//     console.log("inside function",x)
// }

// changeValue(a);
// console.log("outside function",a);


// // changed by refernce

// let person={name:'aman'};

// function changePerson(obj){
//    obj.name="bandar";
//    console.log("changed name",obj.name)
// }

// changePerson(person);
// console.log("outside fucntion",person.name)

// var user={
//     name:"rohit"
// }
// function changeUser(a){
//    a.name="amit"
//    console.log(a.name)
// }
// changeUser(user)
// console.log(user.name)

function ChangeValue(a){
    a=10;
    return a
}
let a =20

console.log("changed value",ChangeValue(a));
console.log("yaha original value hai ",a)