
let name = {
    fistname: "rohit",
    lastname: "singh",
};

let printfullName = function(hometown, mess, message) {
    console.log(this.fistname + " " + this.lastname + " " + hometown + " " + mess + " " + message);
};


Function.prototype.myCall=function(obj,...args){
    obj.tempFunc=obj;
    const result=obj.tempFunc(...args);
    delete obj.tempFunc;
    return result
}


Function.prototype.myApply=function(obj,args=[]){
     obj.tempFunc=obj;
    const result=obj.tempFunc(...args);
    delete obj.tempFunc;
    return result
}

Function.prototype.myBind=function(obj,...args){
    const originalFunc=this;
    return function(...newArr){
         return originalFunc.apply(obj,[...args,...newArr]);
    }
}

printfullName.myCall(name, "hello", "world", "first");

printfullName.myApply(name, ["hello", "world", "first"]);


let boundFunc = printfullName.MyBind(name, "hello");
boundFunc("world", "first");


