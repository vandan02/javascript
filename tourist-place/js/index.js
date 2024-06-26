import navbar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navbar()

let product=JSON.parse(localStorage.getItem("product"));
const like=(index)=>{
    product[index].like+=1  
    console.log(product[index].like);
    localStorage.setItem("product",JSON.stringify(product))
    uimaker(product)
}
let data=JSON.parse(localStorage.getItem("user"))||[]

const wish=(index)=>{
    data.push(product[index])
  localStorage.setItem("user",JSON.stringify(data))
    uimaker(product)
    console.log(product[index]);
    console.log(data);
}



const uimaker=(item)=>{
 document.getElementById("show").innerHTML=""
 item.map((ele,i)=>{
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
const handleSearch = (value) => {
    let temp = product.filter((ele) => ele.title.includes(value));
    uimaker(temp);
}

const handleKeypress = (e) => {
    //  enter keypress
    //   if(e.key=="Enter") {
        let searchValue =document.getElementById("searchValue").value;
        handleSearch(searchValue)
    //   }

}


document.getElementById("searchValue").addEventListener("keypress", handleKeypress)





const like1 =(sort)=>{
    if(sort=="lth"){
        let temp=product.sort((a,b)=> a.like - b.like)
       uimaker(temp)
    }
    else{
        let temp=product.sort((a,b)=> b.like - a.like)
        uimaker(temp)
    }
}
const price =(sort)=>{
    if(sort=="high"){
        let temp=product.sort((a,b)=> b.price - a.price)
       uimaker(temp)
    }
    else{
        let temp=product.sort((a,b)=> a.price - b
        .price)
        uimaker(temp)
    }
}
document.getElementById("htl").addEventListener("click", () => like1("htl"));
document.getElementById("lth").addEventListener("click", () => like1("lth"));
document.getElementById("high").addEventListener("click", () => price("high"));
document.getElementById("low").addEventListener("click", () => price("low"));
uimaker(product)