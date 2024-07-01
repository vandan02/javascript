let index= JSON.parse(localStorage.getItem("index"))

const handledata= async(id)=>{
    let req= await fetch(`https://dummyjson.com/products/${id}`)
    let res=await req.json()
    mapper(res)
     
}

handledata(index)

const mapper=(data)=>{
    let img=document.createElement("img")
       img.src=data.thumbnail
       let title=document.createElement("h2")
       title.innerHTML=data.title
       let category=document.createElement("p")
       category.innerHTML=data.category
       let des=document.createElement("p")
       des.innerHTML=data.description
       let discountPercentage=document.createElement("p")
       discountPercentage.innerHTML=data.discountPercentage
       let price=document.createElement("p")
       price.innerHTML=data.price
       let stock=document.createElement("p")
       stock.innerHTML=data.stock
       let div=document.createElement("div")
       div.setAttribute("class",("border"))
       
       div.append(img,title,category,price,des,discountPercentage,stock)
       document.getElementById("data").append(div)
    data.reviews.map((ele)=>{
        let rating=document.createElement("p")
        rating.innerHTML=`rating:${ele.rating}`
        let comment=document.createElement("p")
        comment.innerHTML=`comment:${ele.comment}`
        let date=document.createElement("p")
        date.innerHTML=`date:${ele.date}`
        let reviewerName=document.createElement("p")
        reviewerName.innerHTML=`reviewerName:${ele.reviewerName}`

        let div=document.createElement("div")
        div.append(rating,comment,date,reviewerName)
        div.setAttribute("class",("border"))
        document.getElementById("data").append(div)
    })
       
      

}