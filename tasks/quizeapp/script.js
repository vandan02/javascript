
import { userdata } from "./conmponent.js";

let counter = 0;
const getdata = async (e) => {
  e.preventDefault();
  let data = {
    que: e.target.question.value,
    a: e.target.choice1.value,
    b: e.target.choice2.value,
    c: e.target.choice3.value,
    d: e.target.choice4.value,
    ans: e.target.answer.value,
  };
  await userdata.post(data);
};
document.getElementById("que").addEventListener("submit", getdata);



let data = await userdata.get();
const uimaker=()=>{
data.map((ele, i) => {
  let que = document.createElement("h2");
  que.innerHTML = `${i + 1}. ${ele.que}`;
  let a = document.createElement("button");
  a.innerHTML = ele.a;
  let b = document.createElement("button");
  b.innerHTML = ele.b;
  let c = document.createElement("button");
  c.innerHTML = ele.c;
  let d = document.createElement("button");
  d.innerHTML = ele.d;
  const ans12=(an)=>{
    return ()=>{
 if (an.innerHTML==ele.ans  ) {
      an.style.backgroundColor = "green";
       counter+=1;
    } else {
      an.style.backgroundColor = "red";
      
    }
    document.getElementById("score").innerText = `Score: ${counter}`;
      a.disabled = true;
      b.disabled = true;
      c.disabled = true;
      d.disabled = true;
  }
  }
  a.addEventListener("click",ans12(a))
  b.addEventListener("click",ans12(b))
  c.addEventListener("click",ans12(c))
  d.addEventListener("click",ans12(d))
  document.getElementById("questions").append(que, a, b, c, d);
});
}
document.querySelector("body").addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
document.getElementById("click").addEventListener("click",()=>{
  uimaker()

  document.getElementById("click").disabled=true
})


const video= async () => {
  let constraints = {
    video: {
      width: 640,
      height: 480,
    },
    audio: false
  };
  let stream = await navigator.mediaDevices.getUserMedia(constraints);
  let videoElement = document.getElementById('camera');
  videoElement.srcObject = stream;
};
document.addEventListener("DOMContentLoaded",video);
