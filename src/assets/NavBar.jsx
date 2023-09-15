import { NavLink } from "react-router-dom";
import "../css/NavBar.css";
function NavBar() {

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/user">Users</NavLink>
      <NavLink to="/Album">Albums</NavLink>
      <NavLink to="/photos">Photos</NavLink>
    </nav>
  );
}

export default NavBar;
