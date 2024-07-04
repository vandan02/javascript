let news=JSON.parse(localStorage.getItem('news'))||[];
const data=(e)=>{
    e.preventDefault()
    let hey={
        img:document.getElementById("img").value,
        title:document.getElementById("title").value,
        dis:document.getElementById("dis").value,
    }
news.push(hey)
    localStorage.setItem("news",JSON.stringify(news))
}
document.getElementById("data").addEventListener("submit",data)