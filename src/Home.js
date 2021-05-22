import React from "react";
import web from "../src/images/mainpage.png";
import Common from "./Common";

const Home = () => {
    return (
        <>
        <Common 
        name='The Fan Page of Anime' 
        imgsrc={web} 
        visit="/service" 
        btname=" Let's Go Peeps"/>
        </>
    );
};

export default Home;