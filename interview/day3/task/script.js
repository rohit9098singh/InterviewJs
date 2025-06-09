const arr=["amit","bhuvan","rohit"]

const tochange=document.getElementById("hello");

let index=-1;

tochange.addEventListener("click",()=>{
       if(index ===-1){
        tochange.innerText="hello"
        index++
       }
       else{
        tochange.innerText=arr[index]
        index++;
        if(index>=arr.length){
            index =-1
        }
       }
})
