const data = await fetch("api");
const div = document.getElementById("todo");
div.innerHTML = data;


// data might come from an untrusted source (like an API).

// Using innerHTML directly with unknown content allows that content to inject malicious scripts into your page.


// Use textContent if inserting plain text
// div.textContent = data;
// parse the data with .json();