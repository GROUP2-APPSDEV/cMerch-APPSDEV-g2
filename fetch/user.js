
async ()=>{
let response = await fetch('localhost:3000/users');
let data = await response.json();
console.log(data)
}
