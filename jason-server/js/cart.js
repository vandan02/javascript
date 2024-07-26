import { createTag, userdata } from "../api/api.js";
let total=0;
let discount;
let topay=0;
let Getcart = await userdata.cartget(userdata);

const handleqty = (ele, index, opr) => {
    if (opr == "+") {
        let addqty = {
            id: ele.id,
            img: ele.images,
            title: ele.title,
            price: ele.price,
            category: ele.category,
            qty: ele.qty += 1,
        }
        userdata.patch( ele.id,addqty)
    }
    else {
        if (Getcart[index].qty > 1) {
            let subqty = {
                id: ele.id,
                img: ele.img,
                title: ele.title,
                price: ele.price,
                category: ele.category,
                qty: ele.qty -= 1,
            }
            userdata.patch(subqty, ele.id)
        }
        else {
            alert("quantity should be greater than 1")
       
        }
    }
    uimaker(Getcart)
}

const handledelete=(index)=>{
    cart.deletecart(index)
    uimaker(cart)

    document.getElementById("count").innerHTML=cart.length
}

const uimaker = () => {

    document.getElementById("list").innerHTML = ""

    Getcart.map((ele, i) => {

        let td1 = document.createElement("td")
        let img = createTag("img", ele.image)
        td1.append(img)

        let td2 = createTag("td", ele.title)
        let td3 =createTag("td", ele.category)
        let td4 = createTag("td", ele.price)

        let td5 = document.createElement("td")
        let btn1 = createTag("button", "-")
        btn1.addEventListener("click", () => handleqty(ele,i, "-"))

        let btn2 = createTag("button", ele.qty)
        let btn3 = createTag("button", "+")
        btn3.addEventListener("click", () => handleqty(ele, i, "+"))

        td5.append(btn1, btn2, btn3)

        let td6 = createTag("td", ele.price *ele.qty)
        let td7 = document.createElement("td")
        let btn = createTag("button", "Delete")
        td7.append(btn)
        btn.addEventListener("click", () => userdata.delete(ele.id))

        let tr = document.createElement("tr")
        tr.append(td1, td2, td3, td4, td5, td6, td7)

        document.getElementById("list").append(tr)

        total=total+ele.price *ele.qty

        document.getElementById("bag").innerHTML=`Bag Total : ${total}`;
        document.getElementById("topay").innerHTML=`You Pay : ${total}`;
    })

}

uimaker(cart)



    discount=total*10/100;
    document.getElementById("discount").innerHTML=`Discount : ${discount}`;

    topay=total-discount;
    document.getElementById("topay").innerHTML=`payebale emount :${topay}`;
    

document.getElementById("pay").addEventListener("click",()=>{
    alert("Paid Successfully");
});
