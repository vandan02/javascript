let c1,c2,c3,c4
let count=0
const counter=(count,show,key) => {
    count++
    document.getElementById(show).innerHTML = count;
    if (key=="key4"){
        sessionStorage.setItem(key,count);
     
     }else{
     localStorage.setItem(key,count);
     }
}
const recive_data=(btn,c,show,key) => {
document.getElementById(btn).addEventListener("click",()=>{
if (key=="key4"){
   c=sessionStorage.getItem(key)||0;
}else{
c=localStorage.getItem(key)||0;
}
counter(c,show,key)
})
}
recive_data("count1",c1,"like","key1")
recive_data("count2",c2,"comment","key2")
recive_data("count3",c2,"shere","key3")
recive_data("count4",c2,"save","key4")
