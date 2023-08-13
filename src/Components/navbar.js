import React, { useState } from "react";
import { FaFacebookSquare,FaYoutubeSquare,FaTwitterSquare, FaUnderline } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () =>{
    const [showMediaIcons,setShowMediaIcons] = useState(false);
    return(
    <div>
        <nav className="main-nav">

            {/* Logo part 1 */}
            <div className="logo">
                <h2 style={{ fontWeight: "bold" }}>
                <span>C</span>ourse
                <span>A</span>pplication
                </h2>
            </div>

            {/* Logo part 2 */}
                <div className={showMediaIcons ? "mobile-menu-link" : "menu-link"}>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">View Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/addcourse">Add-Course</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/note">Notes</NavLink>
                    </li>
                </ul>
            </div>

            {/* Logo part 3 */}
            <div className="social-media">
                <ul className="soco-desktop">
                    <li>
                        <a href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569849%7Cb%7Cfacebook%20%27%7C&placement=&creative=589460569849&keyword=facebook%20%27&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696220912%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-327195741349%26loc_physical_ms%3D1007788%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw7aqkBhDPARIsAKGa0oLhhC3S7bIP9nVhZHzGszlYosYzX4ZuH6QS936mer2CMe8ZUEeVAYIaAtvdEALw_wcB" target="_facebook"><FaFacebookSquare className="facebook"/></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_youtube"><FaYoutubeSquare className="youtube"/></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_twitter"><FaTwitterSquare className="twitter"/></a>
                    </li>
                </ul>

                    {/* Hamburget menu start */}
                    <div className="hamburger-menu" style={{marginBottom:15,marginLeft:10}}>
                        <a href="#" onClick={()=>setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
                    </div>
            </div>
       </nav>

       {/* <section className="hero-section"> 
            <h2>Welcome To</h2>
            <h1 style={{fontWeight:"bold"}}>Death Notes~~~</h1>
       </section> */}
    </div> 
    )
}
export default Navbar;