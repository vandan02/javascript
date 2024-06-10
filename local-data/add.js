let add = JSON.parse(localStorage.getItem("products")) || [];

const data = (e) => {
  e.preventDefault();
  let products = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    num: document.getElementById("num").value,
  };
  add.push(products);

  console.log(add);
  localStorage.setItem("details", JSON.stringify(add));

  window.location.href = "/local-data/index.html";
};
document.getElementById("add").addEventListener("submit", data);
