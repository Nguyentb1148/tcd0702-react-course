import React from "react";
import { Link } from "react-router-dom";
const Navbar =()=>{

    return(
    <div>
        <div className="navbar bg-primary">
            <h2> Github finder</h2>
            <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
        </ul>
        </div>
    </div>
    );
}
export default Navbar;