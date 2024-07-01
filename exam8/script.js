
const handledata= async()=>{

    let req= await fetch("https://dummyjson.com/products")
    let res=await req.json()
     mapper(res.products)
     
  document.getElementById("all").addEventListener("click",()=>{
      mapper(res.products);
  })
     document.getElementById("lth").addEventListener("click",()=>{
      let temp=(res.products).sort((a,b)=>a.price-b.price);
      mapper(temp);
  })

  document.getElementById("htl").addEventListener("click",()=>{
      let temp=(res.products).sort((a,b)=>b.price-a.price);
      mapper(temp);
  })

  document.getElementById("search").addEventListener("submit",(e)=>{
 e.preventDefault();
      let value=document.getElementById("search1").value
      let temp=(res.products).filter((ele)=>ele.title.includes(value));
      mapper(temp);
  })
  
const filter=(category)=>{
    let temp=(res.products).filter((ele)=> ele.category==category)
    mapper(temp);
}
  document.getElementById("beauty").addEventListener("click",()=>filter("beauty"))
  document.getElementById("fragrances").addEventListener("click",()=>filter("fragrances"))
  document.getElementById("furniture").addEventListener("click",()=>filter("furniture"))
  document.getElementById("groceries").addEventListener("click",()=>filter("groceries"))

  }



const mapper=(data)=>{
   document.getElementById("data").innerHTML =""
    data.map((ele,i)=>{
       let img=document.createElement("img")
       img.src=ele.thumbnail
       let title=document.createElement("h2")
       title.innerHTML=ele.title
       let category=document.createElement("p")
       category.innerHTML=ele.category
       let price=document.createElement("p")
       price.innerHTML=ele.price
       let div=document.createElement("div")
       div.setAttribute("class",("border"))
       let btn=document.createElement("button")
       btn.innerHTML="buy now"
       btn.addEventListener("click",()=>{
        localStorage.setItem("index",ele.id)
        window.location.href="http://127.0.0.1:5500/exam8/page.html"
       })
       div.append(img,title,category,price,btn)
       document.getElementById("data").append(div)
    })
   } 

// console.log(v);
handledata()

// const filter=(sort)=>{
//    if(sort=="lth")
//    {
//    let value=v.sort((a,b)=>a.price-b.price)
//    mapper(value)
//    // localStorage.setItem("data",JSON.stringify(value))
  
// }
// else
// {
//    let value=v.sort((a,b)=>b.price-a.price)
   
//    // localStorage.setItem("data",JSON.stringify(value))
//    mapper(value)
// }
// }

// document.getElementById("lth").addEventListener("click",()=>filter("lth"))
// document.getElementById("htl").addEventListener("click",()=>filter("htl"))