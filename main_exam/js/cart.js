import {  createTag, userdata } from "../com/json.js";

let data = JSON.parse(localStorage.getItem("cart")) || []
const handleDelete = (index) => {
    data.splice(index, 1)
    document.getElementById("v").innerHTML=`total product is :- ${data.length}`
    Mapper(data)
    localStorage.setItem("cart", JSON.stringify(data))
}
const handleQty = (index, opr) => {

    if (opr == "+") {
        data[index].qty += 1
    }
    else {

        if (data[index].qty > 1) {
            data[index].qty -= 1
        }
        else {
         
            alert("qty should be greater than 1")
        }

    }
    Mapper(data)
    localStorage.setItem("cart", JSON.stringify(data))
}
const totalprice=(data)=>{
    document.getElementById("price").innerHTML=`total price: ${data}`
    
    let price=data
    
    
    }
const Mapper = (cart) => {
    let total=0
    document.getElementById("tbody").innerHTML = ""
    cart.map((item, i) => {
        total+=item.price*item.qty
        let td1 = document.createElement("td")
        let img = createTag("img", item.image)
       
        td1.append(img)
        let td2 = createTag("td", item.name)
        let td3 = createTag("td", item.category)
        let td4 = createTag("td", item.price)
        let td5 = document.createElement("td")
        let btn1 = createTag("button", "-")
        let btn2 = createTag("button", item.qty)
        let btn3 = createTag("button", "+")
        btn1.addEventListener("click", () => handleQty(i, "-"))
        btn3.addEventListener("click", () => handleQty(i, "+"))
        td5.append(btn1, btn2, btn3)
        let td6 = createTag("td", item.price * item.qty)
        let td7 = document.createElement("td")
        let btn = createTag("button", "remove")
        btn.addEventListener("click", () => handleDelete(i))
        td7.append(btn)
        let tr = document.createElement("tr")
        tr.append(td1, td2, td3, td4, td5, td6, td7)
        document.getElementById("tbody").append(tr)
    })
    totalprice(total)
}
Mapper(data)