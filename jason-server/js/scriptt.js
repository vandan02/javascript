import { createTag, nav, userdata } from "../api/api.js";



document.getElementById("navbar").innerHTML=nav()
let product= await userdata.getproducts()
let pro= await userdata.getproducts()
console.log(product);

const addtoCart=()=>{
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.push(ele)
    localStorage.setItem("cart",JSON.stringify(cart))

    console.log("added to cart",ele);
 
}



let Getcart =await userdata.cartget()
const isexists = (id) => {

    let temp = Getcart.filter((ele) => ele.id == id)
    return temp.length > 0 ? true : false
}

const handlecart = (ele) => {
    if (isexists(ele.id)) {
        Getcart.map((item) => {
            if (item.id == ele.id) {
                ele.qty = 1;
                let addqty = {
                    id: ele.id,
                    img: ele.img,
                    title: ele.title,
                    price: ele.price,
                    category: ele.category,
                    qty: ele.qty
                };
                userdata.patch(ele.id, addqty);
            }
        });
        let addqty = {
            id: ele.id,
            img: ele.img,
            title: ele.title,
            price: ele.price,
            category: ele.category,
            qty: ele.qty=ele.qty+1
        };
        userdata.patch(ele.id, addqty);
        alert("qty added to cart");
    } else {
        userdata.postcart({ ...ele, qty: 1 });
    }
}



const mapper=(product)=>{
    document.getElementById("products").innerHTML=""
    product.map((ele)=>{
       let img=createTag("img",ele.images[0])
    let name=createTag( "h3",ele.title)
    let price=createTag("p",`peice:${ele.price}`)
    let rating=createTag("p",`rating:${ele.rating}`)
    let catagory=createTag("p",`catagory:${ele.category}`)
    let btn=createTag("button","Add to cart")

    
    btn.addEventListener("click", () => handlecart(ele));

    let div=document.createElement("div")
    div.setAttribute("class","product")
    div.append(img,name,price,rating,catagory,catagory,btn)
       document.getElementById("products").append(div)
    })

}

const sort = (sort) => {
    if (sort == "LTH") {
        let temp = product.sort((a, b) => a.price - b.price);
        mapper(temp)

    }
    else {
        let temp = product.sort((a, b) => b.price - a.price);
        mapper(temp)
    }
}
// document.getElementById("HTL").addEventListener("click", () => sort("HTL"));
document.getElementById("LTH").addEventListener("click", () => sort("LTH"));
document.getElementById("HTL").addEventListener("click", () => sort("HTL"));
document.getElementById("all").addEventListener("click",()=>{
    mapper(pro)
})

const filter=(category)=>{
    let temp=product.filter((ele)=> ele.category==category)
    mapper(temp);
}
  document.getElementById("beauty").addEventListener("click",()=>filter("beauty"))
  document.getElementById("fragrances").addEventListener("click",()=>filter("fragrances"))
  document.getElementById("furniture").addEventListener("click",()=>filter("furniture"))
  document.getElementById("groceries").addEventListener("click",()=>filter("groceries"))

  
  const SearchData = (value) => {
    let temp = product.filter((ele) => ele.title.includes(value)); 
    mapper(temp)
}

const handleSearch = (e) => {
    e.preventDefault();
    let search =document.getElementById("data").value;
    SearchData(search);

}

document.getElementById("search").addEventListener("submit",handleSearch)
mapper(product)