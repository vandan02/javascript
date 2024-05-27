const timer=(min)=>{

  
  let hour = 0;
  let sec = 59;
  let temp = min;
  
    if (min > 60) {
      min = min % 60;
      temp -= min;
      hour = temp / 60;
    }
  
    let time = setInterval(() => {
      document.getElementById("sec").innerHTML = ` ${hour}: ${min} : ${sec}`;
  
      sec -= 1;
      if (min == 0 && hour == 0 && sec == 0) {
        clearInterval(time);
        document.getElementById("sec").innerHTML = `jao bhai kya dekh rahe ho`;
      }
  
      if (min == 0 && sec == 0) {
        hour -= 1;
        min = 59;
      }
      if (sec == 0) {
        min -= 1;
        sec = 59;
      }
      // if (min == 1 && hour == 0) {
      //   min = 0;
      // }
    }, 1000);
}




const handle = (e) => {
  e.preventDefault();
let min = document.getElementById("min").value 
timer(min);
};
// console.log(arr);
document.getElementById("collect").addEventListener("submit", handle);