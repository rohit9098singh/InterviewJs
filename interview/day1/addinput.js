let fields=[];

function renderForm(){
   const container = document.getElementById("form-container");
   container.innerHTML="";

   fields.forEach((value,index)=>{
       const input=document.createElement("input");
       input.placeholder=`input ${index+1}`;
       input.value=value;
       input.addEventListener(("input",(e)=>{
          fields[index]=e.target.value;
       }));
       const removeBtn=document.createElement("button");
        removeBtn.innerText="remove";
        removeBtn.addEventListener(("click",()=>{
          fields.splice(index,1);
          renderForm();
        }))

        const div=document.createElement("div")
        div.appendChild(input);
        container.appendChild(div);
   })
}

document.getElementById("add").addEventListener(("click",()=>{
  fields.push("");
  renderForm();
}))

renderForm();

