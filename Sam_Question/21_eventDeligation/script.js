// document.getElementById("category").addEventListener("click", (e) => {
//     const target = e.target;
//     if (target.tagName === "LI" && target.id) {
//         console.log(target.id);
//         window.location.href = "/" + target.id;
//     }
// });

document.getElementById("form").addEventListener("keyup",(e)=>{
    console.log(e)
    if(e.target.dataset.uppercase !=undefined){
        e.target.value=e.target.value.toUpperCase();
    }
})