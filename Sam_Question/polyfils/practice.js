let name={
    firstName:"Rohit",
    lastName:"Singh"
}

function printName(city,state){
    console.log(`${this.firstName} + " " + ${this.lastName} + " "+ ${this.city} + " "+ ${this.state}`);
}

let printFullName=printName.bind(name,"banglore","darshahalli");

printFullName();

printName.call(name,"banlore","jha");
printName.apply(name,["banglore,jhakenag"])


// making the ployfils

Function.prototype.MyBind=function(...args){
    let obj=this
    params=args.slice(1);
    return function(...args2){
         obj.apply(args[0],[...params,...args2]);
    }
}

let printFullName2=printName.MyBind(name,"banglore","soladevanahalli");

printFullName2();