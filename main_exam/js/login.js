import {  userdata } from "../com/json.js";
let arr = await userdata.get()
document.getElementById("userdata").addEventListener("submit",async (e) => {
    e.preventDefault();
    let data = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    let email =await userdata.get1(data.email)

    if (email.length == 0) {
     alert("user not found")
    } 
    else if(email[0].password != data.password) {
        alert("password mismatch")
    }
    else {
     alert("login success")
    }
   
    });
