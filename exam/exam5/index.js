let news=JSON.parse(localStorage.getItem('news'))||[]
let deatil = JSON.parse(localStorage.getItem('singup')) || []
const uimaker=(data)=>{
    document.getElementById('set').innerHTML=""
     data.map((ele)=>{
        let img=document.createElement('img')
        img.src=ele.img
        console.log(ele.img);
        img.setAttribute('class',"img")
        let title=document.createElement('h1')
        title.innerHTML=ele.title
        let dis=document.createElement('p')
        dis.innerHTML=ele.dis


        let like =document.createElement('button')
        like.innerHTML="like"
        like.setAttribute('id',"like")
        like.addEventListener("click",()=>{
            
            ele.like++
            localStorage.setItem("news",JSON.stringify({...ele,like}))
        })

        let dislike =document.createElement('button')
        dislike.innerHTML="shere"
       

        let btndiv= document.createElement('div')
        btndiv.setAttribute('id','btndiv')
        btndiv.append(like,dislike)


        let div=document.createElement('div')
        div.setAttribute('id',"main")
        div.append(img, title, dis , btndiv)
        document.getElementById('set').append(div)

    }
)}

const profile=()=>{
    // document.getElementById('inner').innerHTML=""
    let url=document.createElement("img")
    url.src=deatil.url
    let name=document.createElement("h1")
    name.innerHTML=deatil.username
    let email=document.createElement("p")
    email.innerHTML=deatil.email
    let country=document.createElement("p")
    country.innerHTML=deatil.country
    let password=document.createElement("p")
    password.innerHTML=deatil.password
    let div=document.createElement("p")
    div.append(url,name,email,country)
    document.getElementById('inner').append(div)
    console.log(deatil);
}
uimaker(news)
profile()