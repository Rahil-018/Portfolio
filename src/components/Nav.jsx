import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <>
            <ul className="nav justify-content-center" style={{backgroundColor:'blue'}}>
                <li className="nav-item" >
                    <Link className="nav-link active" aria-current="page" to="/"  style={{color:'white'}} >Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Skill" style={{color:'white'}} >Skill</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About" style={{color:'white'}} >About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link " to="/Contact" style={{color:'white'}}>Contact</Link>
                </li>
            </ul>
        </>
    )
}
export default Nav;