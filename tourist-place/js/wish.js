import createTag from "../component/halper.js";
import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()
let index=JSON.parse(localStorage.getItem("index"));

let arr=JSON.parse(localStorage.getItem("add"))||[];
let products=JSON.parse(localStorage.getItem("products"))||[];




let img=createTag("img",products[index].img1)
let img2=createTag("img",products[index].img2)
let img3=createTag("img",products[index].img3)
let title = createTag("h2",products[index].title)
let dss = createTag("div",products[index].dss)
let price =document.createElement("p")
price.innerHTML =`cost:${products[index].price}`
price.setAttribute("class"," p-2 btn btn-primary")  
 let like =document.createElement("p")
like.innerHTML =`like:${products[index].like}`

 like.innerHTML =`like:${products[index].like}`
like.setAttribute("class"," p-2 btn btn-primary")  
let flex=document.createElement("div")
flex.append(price,like)
flex.setAttribute("class","d-flex justify-content-between w-50") 
document.getElementById("show").append(img,img2,img3,title,dss,flex)

document.getElementById("data").addEventListener("submit",(e) => {
    e.preventDefault();
let comment={
    data:document.getElementById("comment").value
}
    arr.push(comment)
    localStorage.setItem("add",JSON.stringify(arr))
})

const uimaker=()=>{
    arr.map((ele)=>{
        let p=document.createElement("p")
        p.innerHTML=ele.data
        console.log(p);
        document.getElementById("comment").append(p)
    })
  
  

}
console.log(arr);
uimaker()