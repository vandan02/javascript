let userdata = [];


const d = (index) => {
  userdata.splice(index,1);
  uimaker();
};


const uimaker = () => {
  document.getElementById("tbody").innerHTML = "";
  userdata.map((ele, i) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = ele.name;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.email;
    let td3 = document.createElement("td");
    td3.innerHTML = ele.number;
    let td4 = document.createElement("td");
    td4.innerHTML = ele.salary;
    let td5 = document.createElement("td");
    td5.innerHTML = "delete";
    td5.addEventListener("click", () => d(i));
    tr.append(td1, td2, td3, td4, td5);
    document.getElementById("tbody").append(tr);
  });
};
const adddata = (e) => {
  e.preventDefault();
  let data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    salary: document.getElementById("salary").value,
  };
  console.log("vandan");
  userdata.push(data);
  uimaker();
};

document.getElementById("data").addEventListener("submit", adddata);
