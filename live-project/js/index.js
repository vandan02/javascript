import nav from "../components/navbar.js";

document.getElementById("navbar").innerHTML=nav()
let product=JSON.parse(localStorage.getItem("product"));
let islogin=localStorage.getItem("islogin");
let userData=localStorage.getItem("user");

document.getElementById("navbar").innerHTML=nav()

if(islogin){
    document.getElementById("navbar").innerHTML =nav("logout", userData.name)
}
else{
     window.location.href="/live-project/pages/login.html"
}

document.getElementById("logout").addEventListener("click",(e)=>{
    e.preventDefault()
    localStorage.removeItem("islogin")
   window.location.href="/live-project/pages/login.html"
})


const mapper=(data)=>{
    document.getElementById("product-show").innerHTML=""
    data.map((item)=>{
    let img=document.createElement("img");
    img.src=item.img
    let h2=document.createElement("h2");
    h2.innerHTML=item.title
    let div=document.createElement("div");
    div.innerHTML=item.cat
    let div2=document.createElement("div");
    div2.innerHTML=item.price
  
    
    let div3=document.createElement("div");
    div3.setAttribute("class", "border")
    div3.append(img,h2, div, div2)
    document.getElementById("product-show").append(div3)
    })
    }
    mapper(product)
