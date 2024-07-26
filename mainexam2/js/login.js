import { userdata } from "../component/json.js";
let data=localStorage.getItem("role")

if(data=="admin"){
    document.getElementById("admin").style.display="block"
    document.getElementById("user").style.display="none"
}
else{
    document.getElementById("admin").style.display="none"
    document.getElementById("user").style.display="block"
 
}
let arr = await userdata.get()
document.getElementById("userdata").addEventListener("submit",async (e) => {
    e.preventDefault();
    let data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    let email =await userdata.get_email(data.email)

    if (email.length == 0) {
     alert("user not found")

    } 
    else if(email[0].password != data.password) {
        alert("password mismatch")
       
    }
    else {
     alert("login success")
        localStorage.setItem("role",email[0].role)
    }
    });
