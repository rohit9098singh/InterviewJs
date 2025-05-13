function debounce(cb,delay){
    let timer;
    return function(...args){
        clearInterval(timer);
        setTimeout(()=>{
            cb.apply(this,args)
        },delay)
    }
}

const debounceLog=debounce(console.log,300);
console.log(debounceLog("hi"))