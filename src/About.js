import React from "react";
import abq from "../src/images/abq.jpg";
import Common from "./Common";

const About = () => {
    return (
        <>
        <Common 
        name='Get to Know the Team' 
        imgsrc={abq} 
        visit="/contact" 
        btname="Contact Now"/>
        </>
    );
};

export default About;