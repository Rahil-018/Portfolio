import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <ul className="nav justify-content-center" style={{backgroundColor:'#cc4444'}}>
                <li className="nav-item" >
                    <Link className="nav-link active" aria-current="page" to="/"  style={{color:'black'}} >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Skill" style={{color:'black'}} >Skill</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About" style={{color:'black'}} >About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/Contact" style={{color:'black'}}>Contact</Link>
                </li>
            </ul>
        </>
    )
}
export default Nav;