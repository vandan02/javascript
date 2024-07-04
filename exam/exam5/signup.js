
document.getElementById("singup").addEventListener("submit",(e)=>{
    e.preventDefault()
    let deatil={
     username:document.getElementById("name").value,
     email:document.getElementById("email").value,
     img:document.getElementById("url").value,
     country:document.getElementById("country").value,
     password:document.getElementById("pw").value,
   
    } 
localStorage.setItem("singup",JSON.stringify(deatil))
window.location.href="/exam5/login.html"
    })