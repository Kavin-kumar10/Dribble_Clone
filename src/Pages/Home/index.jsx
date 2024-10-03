import React,{useState,useEffect} from "react";
import Navbar from "../../Components/HomeComponents/Navbar";
import GetStarted from "../../Components/HomeComponents/GetStarted";
import Marquee from "../../Components/HomeComponents/Marquee";
import Explore from "../../Components/HomeComponents/Explore";
import DesignBanner from "../../Components/HomeComponents/DesignBanner";
import Footer from "../../Components/HomeComponents/Footer";
import { useSelector,useDispatch } from "react-redux";
import { fetchDesigns, fetchProfiles,fetchThumpnails } from "../../Redux/AxiosCalls";
import Thumpnails from "../../Components/HomeComponents/Thumpnails";

const Home = () =>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProfiles());
        dispatch(fetchThumpnails())
        dispatch(fetchDesigns())
    },[])
    return(
        <div className="Home bg-secondary text-primary min-h-screen w-screen">
            <Navbar/>
            <GetStarted/>
            <Marquee/>
            <Explore/>
            <DesignBanner/>
            <Thumpnails/>
            <Footer/>
        </div>
    )
}

export default Home