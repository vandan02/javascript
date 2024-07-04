import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let add=JSON.parse(localStorage.getItem("productss"))||[]

const value=(e)=>{
    e.preventDefault();
    let data={
        img1:document.getElementById("img1").value,
        img2: document.getElementById("img2").value,
        img3: document.getElementById("img3").value,
        title:document.getElementById("title").value,
        dss: document.getElementById("dss").value,
        price: document.getElementById("price").value,
        comment:[],
        like:0,
    }
    add.push(data);
    localStorage.setItem("productss",JSON.stringify(add))
    }

document.getElementById("data").addEventListener("submit",value)
