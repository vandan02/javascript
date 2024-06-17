import getdata from "../components/helper.js";
import nav from "../components/navbar.js";

let data=JSON.parse(localStorage.getItem("user"))

document.getElementById("navbar").innerHTML=nav()
document.getElementById("form").addEventListener("submit",(e)=>{
e.preventDefault();
let user={
    email:getdata("email"),
    password:getdata("password"),
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
    window.location.href="/live-project/index.html"
}
}
else{
    alert("signup karo bhai")

    setTimeout(()=>{ window.location.href="/live-project/pages/signup.html"},300)
   
    
}
})