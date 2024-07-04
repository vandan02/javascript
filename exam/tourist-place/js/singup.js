import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

const handel=(e)=>{
    e.preventDefault();
    let data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        password:document.getElementById("password").value,
        data:[]
    }

    localStorage.setItem("user",JSON.stringify(data))
    localStorage.setItem("islogin",true)
    document.getElementById("navbar").innerHTML=nav("logout",data.name)
}

document.getElementById("form").addEventListener("submit", handel)

