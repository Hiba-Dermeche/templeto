
import "./Header.css"
import logo from "../../images/logo.png"
import NavIteam, {NavIteamDropDown} from "../../components/NavIteam/NavIteam"
const Header = ()=>{
    return(
        <>
    <div  className="navbar navbar-expand-md  navbar-dark cyborg-navbar ">
        <div  className="container">
            <a href="#" className="navbar-brand">
                <img src={logo} alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="/#" className="nav-link">Browse</a></li>
                    <li className="nav-item dropdown">
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="#learn" className="dropdown-item">Learn Bootstrap</a></li>
                            <li><a href="#next" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="/#" className="nav-link">Streams</a></li>
                    <li className="nav-item"><a href="/Profile" className="nav-link">Profile</a></li>
                </ul>
            </div>
        </div>
    </div>
  
 
  

        </>
        
    )
}

export default Header