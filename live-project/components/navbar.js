const nav=(login = "login", signup = "signup")=>{
    return `<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: transparent;">
    <div class="container-fluid">
      <a class="navbar-brand" href="/live-project/index.html">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/live-project/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/live-project/pages/product.html">product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/live-project/pages/addproduct.html">addproduct</a>
          </li>
            <li class="nav-item">
            <a class="nav-link " href="/live-project/pages/cart.html" >cart</a>
          </li>
     
          <li class="nav-item">
            <a class="nav-link " id="logout" href="/live-project/pages/login.html" >${login}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/live-project/pages/signup.html" >${signup}</a>
          </li>
     
          
        </ul>
      </div>
    </div>
  </nav>`
}


export default nav