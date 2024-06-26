import getdata from "../components/helper.js";
import nav from "../components/navbar.js";

let arr=JSON.parse(localStorage.getItem("product"))||[]

document.getElementById("navbar").innerHTML=nav()

const data=(e)=>{
    e.preventDefault();
    
let data={
 img:getdata("img"),
 title:getdata("title"),
 cat:getdata("select"),
 price:getdata("price"),
 id:arr.length == 0 ? 1 : arr[arr.length - 1].id + 1
}
arr.push(data);
localStorage.setItem("product", JSON.stringify(arr));
}




document.getElementById("form").addEventListener("submit",data);