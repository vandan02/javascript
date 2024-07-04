let add = JSON.parse(localStorage.getItem("details")) || [];

  const getValue=(id)=>{

    return document.getElementById(id).value;
  }

const data = (e) => {
  e.preventDefault();
  let products = {
    name: getValue("name"),
    email: getValue("email"),
    num: getValue("num"),
  };
  add.push(products);

  console.log(add);
  localStorage.setItem("details", JSON.stringify(add));

  window.location.href = "/local-data/index.html";
};
document.getElementById("add").addEventListener("submit", data);
