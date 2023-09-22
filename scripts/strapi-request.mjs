const url = "http://localhost:1337/api/reviews";
const response = await fetch(url);
const body = await response.json();
console.log(body);