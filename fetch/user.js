
async ()=>{
let response = await fetch('localhost:3000/users');
let data = await response.json();
console.log(data)
}

fetch('localhost:3000/user', {
    body: new FormData(document.querySelector('.form')),
    method: 'POST',
    body: JSON.stringify("OBJECT here"),
    headers: {"Content-Type": "application/x-www-form-urlencoded",}

}).then(res => res.json())
