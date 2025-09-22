let user={
    name:"Rohit",
    sex:"male",
    age:23
}

for(let key in user){
    console.log("normal object",key, ":",user[key])
}

for(let [key,value] of Object.entries(user)){
    console.log("with object.entires",key ,":",value)
}


let array=[1,2,3,4];
for(let value of array){
    console.log("normal array",value)
}
