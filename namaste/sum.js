function addAnyNumber(...args){
   return  args.reduce((acc,curr)=>acc+curr,0)
}

console.log(addAnyNumber(1,2,3,4,5,6)) 