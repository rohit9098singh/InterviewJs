const GITHUB_API = "https://api.github.com/users/akshaymarch7"

const user = fetch(GITHUB_API);

console.log(user)

// jab iska output dekhoge to ek sochne walle bath samne aayege ke ye ek object hoga jo top me pnding show kar raha hoga but jab vo object ko open kiya jayega to vo full field dikhayga but how and why 

// ans => aisa isliye hota hai kyu ke js jab fetch encounter arta hai to usko webapi me dal deta hai jo ke kuch time baaadh fetch kar ke dega deta thik but tab tak js rukega thode he vo jake aage ke code ko execute karaga isliye log pe vo pehle => pending hota hai anad object kholne pe fullfiled hota hai kyu ke jab uska kam khamtam hoga to to vo state change to karega na 

// user.then(function(data){
//    console.log(data.json() )
// });


fetch(GITHUB_API)
  .then(function (response) {
    return response.json(); // ✅ parse JSON
  })
  .then(function (data) {
    console.log(data); // ✅ actual data here
  })
  .catch(function (error) {
    console.error("Error fetching data:", error);
  });