const clock = () => {
    let Day =  [ "Sunday ", "Monday", "Tuesday", "Wednesday","Thursday","Friday ","Saturday "];
    let Month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

    let date = new Date();


    document.getElementById("date").innerHTML = Day[date.getDay()] + ', ' + date.getDate() + ' - ' + Month[date.getMonth()] + ' - ' + date.getFullYear();
}

const mapper=(data)=>{
    document.getElementById("show").innerHTML=""
    let temprecher=Math.round(data.main.temp) 
let cityname=document.createElement("div")
cityname.innerHTML=`${data.name},${data.sys.country}`
let temp=document.createElement("div")
temp.innerHTML=`${temprecher}°C`
temp.setAttribute("class", "temp")
let weather=document.createElement("div")
 weather.innerHTML=data.weather[0].main

 let main=document.createElement("div")
 main.setAttribute("class","d-flex justify-content-center ")
 let logo=document.createElement("div")
 logo.innerHTML=`<i class="fa-solid fa-wind"></i>`
 logo.setAttribute("class","d-flex align-center fs-5 ")
 let logo2=document.createElement("div")
 logo2.append(logo)
let windhuman=document.createElement("div")
let human=document.createElement("div")
human.innerHTML=data.wind.speed
let speed=document.createElement("div")
speed.innerHTML="wind-speed"
windhuman.append(human,speed)
main.append(logo2,windhuman)

let main1=document.createElement("div")
main1.setAttribute("class","d-flex justify-content-center ")

let logo1=document.createElement("div")
logo1.innerHTML=`<i class="fa-solid fa-hand-holding-droplet"></i>`
logo1.setAttribute("class","d-flex align-center fs-5 ")
let logo3=document.createElement("div")
logo3.append(logo1)

let wind1=document.createElement("div")
let human1=document.createElement("div")
human1.innerHTML=data.main.humidity
let wind=document.createElement("div")
wind.innerHTML="humidity"

wind1.append(human1,wind)

main1.append(logo3,wind1)
let div4=document.createElement("div")
div4.setAttribute("class","p-5")
let flex=document.createElement("div")
flex.append(main,div4,main1)
flex.setAttribute("class","d-flex")
document.getElementById("show").append(temp,cityname,weather,flex)
}


const getwether=async(cityname)=>{
    let req =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=36f7e546a0c8fd7265e9598b4daf6e50&units=metric`);
    let res=await req.json()
console.log(res);
    mapper(res)
}
document.getElementById("weather").addEventListener("submit",(e)=>{
    e.preventDefault();
    let location=document.getElementById("City").value
    getwether(location)
    let inter = setInterval(clock);
})
