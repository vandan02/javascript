let array = [];
let count = 0;
let total = 0;

const fire = (index) => {
  array.splice(index, 1);
  uimaker();
  ui2()
};

const uimaker = () => {
  let total = 0;
  document.getElementById("tbody").innerHTML = "";

  array.map((ele, i) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = ele.empname;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.role;
    let td3 = document.createElement("td");
    td3.innerHTML = ele.department;
    let td4 = document.createElement("td");
    td4.innerHTML = ele.salary;
    // let total = document.createElement("div");
    // total.innerHTML += ele.salary;
    let td5 = document.createElement("td");
    td5.innerHTML = ele.email;
    let td6 = document.createElement("td");
    td6.innerHTML = ele.exp;
    let td7 = document.createElement("td");
    if (ele.exp > 5) {
      td7.innerHTML = "senior";
    } else {
      td7.innerHTML = "junior";
    }
    let td8 = document.createElement("th");
    td8.innerHTML = "fire";
    td8.style.backgroundColor = "red";
    td8.addEventListener("click", () => fire(i));
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
    document.getElementById("tbody").append(tr);
ui2()
    // document.getElementById("add").innerHTML = (`total salary is=${total}`);
  });
};

const hdata = (e) => {
  e.preventDefault();
  let salary = document.getElementById("salary").value;
  let hendeldata = {
    empname: document.getElementById("empname").value,
    salary: salary,
    exp: document.getElementById("exp").value,
    email: document.getElementById("email").value,
    role: document.getElementById("role").value,
    department: document.getElementById("department").value,
  };
  array.push(hendeldata);

  uimaker();
  
};

document.getElementById("form").addEventListener("submit", hdata);
document.getElementById("fireall").addEventListener("click", () => {
  document.getElementById("tbody").innerHTML = "";
  array = [];
});

 const ui2 = () => {
  let total = 0;
  array.map((ele, i) => {

    total++
    // total.innerHTML += ele.salary;
    document.getElementById("add").innerHTML = (`total employe is=${total}`);
  });
};
