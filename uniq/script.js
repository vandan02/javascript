let cloths_data=[
    {
        id: 1,
        name: 'Shirt',
        price: 20,
        color: 'Red',
        type: 'Casual',
        description: 'This is a red shirt'
    },
    {
        id: 2,
        name: 'Pants',
        price: 30,
        color: 'Blue',
        type: 'Casual',
        description: 'This is a blue pants'
    }
    ,
    {
        id: 3,
        name: 'Shoes',
        price: 50,
        color: 'Black',
        type: 'Formal',
        description: 'This is a black shoes'
    },
   
]

const uimaker=(data)=>{
document.getElementById('clothes').innerHTML = "";

data.map((ele,i) => {
let name=document.createElement("p")
    name.innerHTML=ele.name

let price=document.createElement("p")
    price.innerHTML=`Price: ${ele.price}`

let color=document.createElement("p")
    color.innerHTML=`Color: ${ele.color}`

let type=document.createElement("p")
    type.innerHTML=`Type: ${ele.type}`

    let description=document.createElement("p")
    description.innerHTML=`Description: ${ele.description}`
    
    let div=document.createElement("div")
    div.append(name, price, color, type, description)
    document.getElementById('clothes').append(div)
})

}



    uimaker(cloths_data)
