import {  userdata } from "../com/json.js";
const singup = async (e) => {
    e.preventDefault();
    let details = {
      name: document.getElementById("name").value,
      Number: document.getElementById("number").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    let email = await userdata.get1(details.email);
  
    if (email.length == 0) {
    
     await userdata.post(details);
      alert("Your signup is done.");
  
    } else {
      alert("Email already exists");
    }
   
  };
  
  document.getElementById("userdata").addEventListener("submit",singup);
  