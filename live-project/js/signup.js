import getdata from "../components/helper.js";
import nav from "../components/navbar.js";


document.getElementById("navbar").innerHTML=nav()
document.getElementById("form").addEventListener("click", (e)=>{
e.preventDefault();
let data={
    name:getdata("name"),
    email:getdata("email"),
    password:getdata("password"),

}
localStorage.setItem("user",JSON.stringify(data))
localStorage.setItem("login",true)
document.getElementById("navbar").innerHTML=nav("logout",data.name)
w

})

