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
import Subnav from "../../Components/HomeComponents/Subnav";
import DesignCard from "../../Components/HomeComponents/DesignCard";
import Loader from "../../Components/HomeComponents/Loader";

const Home = () =>{
    const User = JSON.parse(localStorage.getItem("user")).email;
    const Designs = useSelector(state => state.Data.Designs);
    const Loading = useSelector(state => state.Data.loading);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProfiles());
        dispatch(fetchThumpnails())
        dispatch(fetchDesigns())
    },[])
    return(
        <div className="Home bg-secondary text-primary min-h-screen w-screen">
            <Navbar/>
            {
                User?
                <>
                    <Subnav/>
                    {
                        Loading?
                        <div className="px-10 md:px-20 py-6">
                            <div className="flex items-center h-[50vh] border-dashed border-2 border-primary w-full justify-center">
                                <div className="spinner"></div>
                            </div>
                        </div>
                        :<></>
                    }
                    <div className="px-10 md:px-20 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                    
                    {
                        Designs?.map((design)=>{
                            return(
                                <DesignCard key={design.id} design={design}/>
                            )
                        })
                    }
            </div>
                </>:
                <>
                    <GetStarted/>
                    <Marquee/>
                    <Explore/>
                    <DesignBanner/>
                    <Thumpnails/>
                </>
            }
          
            <Footer/>
        </div>
    )
}

export default Home