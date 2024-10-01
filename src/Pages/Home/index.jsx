import React from "react";
import Navbar from "../../Components/HomeComponents/Navbar";
import GetStarted from "../../Components/HomeComponents/GetStarted";

const Home = () =>{
    return(
        <div className="Home bg-secondary text-primary min-h-screen w-screen">
            <Navbar/>
            <GetStarted/>
        </div>
    )
}

export default Home