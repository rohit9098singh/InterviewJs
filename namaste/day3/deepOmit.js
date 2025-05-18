function deepOmit(obj,keysToOmit){
    if(obj===null || typeof obj !== "object"){
        return obj
    }

    if(Array.isArray(obj)){
        return obj.map(item=>deepOmit(item,keysToOmit))
    }

    const newObj={};

    for(const key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            if(!keysToOmit.includes(key)){
                newObj[key]=deepOmit(obj[key],keysToOmit) //bject deeply nested ho sakta hai, aur uske andar bhi unwanted keys ho sakti hain. Isiliye:
               //Recursively call karte hain deepOmit() ko
            }
        }
    }
    return newObj;
}

console.log(deepOmit({a:1,b:{c:2,d:3}},["c"]))


//  Maan lo tumhara obj ye hai:
// const obj = {
//   name: "Rohit",
//   password: "1234",
//   info: {
//     age: 20,
//     password: "abcd"
//   }
// };

// ✅ Tum call karte ho:
// deepOmit(obj, ["password"])

// for (const key in obj)
// Ye loop obj ke andar har key ko check karta hai.

// Pehle iteration: key = "name"

// Doosra: key = "password"

// Teesra: key = "info"


// if (Object.prototype.hasOwnProperty.call(obj, key))
// Ye check karta hai ki key obj ke andar direct hai, inherited nahi.

// Ye safety check hai. Example:

// js
// Copy
// Edit
// const obj = Object.create({ inheritedKey: "123" });
// obj.ownKey = "hello";

// for (let key in obj) {
//   console.log(key); // dono keys aayengi: "ownKey", "inheritedKey"
// }

// if (!keysToOmit.includes(key))
// Ye check karta hai: kya key wo key to nahi hai jise hume delete karna hai?

// Agar key keysToOmit me nahi hai, to hum usko nayi object me daal sakte hain.

// Example:

// key = "name" → ✅ daalo

// key = "password" → ❌ skip karo



