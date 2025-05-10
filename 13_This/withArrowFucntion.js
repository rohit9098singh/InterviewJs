const object={
    a:10,
    x:function(){
        console.log(this)// output the object
    },
    y:()=>{
        console.log(this)// jsut because it comes from its lexical scope so at prsnt it is in global lexical scope so the value of this is window
    }
}
object.x();
object.y();

// another case 

const object2={
    name:"hello world",
    x:function(){
        let y=()=>{
            console.log(this)
        }
        y();
    }
}
object2.x();