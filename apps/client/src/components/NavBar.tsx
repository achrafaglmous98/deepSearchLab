import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">   
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to= "/library">Library</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to= "/analytics">Analytics</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                 </div>
            </div>
        </nav>
    )
  }
  
  export default NavBar;