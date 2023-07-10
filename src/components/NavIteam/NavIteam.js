import "./NavIteam.css"


const NavIteam =(props) =>{
  return (
    <li className="nav-item">
        {props.children}
    </li>
  )
}

const NavIteamDropDown =(props) =>{
    return (
      <li className="nav-item dropdown">
          {props.children}
      </li>
    )
  }

export default NavIteam
export {NavIteamDropDown}