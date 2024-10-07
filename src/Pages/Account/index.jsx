import React from "react";
import Navbar from "../../Components/HomeComponents/Navbar";
import { SlOptions } from "react-icons/sl";
import Footer from "../../Components/HomeComponents/Footer";


const Account = () =>{
    const AccountSubNav = ["Work","Boosted Shots","Collections","Liked Shots","About"]
    return(
        <div className="Account flex flex-col min-h-screen overflow-x-hidden">
            <Navbar/>
            <div className="Profile flex items-start sm:items-center justify-center flex-col px-5 sm:px-10 md:px-20">
                <div className="flex flex-col md:flex-row gap-10 py-8 md:py-16">
                    <img  src="https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=400x498&vertical=center" className="h-20 w-20 object-cover rounded-full "/>
                    <div className="flex flex-col items-start justify-center gap-3">
                        <h1 className="text-4xl font-bold">Kavin Kumar M</h1>
                        <p>Teni, India.</p>
                        <div className="flex gap-3">
                            <button className="px-4 py-3 rounded-full border border-slate-500">Edit Profile</button>
                            <button className="px-4 py-3 rounded-full border border-slate-500"><SlOptions size={20}/></button>
                        </div>
                    </div>
                </div>
                <ul className="flex gap-3 overflow-scroll truncate w-screen font-semibold text-sm self-start">
                    {
                        AccountSubNav?.map(elem=>{
                            return(
                                <li key={elem} className="px-5 py-3">{elem}</li>
                            )
                        })
                    }
                </ul>
                <div className="h-[1px] w-full opacity-50 my-6 bg-gray-500"></div>
                <div className="h-[40vh]"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Account