import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../css/NavBar.css";
import times from "./bars-solid.svg";
import bars from "./circle-xmark-solid.svg";

function NavBar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <div className="navBar">
      <div className="navBar__menu">
        <div className="navBar__menu__icon" onClick={handleShow}>
          <img src={show ? bars : times} ></img>
        </div>
        <div className={show ? "navBar__menu__list" : "navBar__menu__list hide"} onClick={handleHide}>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/user">Users</NavLink>
          <NavLink to="/Album">Albums</NavLink>
          <NavLink to="/photos">Photos</NavLink>
        </div>
      </div>
    </div>
  );
}


export default NavBar;

// <nav> <i class="fa-solid fa-bars"></i>
//   <NavLink to="/">Home</NavLink> <i class="fa-solid fa-x fa-2xl"></i>
//   <NavLink to="/posts">Posts</NavLink>
//   <NavLink to="/user">Users</NavLink>
//   <NavLink to="/Album">Albums</NavLink>
//   <NavLink to="/photos">Photos</NavLink>
// </nav>
