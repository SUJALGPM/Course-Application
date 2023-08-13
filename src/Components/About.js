import React from "react";
import Navbar from "./navbar";
import Course from "./Course";

const about = () =>{
    return(
        <div>
            <Navbar/>
            <div>
                
            </div>
                <hr/>
                <h1 className='text-center' style={{fontStyle:"tahoma",fontSize:50}}>Below Courses are available~~~</h1>
                <hr/>
                <Course title="Java Course" info="It's free so explore it.."/>
                <hr/>
                <Course title="Awd Course" info="Latest topic are updated so explore it.."/>
                <hr/>
                <Course title="Ngd Course" info="New update coming soon.." />
                <hr/>
                <Course title="Mad Course" info="It's free course for beginners" />    
                <hr/>
        </div>
    )
}
export default about;