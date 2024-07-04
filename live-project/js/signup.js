import getdata from "../components/helper.js";
import nav from "../components/navbar.js";


document.getElementById("navbar").innerHTML=nav()

const handel=(e)=>{
    e.preventDefault();
    let data={
        name:getdata("name"),
        email:getdata("email"),
        password:getdata("password"),
    }

    localStorage.setItem("user",JSON.stringify(data))
    localStorage.setItem("islogin",true)
     window.location.href="/live-project/index.html"
    document.getElementById("navbar").innerHTML=nav("logout",data.name)
}

document.getElementById("form").addEventListener("submit", handel)


