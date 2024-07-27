  
 export const userdata={
    post: async(data)=>{
        let req = await fetch(`http://localhost:3000/users`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },
    postcart: async(data)=>{
        let req = await fetch(`http://localhost:3000/cart`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },
    get:async()=>{
        let req = await fetch(`http://localhost:3000/users`);
        let res = await req.json();
        return res;
    },
    get1:async(email)=>{
        let req = await fetch(`http://localhost:3000/users?email=${email}`);
        let res = await req.json();
        return res;
    },
    cartget:async()=>{
        let req = await fetch(`http://localhost:3000/cart`);
        let res = await req.json();
        return res;
    },
    patch: async(id,data)=>{
        let req = await fetch(`http://localhost:3000/cart/${id}`,{
            method: 'PATCH',
            headers:{"content-type": "application/json"},
            body:JSON.stringify(data)
        });
    },
    delete: async(id)=>{
        let req = await fetch(`http://localhost:3000/cart/${id}`,{
            method: 'DELETE'
        });
    },
    getproducts:async()=>{
        let req = await fetch(`http://localhost:3000/products`);
        let res = await req.json();
        return res;
    }
  }


 export const createTag = (tagName, value) => {
    let tag = document.createElement(tagName)
    tagName == "img" ? tag.src = value : tag.innerHTML = value
    return tag
}


export const nav=()=>{
   return `<nav class="navbar navbar-expand-lg  bg-dark">
    <div class="container-fluid text-light">
      <a class="navbar-brand text-light" href="/jason-server/pages/index.html">shoping</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-light active" aria-current="page" href="/jason-server/pages/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/jason-server/pages/cart.html">cart</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/jason-server/pages/login.html">login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="/jason-server/pages/singup.html">signup</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`
}