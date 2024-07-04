const mapper=(product)=>{
    product.map((data)=>{
let img=document.createElement("img");
img.src=data.image
img.setAttribute("class","image")
let title=document.createElement("h2")
title.innerHTML=data.title
let category=document.createElement("p")
title.innerHTML=data.category
let description=document.createElement("p")
description.innerHTML=data.description
let price=document.createElement("button")
price.innerHTML=data.price
let rating=document.createElement("p")
rating.innerHTML=data.rating.rate
let count=document.createElement("p")
count.innerHTML=data.rating.count
let div=document.createElement("div")
div.append(img, title, category, description, price, rating, count)
document.getElementById("show").append(div)
})
}

const getdata = async ()=>{

    let req=await fetch("https://fakestoreapi.com/products")
    let res=await req.json()
    console.log(res);
  mapper(res)
}
getdata()

