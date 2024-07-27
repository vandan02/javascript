import { nav, userdata } from "../api/api.js";
let arr = await userdata.get();

document.getElementById("navbar").innerHTML=nav()

const data1 = async (e) => {
  e.preventDefault();
  let details = {
    name: document.getElementById("name").value,
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
  // let emailExists = false;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i].email === details.email) {
  //     emailExists = true;
  //     break;
  //   }
  // }
  // if (emailExists) {
  //   alert("Email already exists");
  // } else {
  //   userdata.post(details);
  //   alert("your singup is done.");
  // }
};

document.getElementById("data").addEventListener("submit", data1);

