function infiniteCurrying(val1){
    return function(val2){
        if(!val2){
            return val1
        }
        return infiniteCurrying(val1+val2)
    }
}

console.log(infiniteCurrying(1)(2)(3)(4)(5)(6)(78)())


const add2=function add(){
    console.log("hello")
}
add2()