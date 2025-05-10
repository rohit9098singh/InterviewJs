function toTask(callback){
    console.log("hello")
    callback();
}

function sayComplete(){
    console.log("complete")
}
toTask(sayComplete)

{/**Normally hum function ko direct call karte hain jaise print() ya calculate().

Lekin yahaan humne ek function (callback) ko doosre function ko de diya (doTask) aur bola:
"Tu jab chahe ise call kar lena."

Matlab: control humne khud nahi liya, control dusre function ke haath me de diya. */}