import logo from "./img/logo1.png";
import CartWidget from "./CartWidget";

function NavBar()  {
    return (
      <>
       <div className="container-fluid p-3 mb-2 text-dark">
          <div className="row">  
              <div className="col-md-2">
                  <img src={logo} alt={""} />                   
              </div>   
              <div className="col-md-4">
                  <h1 className="display-4">Velas Land</h1>                       
              </div> 
              <div className="col-md-6">
                  <ul className="nav justify-content">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">Velas</a>
                      </li>                        
                      <li className="nav-item">
                        <a className="nav-link" href="/">Nosotros</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="/">Ubicación</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/">Contacto</a>
                      </li>
                      <li className="nav-item">
                      <CartWidget/> 
                      </li>
                    </ul>    
                </div>                 
          </div>  
 </div>
      </>
    )
  }

  export default NavBar;