import React from "react";
import Navbar from "./navbar";

const home = () =>{
    return(
        <div>
            <Navbar/>
            <section className="hero-section">
                <h2>Welcome To</h2>
                <h1 style={{ fontWeight: "bold" }}>Death Notes Home Page</h1>
            </section>
        </div>
    )
}
export default home;
