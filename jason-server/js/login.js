import { nav, userdata } from "../api/api.js";
let arr = await userdata.get()

document.getElementById("navbar").innerHTML=nav()
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
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].email === userdata.email || arr[i].password === userdata.password) {
    //         if (arr[i].email !== userdata.email) {
    //             alert("user not found")
    //             break
    //         }
    //         else if (arr[i].password !== userdata.password) {
    //             alert("password mismatch")
    //             break
    //         }
    //         else if (arr[i].email === userdata.email && arr[i].password === userdata.password) {
    //             alert("login successful")
    //             break;
    //         }
    //     }
    //     else{
    //         alert("user not found") 
    //         break;
    //     }
    // }
    });
