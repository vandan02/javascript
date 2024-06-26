import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let data=JSON.parse(localStorage.getItem("user"));

const uimaker=()=>{

    document.getElementById("show").innerHTML=""
 data.map((ele,i)=>{
let img=document.createElement("img");
img.src=ele.img1;
let h2=document.createElement("h2")
h2.innerHTML=ele.title;
let p=document.createElement("p");
p.innerHTML=ele.price


let btn=document.createElement("button");
btn.innerHTML=`like:${ele.like}`;
btn.addEventListener("click",()=>like(i))


let btn2=document.createElement("button");
btn2.innerHTML="wishlist"
btn2.addEventListener("click",()=>wish(i))

let div=document.createElement("div");
div.append(btn,btn2)
let div2=document.createElement("div");
div2.append(img,h2,p,btn,btn2,div)

div2.addEventListener("click",(i)=>{

window.location.href="/tourist-place/pages/wishlist.html"
})
document.getElementById("show").append(div2);

 })


}