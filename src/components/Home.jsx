import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
  return(
    <>
      <div className="container">
        <div className="m-5 flex items-centre justify-between">
          <div className="left flex-1 justify-center justify-between">
            <img src="https://th.bing.com/th/id/OIP.5PxGgx_aOWpTkul_D3nnbwAAAA?w=335&h=185&c=7&r=0&o=5&pid=1.7" alt="..."/>
          </div>
          <div className="m-5 right flex-1">
            <h6>HELLO,</h6>
            <h1>I'm Web<br/>
            <span>Developer</span></h1>
            <button className="btn btn-danger"><Link to="/About" style={{color:'black'}}>Hire Me</Link></button>
          </div>
        </div>
        </div> 
    </>
  )
}
export default Home;