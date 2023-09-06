import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <ul className="nav justify-content-center" >
                <li className="nav-item" >
                    <Link className="nav-link active" aria-current="page" to="/"  style={{color:'black'}} ><b>Home</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Skill" style={{color:'black'}}><b>Skill</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About" style={{color:'black'}} ><b>About</b></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/Contact" style={{color:'black'}}><b>Contact</b></Link>
                </li>
            </ul>
        </>
    )
}
export default Nav;