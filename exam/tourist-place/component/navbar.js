const navbar=()=>{
    return`<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/exam/tourist-place/pages/index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/exam/tourist-place/pages/add.html">add-new-place</a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link " href="/exam/tourist-place/pages/login.html" >login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/exam/tourist-place/pages/singup.html" >singup</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" id="search" placeholder="Search" aria-label="Search">
         
        </form>
      </div>
    </div>
  </nav>`
}


export default navbar