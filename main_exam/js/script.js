import {  userdata } from "../com/json.js";
let produtct_data=[ {
    "id": "1",
    "name": "Classic Margherita Pizza",
    "tags": [
      "Pizza",
      "Italian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    "rating": 4.6,
    "mealType": [
      "Dinner"
    ],
    "city": "Delhi",
    "price": 1069.18,
    "category": "Main Course"
  },
  {
    "id": "2",
    "name": "Vegetarian Stir-Fry",
    "tags": [
      "Vegetarian",
      "Stir-fry",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
    "rating": 4.7,
    "mealType": [
      "Lunch"
    ],
    "city": "Mumbai",
    "price": 858.18,
    "category": "Main Course"
  },
  {
    "id": "3",
    "name": "Chocolate Chip Cookies",
    "tags": [
      "Cookies",
      "Dessert",
      "Baking"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
    "rating": 4.9,
    "mealType": [
      "Snack",
      "Dessert"
    ],
    "city": "Delhi",
    "price": 491.18,
    "category": "Dessert"
  },
  {
    "id": "4",
    "name": "Chicken Alfredo Pasta",
    "tags": [
      "Pasta",
      "Chicken"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
    "rating": 4.9,
    "mealType": [
      "Lunch",
      "Dinner"
    ],
    "city": "Delhi",
    "price": 1228.18,
    "category": "Main Course"
  },
  {
    "id": "5",
    "name": "Mango Salsa Chicken",
    "tags": [
      "Chicken",
      "Salsa"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
    "rating": 4.9,
    "mealType": [
      "Dinner"
    ],
    "city": "Delhi",
    "price": 1147.18,
    "category": "Main Course"
  },
  {
    "id": "6",
    "name": "Quinoa Salad with Avocado",
    "tags": [
      "Salad",
      "Quinoa"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
    "rating": 4.4,
    "mealType": [
      "Lunch",
      "Side Dish"
    ],
    "city": "Delhi",
    "price": 777.18,
    "category": "Salad"
  },
  {
    "id": "7",
    "name": "Tomato Basil Bruschetta",
    "tags": [
      "Bruschetta",
      "Italian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/7.webp",
    "rating": 4.7,
    "mealType": [
      "Appetizer"
    ],
    "city": "Mumbai",
    "price": 655.18,
    "category": "Appetizer"
  },
  {
    "id": "8",
    "name": "Beef and Broccoli Stir-Fry",
    "tags": [
      "Beef",
      "Stir-fry",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/8.webp",
    "rating": 4.7,
    "mealType": [
      "Dinner"
    ],
    "city": "Mumbai",
    "price": 983.18,
    "category": "Main Course"
  },
  {
    "id": "9",
    "name": "Caprese Salad",
    "tags": [
      "Salad",
      "Caprese"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/9.webp",
    "rating": 4.6,
    "mealType": [
      "Lunch"
    ],
    "city": "Mumbai",
    "price": 696.18,
    "category": "Salad"
  },
  {
    "id": "10",
    "name": "Shrimp Scampi Pasta",
    "tags": [
      "Pasta",
      "Shrimp"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/10.webp",
    "rating": 4.3,
    "mealType": [
      "Dinner"
    ],
    "city": "Surat",
    "price": 1398.18,
    "category": "Main Course"
  },
  {
    "id": "11",
    "name": "Chicken Biryani",
    "tags": [
      "Biryani",
      "Chicken",
      "Main course",
      "Indian",
      "Pakistani",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/11.webp",
    "rating": 5,
    "mealType": [
      "Lunch",
      "Dinner"
    ],
    "city": "Mumbai",
    "price": 1311.18,
    "category": "Main Course"
  },
  {
    "id": "12",
    "name": "Chicken Karahi",
    "tags": [
      "Chicken",
      "Karahi",
      "Main course",
      "Indian",
      "Pakistani",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/12.webp",
    "rating": 4.8,
    "mealType": [
      "Lunch",
      "Dinner"
    ],
    "city": "Surat",
    "price": 1188.18,
    "category": "Main Course"
  },
  {
    "id": "13",
    "name": "Aloo Keema",
    "tags": [
      "Keema",
      "Potatoes",
      "Main course",
      "Pakistani",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/13.webp",
    "rating": 4.5,
    "mealType": [
      "Lunch",
      "Dinner"
    ],
    "city": "Surat",
    "price": 1025.18,
    "category": "Main Course"
  },
  {
    "id": "14",
    "name": "Chapli Kebabs",
    "tags": [
      "Kebabs",
      "Beef",
      "Indian",
      "Pakistani",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/14.webp",
    "rating": 4.7,
    "mealType": [
      "Lunch",
      "Dinner",
      "Snacks"
    ],
    "city": "Surat",
    "price": 1106.18,
    "category": "Main Course"
  },
  {
    "id": "15",
    "name": "Saag (Spinach) with Makki di Roti",
    "tags": [
      "Saag",
      "Roti",
      "Main course",
      "Indian",
      "Pakistani",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/15.webp",
    "rating": 4.3,
    "mealType": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "city": "Surat",
    "price": 983.18,
    "category": "Main Course"
  },
  {
    "id": "16",
    "name": "Japanese Ramen Soup",
    "tags": [
      "Ramen",
      "Japanese",
      "Soup",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/16.webp",
    "rating": 4.9,
    "mealType": [
      "Dinner"
    ],
    "city": "Bangalore",
    "price": 1147.18,
    "category": "Soup"
  },
  {
    "id": "17",
    "name": "Moroccan Chickpea Tagine",
    "tags": [
      "Tagine",
      "Chickpea",
      "Moroccan"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/17.webp",
    "rating": 4.5,
    "mealType": [
      "Dinner"
    ],
    "city": "Bangalore",
    "price": 1069.18,
    "category": "Main Course"
  },
  {
    "id": "18",
    "name": "Korean Bibimbap",
    "tags": [
      "Bibimbap",
      "Korean",
      "Rice"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/18.webp",
    "rating": 4.9,
    "mealType": [
      "Dinner"
    ],
    "city": "Bangalore",
    "price": 1188.18,
    "category": "Main Course"
  },
  {
    "id": "19",
    "name": "Greek Moussaka",
    "tags": [
      "Moussaka",
      "Greek"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/19.webp",
    "rating": 4.3,
    "mealType": [
      "Dinner"
    ],
    "city": "Bangalore",
    "price": 1106.18,
    "category": "Main Course"
  },
  {
    "id": "20",
    "name": "Butter Chicken (Murgh Makhani)",
    "tags": [
      "Butter chicken",
      "Curry",
      "Indian",
      "Pakistani",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/20.webp",
    "rating": 4.5,
    "mealType": [
      "Dinner"
    ],
    "city": "Bangalore",
    "price": 1268.18,
    "category": "Main Course"
  },
  {
    "id": "21",
    "name": "Thai Green Curry",
    "tags": [
      "Curry",
      "Thai"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/21.webp",
    "rating": 4.2,
    "mealType": [
      "Dinner"
    ],
    "city": "Ahmedabad",
    "price": 941.18,
    "category": "Main Course"
  },
  {
    "id": "22",
    "name": "Mango Lassi",
    "tags": [
      "Lassi",
      "Mango",
      "Indian",
      "Pakistani",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/22.webp",
    "rating": 4.6,
    "mealType": [
      "Drink"
    ],
    "city": "Ahmedabad",
    "price": 410.18,
    "category": "Beverage"
  },
  {
    "id": "23",
    "name": "Italian Tiramisu",
    "tags": [
      "Tiramisu",
      "Italian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/23.webp",
    "rating": 4.6,
    "mealType": [
      "Dessert"
    ],
    "city": "Ahmedabad",
    "price": 768.18,
    "category": "Dessert"
  },
  {
    "id": "24",
    "name": "Turkish Kebabs",
    "tags": [
      "Kebabs",
      "Turkish",
      "Grilling"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/24.webp",
    "rating": 4.6,
    "mealType": [
      "Dinner"
    ],
    "city": "Ahmedabad",
    "price": 1069.18,
    "category": "Main Course"
  },
  {
    "id": "25",
    "name": "Blueberry Banana Smoothie",
    "tags": [
      "Smoothie",
      "Blueberry",
      "Banana"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/25.webp",
    "rating": 4.8,
    "mealType": [
      "Breakfast",
      "Beverage"
    ],
    "city": "Ahmedabad",
    "price": 655.18,
    "category": "Beverage"
  },
  {
    "id": "26",
    "name": "Mexican Street Corn (Elote)",
    "tags": [
      "Elote",
      "Mexican",
      "Street food"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/26.webp",
    "rating": 4.6,
    "mealType": [
      "Snack",
      "Side Dish"
    ],
    "city": "Ranchi",
    "price": 491.18,
    "category": "Snack"
  },
  {
    "id": "27",
    "name": "Russian Borscht",
    "tags": [
      "Borscht",
      "Russian",
      "Soup"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/27.webp",
    "rating": 4.7,
    "mealType": [
      "Lunch",
      "Dinner"
    ],
    "city": "Ranchi",
    "price": 1069.18,
    "category": "Soup"
  },
  {
    "id": "28",
    "name": "South Indian Masala Dosa",
    "tags": [
      "Dosa",
      "Indian",
      "Asian"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/28.webp",
    "rating": 4.4,
    "mealType": [
      "Breakfast"
    ],
    "city": "Ranchi",
    "price": 410.18,
    "category": "Breakfast"
  },
  {
    "id": "29",
    "name": "Lebanese Falafel Wrap",
    "tags": [
      "Falafel",
      "Lebanese",
      "Wrap"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/29.webp",
    "rating": 4.7,
    "mealType": [
      "Lunch"
    ],
    "city": "Ranchi",
    "price": 858.18,
    "category": "Wrap"
  },
  {
    "id": "30",
    "name": "Brazilian Caipirinha",
    "tags": [
      "Caipirinha",
      "Brazilian",
      "Cocktail"
    ],
    "image": "https://cdn.dummyjson.com/recipe-images/30.webp",
    "rating": 4.4,
    "mealType": [
      "Beverage"
    ],
    "city": "Ranchi",
    "price": 583.18,
    "category": "Beverage"
  }]
  const handleFilter =(e) =>{
    e.preventDefault()
    let _city = document.getElementById("_city").value;
    console.log(_city);

    let temp = produtct_data.filter((ele) => ele.city == _city)
    console.log(temp);
    handle_product(temp);

}
  let cart=JSON.parse(localStorage.getItem("cart"))||[];
  



  const isExists = (id) => {
      let temp = cart.filter((ele) => ele.id == id)
      return temp.length > 0 ? true : false
  }
  const handleCart = (ele) => {
      if (isExists(ele.id)) {
          cart.map((item, index) => {
              if (item.id == ele.id) {
                  cart[index].qty += 1
              }
          })
          alert("qty added to cart")
      }
      else {
          cart.push({ ...ele, qty: 1 })
          alert("added to cart")
      
      }
  
      localStorage.setItem("cart", JSON.stringify(cart))
  
  }

const handle_product = (product) => {
    document.getElementById("data").innerHTML = "";
    product.map((ele) => {
        let img = document.createElement("img");
        img.src = ele.image;

        let name = document.createElement("h2");
        name.textContent = ele.name;

        let category = document.createElement("div");
        category.textContent = ele.category;

        let city = document.createElement("div");
        city.textContent = ele.city;

        let rating = document.createElement("p");
        rating.innerHTML = `Rating: ${ele.rating}`;
 
        let price = document.createElement("p");
        price.innerHTML = `Price: ${ele.price}`;

        let btn=document.createElement("button");
btn.innerHTML="buy"
btn.addEventListener("click",()=>handleCart(ele));

        let div = document.createElement("div");
        div.append(img, name, category, city, rating, price,btn);

        document.getElementById("data").append(div);
    });
}

handle_product(produtct_data);

document.getElementById("City").addEventListener("submit", handleFilter);
document.getElementById("htl").addEventListener("click", () => {
    let temp = produtct_data.sort((a, b) => b.price - a.price);
    handle_product(temp);
    console.log(temp);
});
document.getElementById("lth").addEventListener("click", () => {
    let temp = product_data.sort((a, b) => a.price - b.price);
    handle_product(temp);
    console.log(temp);
});
document.getElementById("all").addEventListener("click", () => {
    handle_product(product_data);
});

const liveLocation = async (lat, long) => {
    
        let req = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b4c426c91009e3429c4af53c61fd6e9c&units=metric`);
        let res = await req.json();
        console.log(res);
        return res;
    
}

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        liveLocation(lat, long);
    });
}

getLocation();

