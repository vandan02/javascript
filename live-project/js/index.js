import nav from "../components/navbar.js";

let islogin = localStorage.getItem('islogin')||false;
let userData = JSON.parse(localStorage.getItem("user"))  
document.getElementById("nav").innerHTML=nav()

if(islogin){
    document.getElementById("nav").innerHTML = nav("logout", userData.name)
}
else{
     window.location.href="/live-project/pages/login.html"
}

document.getElementById("logout").addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.removeItem("islogin")
    window.location.href="/live-project/index.html"
})
