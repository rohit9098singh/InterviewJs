let count =0;

const intervalId=setInterval(() => {
    console.log(count++);
    if(count>5){
      clearInterval(intervalId);}
    
}, 1000);




