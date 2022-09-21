import logo from "./img/logo1.png";
import Cart from "./Cart";

function NavBar()  {
    return (
      <>
       <div class="container-fluid p-3 mb-2 text-dark">
          
          <div class="row">  
              <div class="col-md-2">
                  <img src={logo} alt={""} />                   
              </div>   
              <div class="col-md-4">
                  <h1 class="display-4">Velas Land</h1>                       
              </div> 
              <div class="col-md-6">
                  <ul class="nav justify-content">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">Velas</a>
                      </li>                        
                      <li class="nav-item">
                        <a class="nav-link" href="/">Nosotros</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="/">Ubicación</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">Contacto</a>
                      </li>
                      <li class="nav-item">
                      <Cart/> 
                      </li>
                    </ul>    
                    
                </div>                 
          </div>   

 </div>
      </>
    );
  }

  export default NavBar;