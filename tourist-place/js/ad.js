import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let add=JSON.parse(localStorage.getItem("product"))||[];
document.getElementById("form").addEventListener("submit",(e)=>{
e.preventDefault();
let data={
img1: document.getElementById("img1").value,
img2: document.getElementById("img2").value,
img3: document.getElementById("img3").value,
title:document.getElementById("title").value,
dss: document.getElementById("dss").value,
price: document.getElementById("price").value,
like:0,
id: add.length == 0 ? 1 : add[add.length-1].id + 1
}
add.push(data)
localStorage.setItem("product",JSON.stringify(add))
});