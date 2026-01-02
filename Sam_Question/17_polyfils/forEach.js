const arr=[6,2,3,4,5,6];

Array.prototype.MyForEach=function(cb){
    for(let i=0;i<this.length;i++){
         console.log(cb(this[i])) ;
    }
}
 
function cb(value){
   return   value +2;
}
arr.MyForEach(cb)





