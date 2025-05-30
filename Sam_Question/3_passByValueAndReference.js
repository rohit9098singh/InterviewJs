// pass by value

let a=10;

function changeValue(x){
    x=20;
    console.log("inside function",x)
}

changeValue(a);
console.log("outside function",a);


// changed by refernce

let person={name:'aman'};

function changePerson(obj){
   obj.name="bandar";
   console.log("changed name",obj.name)
}

changePerson(person);
console.log("outside fucntion",person.name)