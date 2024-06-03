let Pdata = [
  {
    title: "iphone case",
    price: 4900,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWND3?wid=532&hei=582&fmt=png-alpha&.v=1708125477348",
    
  },
  {
    title: "airpod pro",
    price: 24900,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=532&hei=582&fmt=png-alpha&.v=1694014871985",
  },
  {
    title: "studio display",
    price: 159900,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK0U3?wid=532&hei=582&fmt=png-alpha&.v=1646446502337",
  },
  {
    title: "magic keybord",
    price: 19500,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMR3?wid=532&hei=582&fmt=png-alpha&.v=1645719947833",
  },
];

Pdata.map((ele)=>{
  // document.getElementById("products").innerHTML = " "

  let image = document.createElement("img");
  image.src = ele.image;

  let h2 = document.createElement("h2");
  h2.innerHTML = ele.title;
  h2.setAttribute("class","css")

  let p = document.createElement("p");
  p.innerHTML = ele.price
  p.setAttribute("class","css")

  let div3 = document.createElement("h2");
  div3.innerHTML = "Buy";
div3.setAttribute("class","css2")

  div3.addEventListener("click",()=>{
      BankDetails.setWithdraw(ele.price);
     
  })
  

  let div = document.createElement("div")

  div.append(image,h2,p,div3)
  div.setAttribute("class","div")
  

  document.getElementById("products").append(div)
})

class Bank {
constructor(AccName, AccNo,  MoNumber) {
  this.AccName = AccName;
  this.AccNo = AccNo;
  this.MoNumber = MoNumber;
  this.amount = 0;
}

setAccName(AccName) {
  this.AccName = AccName;
}
getAccName(AccName) {
  return (this.AccName = AccName);
}

setAccNo(AccNo) {
  this.AccNo = AccNo;
}
getAccNo(AccNo) {
  return (this.AccNo = AccNo);
}

setBranchName(BranchName) {
  this.BranchName = BranchName;
}
getBranchName(BranchName) {
  return (this.BranchName = BranchName);
}

setMoNumber(MoNumber) {
  this.MoNumber = MoNumber;
}
getMonumber(MoNumber) {
  return (this.MoNumber = MoNumber);
}

setamount(cash) {

  if(cash > 0){
      this.amount += Number(cash);
      alert("Deposite Successfully")
  }
  else{
      alert("amount Grather Than zero")
  }

  
}
getamount() {
  return this.amount;
}

setWithdraw(cash){
  if(this.amount > cash  ){
      this.amount -= Number(cash)
      alert("order done")
  }else{
      alert("you have not enuf money")
  }
 
}
getWithdraw(cash){
   this.amount ;
}
}

let BankDetails = new Bank("name", 0, 0, 0, 0);








const UiAccD = () => {
document.getElementById("Display").innerHTML = "";
let p = document.createElement("p");
p.innerHTML = `Account Name : ${BankDetails.AccName}`;
let p1 = document.createElement("p");
p1.innerHTML = `Account No : ${BankDetails.AccNo}`;
let p2 = document.createElement("p");
p2.innerHTML = `Mobile No : ${BankDetails.MoNumber}`;
let p3 = document.createElement("p");
p3.innerHTML = `Balance : ${BankDetails.amount}`;
document.getElementById("Display").append(p, p1, p3);
};










const HandleData = (e) => {
e.preventDefault();

let Data = {
  AccName: document.getElementById("AccName").value,
  AccNo: document.getElementById("AccNo").value,
  MoNumber: document.getElementById("MoNumber").value,
};
BankDetails.setAccName(Data.AccName);
BankDetails.setAccNo(Data.AccNo);
BankDetails.setMoNumber(Data.MoNumber);

console.log(BankDetails);
UiAccD();
};














document.getElementById("push").addEventListener("click",(e)=>{
  e.preventDefault();
let cash = document.getElementById("cash").value;
BankDetails.setamount(cash);
console.log(cash);
  
})







document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();

//   document.getElementById("Display").innerHTML = "";
document.getElementById("Display").innerHTML = "";
let p = document.createElement("p");
p.innerHTML = `Account Name : ${BankDetails.AccName}`;

let p1 = document.createElement("p");
p1.innerHTML = `Account No : ${BankDetails.AccNo}`;

let p3 = document.createElement("p");
p3.innerHTML = `Branch Name : ${BankDetails.BranchName}`;

let p4 = document.createElement("p");
p4.innerHTML = `Mobile No : ${BankDetails.MoNumber}`;

let p5 = document.createElement("p");
p5.innerHTML = `Balance : ${BankDetails.amount}`;

//   let p6 = document.createElement("p");
//   p6.innerHTML = `Balance : ${BankDetails.amount}`;

document.getElementById("Display").append(p, p1, p3, p4, p5);



//   document.getElementById("Display").append(p6);
});









// document.getElementById("Deposite").addEventListener("submit", DepositeHandle);

document.getElementById("CollectData").addEventListener("submit", HandleData);