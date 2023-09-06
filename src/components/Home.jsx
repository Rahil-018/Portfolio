import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src="https://th.bing.com/th/id/OIP.cPh7ujRIfcHAy4kW2ADGOwHaHa?w=171&h=180&c=7&r=0&o=5&pid=1.7" className="App-logo " alt="logo" />
        </header>
        <h6>HELLO,</h6>
        <h1>I'm Web<br />
          <span style={{ color: "#FF0066" }}>D</span>
          <span style={{ color: "#00FFFF" }}>E</span>
          <span style={{ color: "#0000FF" }}>V</span>
          <span style={{ color: "#7CFC00" }}>L</span>
          <span style={{ color: "#8B4513" }}>O</span>
          <span style={{ color: "#FF9966" }}>P</span>
          <span style={{ color: "#008000" }}>E</span>
          <span style={{ color: "#FF0066" }}>R</span> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg></h1>

        <button className="btn btn-primary"><Link to="/About" style={{ color: 'white' }}>Hire Me</Link></button>
      </div>
    </>
  )
}
export default Home;