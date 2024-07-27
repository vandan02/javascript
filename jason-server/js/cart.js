import { createTag, nav, userdata } from "../api/api.js";

let total = 0;
let discount = 0;
let topay = 0;

let Getcart = await userdata.cartget(userdata);

document.getElementById("navbar").innerHTML = nav();

const handleqty = async (ele, index, opr) => {
    let updatedQty = ele.qty;

    if (opr === "+") {
        updatedQty += 1;
    } else if (opr === "-" && ele.qty > 1) {
        updatedQty -= 1;
    } else {
        alert("Quantity should be greater than 1");
        return;
    }

    let updatedItem = { ...ele, qty: updatedQty };
    await userdata.patch(ele.id, updatedItem);

    Getcart = await userdata.cartget(userdata);
    uimaker();
}

const handledelete = async (index) => {
    await userdata.delete(Getcart[index].id);
    Getcart = await userdata.cartget(userdata);
    uimaker();
}

const uimaker = () => {
    total = 0;
    document.getElementById("list").innerHTML = "";

    Getcart.forEach((ele, i) => {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        let img = createTag("img", ele.images);
        td1.append(img);

        let td2 = createTag("td", ele.title);
        let td3 = createTag("td", ele.category);
        let td4 = createTag("td", ele.price);

        let td5 = document.createElement("td");
        let btn1 = createTag("button", "-");
        btn1.addEventListener("click", () => handleqty(ele, i, "-"));

        let btn2 = createTag("button", ele.qty || 1);
        let btn3 = createTag("button", "+");
        btn3.addEventListener("click", () => handleqty(ele, i, "+"));

        td5.append(btn1, btn2, btn3);

        let itemTotal = ele.price * ele.qty;
        total += itemTotal;
        let td6 = createTag("td", Math.round(itemTotal));

        let td7 = document.createElement("td");
        let btn = createTag("button", "Delete");
        btn.addEventListener("click", () => handledelete(i));
        td7.append(btn);

        tr.append(td1, td2, td3, td4, td5, td6, td7);
        document.getElementById("list").append(tr);
    });

    discount = Math.round(total * 0.10);
    topay = Math.round(total - discount);

    document.getElementById("bag").innerHTML = `Total: ${Math.round(total)}`;
    document.getElementById("discount").innerHTML = `Discount: ${discount}`;
    document.getElementById("topay").innerHTML = `You Pay: ${topay}`;
}

uimaker();

document.getElementById("pay").addEventListener("click", async () => {
    if (total > 0) {
        alert("Your items have been delivered to your registered account.");
        Getcart.map( async (ele)=>{
            await userdata.delete(ele.id);
        }) 
           
        total = 0;
        uimaker();
        window.location.reload();
    } else {
        alert("No data found");
    }
});
