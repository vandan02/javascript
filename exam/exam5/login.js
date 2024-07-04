let deatil = JSON.parse(localStorage.getItem('singup')) || []


console.log(username, password);

document.getElementById("login").addEventListener("submit", (e) => {
    e.preventDefault()
    let data = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,

    }

console.log(deatil);
console.log(data);

    if (data.username == deatil.username && data.password == deatil.password) {
        alert("login sucessfully")
        window.location.href="/exam5/index.html"
    }
    else {
        alert("login failed")
       
    }



})
