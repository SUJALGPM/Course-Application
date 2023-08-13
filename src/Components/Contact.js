import React from "react";
import Navbar from "./navbar";
import { Card,CardBody,CardText,CardSubtitle } from "reactstrap";

const contact = () =>{
    return(
        <div>
            <Navbar/>
            <h1 color="Green" style={{ marginTop: 70 }} className="text-center">Feel free to contact us!</h1>
            <ul>
                <li>
                    <a href="https://instagram.com/_sujal_dingankar?igshid=MzNlNGNkZWQ4Mg==" style={{fontSize:30 ,marginLeft:550}}>~~Instagram handle</a>
                </li>
                <li>
                    <a href="Mailme.sujaldingankar@gmail.com" style={{ fontSize: 30, marginLeft: 600 }}>~~Mail Me....</a>
                </li>
                <li>
                    <a href="#" style={{ fontSize: 30, marginLeft: 510 }}>Phone_no = 7798802841</a>
                </li>
            </ul>
        </div>
    )
}

export default contact;