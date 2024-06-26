import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let data=JSON.parse(localStorage.getItem("user"));

const uimaker=()=>{

    document.getElementById("show").innerHTML=""
 data.map((ele,i)=>{
let img=document.createElement("img");
img.src=ele.img1;
let img2=document.createElement("img");
img.src=ele.img2;
let img3=document.createElement("img");
img.src=ele.img3;
let h2=document.createElement("h2")
h2.innerHTML=ele.title;
let div1=document.createElement("div")
h2.innerHTML=ele.discription;
let div=document.createElement("div")
h2.innerHTML=ele.title;
let p=document.createElement("p");
p.innerHTML=ele.price







let div2=document.createElement("div");
div2.append(img,img2,img3,h2,div,p)


document.getElementById("show").append(div2);

 })


}