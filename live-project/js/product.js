import nav from "../components/navbar.js";
document.getElementById("navbar").innerHTML=nav()
let product=JSON.parse(localStorage.getItem("product"));
let cart=JSON.parse(localStorage.getItem("cart"))||[];



const isExists = (id) => {
    let temp = cart.filter((ele) => ele.id == id)
    return temp.length > 0 ? true : false
}
const handleCart = (ele) => {
    if (isExists(ele.id)) {
        cart.map((item, index) => {
            if (item.id == ele.id) {
                cart[index].qty += 1
            }
        })
        alert("qty added to cart")
    }
    else {
        cart.push({ ...ele, qty: 1 })
        alert("added to cart")
    
    }

    localStorage.setItem("cart", JSON.stringify(cart))

}








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
let btn=document.createElement("button");
btn.innerHTML="buy"
btn.addEventListener("click",()=>handleCart(item));
let div3=document.createElement("div");
div3.setAttribute("class", "border")
div3.append(img,h2, div, div2,btn)
document.getElementById("product-show").append(div3)
})
}
mapper(product)
document.getElementById("lth").addEventListener("click",(sort)=>{
    if(sort=="lth"){
        let temp=product.sort((a,b)=> a.price - b.price)
        mapper(temp)
    }
    else{
        let temp=product.sort((a,b)=> b.price - a.price)
        mapper(temp)
    }
})
const price=(sort)=>{
    if(sort=="htl"){
        let temp=product.sort((a,b)=> b.price - a.price)
        mapper(temp)
    }
    else{
        let temp=product.sort((a,b)=> a.price - b.price)
        mapper(temp)
    }
}
const Category = (category) => {
    let temp = product.filter((ele) => ele.cat == category)
    mapper(temp);
}
document.getElementById("htl").addEventListener("click", () => price("htl"));
document.getElementById("lth").addEventListener("click", () =>price("lth"));
document.getElementById("all").addEventListener("click", () => mapper(product));
document.getElementById("men").addEventListener("click", () => Category("men"));
document.getElementById("women").addEventListener("click",()=>Category("women"))
document.getElementById("kids").addEventListener("click",()=>Category("kids"))