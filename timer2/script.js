const timer=(min)=>{

  
    let hour = 0;
    let sec = 0;
    let temp = min;
    let min1=0
    let hour1=0
    
      if (min > 60) {
        min = min % 60;
        temp -= min;
        hour = temp / 60;
      }
    
      let time = setInterval(() => {
        document.getElementById("sec").innerHTML = ` ${hour1}: ${min1} : ${sec}`;
    
        sec += 1;
        if (min1 == min && sec == 59 && hour1 == hour) {
          clearInterval(time);
          document.getElementById("sec").innerHTML = `jao bhai kya dekh rahe ho`;
        }
    
        if (min1 == 59 && sec == 59) {
          hour1 += 1;
          min1 = 0;
        }
        if (sec == 59) {
          min1 += 1;
          sec = 0;
        }
        // if (min == 1 && hour == 0) {
        //   min = 0;
        // }
      }, 100);
  }
  
  
  
  
  const handle = (e) => {
    e.preventDefault();
  let min = document.getElementById("min").value 
  timer(min);
  };
  // console.log(arr);
  document.getElementById("collect").addEventListener("submit", handle);