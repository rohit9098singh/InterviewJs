let name = {
    fistname: "rohit",
    lastname: "singh",
};

let printfullName = function(hometown, mess, message) {
    console.log(this.fistname + " " + this.lastname + " " + hometown + " " + mess + " " + message);
};

Function.prototype.MyCall = function(obj, ...args) {
    obj.tempFunc = this;             // Assign the function (this) to the object
    let result = obj.tempFunc(...args); // Call it with the passed args
    delete obj.tempFunc;             // Clean up
    return result;
};

printfullName.MyCall(name, "hello", "world", "first");


