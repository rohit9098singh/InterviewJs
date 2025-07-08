let count=0;
const getData=()=>{
    console.log("fetching data.....",count++)
}

const doSomeMagic=(func,delay)=>{
    let timer;
    return function(){
        let context=this;
        let  args=arguments;
        clearTimeout(timer);
        timer=setTimeout(()=>{
          func.apply(context,args);
        },delay)
    }
}

const betterFunction=doSomeMagic(getData,300);



