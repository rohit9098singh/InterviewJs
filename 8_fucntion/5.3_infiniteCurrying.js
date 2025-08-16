// Infinite currying means:
// You can keep calling the function again and again with a single argument.
// But at some point, when you stop giving more arguments, the function should return the final result.

function infiniteCurrying(val1){
    return function(val2){
        if(!val2){
            return val1
        }
        return infiniteCurrying(val1+val2)
    }
}

console.log(infiniteCurrying(1)(2)(3)(4)(5)(6)(78)())


function infiniteCurrying(arg1){
    return function(args2){
        if(!args2){
            return arg1
        }
        return infiniteCurrying(arg1+args2)
    }
}

