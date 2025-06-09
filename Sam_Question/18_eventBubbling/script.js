// Jab hum addEventListener lagate hain, to wo 3 parameters leta hai:

// element.addEventListener(eventType, callback, useCapture);

// eventType → jaise 'click', 'keyup', etc.

// callback → jo function chalega jab event trigger hoga

// useCapture → true ya false, jo batata hai ki event capturing phase me handle hoga ya bubbling phase me

// false or no parameter => event bubbling
// true=> event caputring  

const parent=document.getElementById("parent");

parent.addEventListener("click",function(){
    console.log("Parent Clicked")
},false)

const child =document.getElementById("child")
child.addEventListener("click",()=>{
    console.log("child cliked ")
},false)

// output dega :   Child clicked
//                 Parent clicked

//====================== Bubbling ko Rokna ho to? ========================

// 