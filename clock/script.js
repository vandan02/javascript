
function clock(){
let hour=document.getElementById("hour")
let minut=document.getElementById("minut")
let second=document.getElementById("second")
let ampm=document.getElementById("ampm")
let day=document.getElementById("dayname")
let date=document.getElementById("date")
let mounth=document.getElementById("mounth")
let year=document.getElementById("year")

let d=new Date().toLocaleDateString("en-In",{weekday: 'long'});
let date1=new Date().getDate();
let h=new Date().getHours();
let m=new Date().getMinutes();
let s=new Date().getSeconds();
let y=new Date().getFullYear();
let mon=new Date().toLocaleDateString('default',{month: 'long'});
let am

if(h>=12){
    am="pm"
}
else{
    am="am"
}
if(h>12){
    h=h-12
   
}

day.innerHTML=d
date.innerHTML=date1
hour.innerHTML=h
minut.innerHTML=m
second.innerHTML=s
ampm.innerHTML=am
year.innerHTML=y
mounth.innerHTML=mon

}
let interval=setInterval(clock,1000)