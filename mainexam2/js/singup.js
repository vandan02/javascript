import { userdata } from "../component/json.js";

  
 
  document.getElementById("userdata").addEventListener("submit",async (e)=>{
    e.preventDefault();
    let userdetail={
      email:document.getElementById("email").value,
      name:document.getElementById("name").value,
      role:document.getElementById("role").value,
      password:document.getElementById("password").value
    }
    let email=await userdata.get_email(userdetail.email)
    console.log(email);
    if(email==0){
      userdata.post(userdetail)
      alert("your signup is done")
    }else{
      alert("signup failed")
    }

  });
  