const name=()=>{
    let name=document.getElementById("n1").value
    let age=document.getElementById("n2").value
    document.getElementById("p").innerHTML=`name : ${name}`
    document.getElementById("q").innerHTML=`name : ${age}`
}