import React from "react";
import { Link } from "react-router-dom";
const Home=()=>{
  return(
    <>
      <div className="container">
        <div className="m-5 flex items-centre justify-between">
          <div className="left flex-1 justify-center justify-between">
            <img src="https://th.bing.com/th?id=OIP.QdIrCNdF2ZVylABjjes1LAHaGq&w=263&h=237&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt="..."/>
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