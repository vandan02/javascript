import navbar from "../component/navbar.js";




document.getElementById("navbar").innerHTML=navbar()
let data=JSON.parse(localStorage.getItem("user"))

document.getElementById("form").addEventListener("submit",(e)=>{
e.preventDefault();
let user={
    email:document.getElementById("email").value,
    password:document.getElementById("password").value,
}

if(data){
if(data.email!=user.email){
    alert("wrong email")
}
else if(data.password!=user.password){
    alert("wrong password")
}
else{
    alert("login sucessfully")
    localStorage.setItem("islogin",true);
    window.location.href="/tourist-place/pages/index.html"
}
}
else{
    alert("signup karo bhai")   
}
})