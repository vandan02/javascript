import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let add=JSON.parse(localStorage.getItem("products"))||[];
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
}
add.push(data);
localStorage.setItem("products",JSON.stringify(add))
});