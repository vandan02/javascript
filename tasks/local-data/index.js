let products = JSON.parse(localStorage.getItem("details")) || [];
const delete1 = (i) => {
  products.splice(i, 1);
  localStorage.setItem("details", JSON.stringify(products));
  uimaker();
};
const uimaker = () => {
  document.getElementById("product").innerHTML = "";
  products.map((ele, i) => {
    let name = document.createElement("h1");
    name.innerHTML = ele.name;
    let email = document.createElement("div");
    email.innerHTML = ele.email;
    let num = document.createElement("h3");
    num.innerHTML = ele.num;
    let btn = document.createElement("button");
    btn.innerHTML = "delete";
    btn.addEventListener("click", () => delete1(i));
    let div = document.createElement("div");
    div.append(name, email, num, btn);
    document.getElementById("product").append(div);
  });
};
uimaker();
