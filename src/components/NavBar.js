import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link> */}
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/sobre"}>Sobre</NavLink>
    </nav>
  )
}

export default NavBar