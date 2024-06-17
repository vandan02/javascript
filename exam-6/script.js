
let arr=JSON.parse(localStorage.getItem("books"))||[]


document.getElementById("data").addEventListener("submit", (e)=>{
    e.preventDefault();
let data={
bookname:document.getElementById("bookname").value,
author:document.getElementById("autorname").value,
description:document.getElementById("description").value,
date:document.getElementById("date").value,
category:document.getElementById("category").value,
prise:document.getElementById("prise").value,
}

arr.push(data);
localStorage.setItem("books",JSON.stringify(arr))
})