
const getwether=async(cityname)=>{
    let req= await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=34df8e7aaaa0ce47a77f7d75f174be04&units=metric`)
    let res=await req.json()

    mapper(res)
}
document.getElementById("form").addEventListener("click",(e)=>{
    e.preventDefault();
    let data=document.getElementById("data").value
    getwether(data)
    })
    