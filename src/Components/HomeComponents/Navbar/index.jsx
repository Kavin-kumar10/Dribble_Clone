import React from "react";
import Logo from "../../../logo.svg"
import CustomButton from "../../CustomButton";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar = () => {
    const User = JSON.parse(localStorage.getItem('user'))?.email;
    return(
        <div className="Navbar flex justify-between items-center px-5 md:px-10 py-6 font-bold gap-5">
            <ul className="hidden md:flex gap-7 text-sm items-center justify-start flex-grow">
                <img className="h-10 w-auto md:block lg:hidden" src={Logo} alt="logo" />
                <div className="group relative">
                    <li className="flex items-center gap-2 cursor-pointer">Find designers <FaAngleDown size={12}/></li>
                    <div className="absolute hidden group-focus-within:flex hover:flex top-0 left-0 py-8 group-hover:flex items-center justify-center">
                        <div className=" h-auto px-10 w-72 z-50 py-8 bg-white rounded-lg flex flex-col gap-5">
                            <ul className="flex flex-col gap-2 opacity-70">
                                <li className="text-sm">Design Search</li>
                                <li className="text-xs font-normal">Quickly find your next designer</li>
                            </ul>
                            <ul className="flex flex-col gap-2 opacity-70">
                                <li className="text-sm">Post Job</li>
                                <li className="text-xs font-normal">The #1 job board for design talent</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <li>Inspiration</li>
                <li>Jobs</li>
                <li>Go Pro</li>
            </ul>
            <div className="flex gap-5 items-center justify-center">
                <HiBars3BottomLeft size={30} className="block md:hidden"/>
                <img className="block md:hidden lg:block h-10 w-auto" src={Logo} alt="logo" />
            </div>
            <ul className="text-sm flex items-center justify-end gap-5 flex-grow">
                <div className="relative hidden lg:block">
                    <input className="outline-none focus:shadow-custom-shadow hover:shadow-custom-shadow px-10 py-4 rounded-full text-black font-light" type="text" placeholder="Search..." />
                    <span className="text-xl absolute left-4 top-4 text-gray-400"><IoSearchOutline/></span>           
                </div>
                <IoSearchOutline className="block md:hidden text-2xl text-black"/>
                {
                    !User?
                    <>
                        <Link to="/Login"><button className="cursor-pointer px-0 py-3 hidden md:block hover:opacity-50">Log in</button></Link>
                        <Link to="/Signup"><CustomButton text="Sign up" mode="dark"/></Link>    
                    </>
                    :
                    <div className="h-12 w-12 rounded-full object-cover relative group">
                        <img  src="https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=400x498&vertical=center" className="h-full w-full object-cover rounded-full "/>
                        <div className="absolute  z-50 items-center justify-center group-hover:flex hidden top-0 right-0  py-16">
                            <div className="flex flex-col items-center gap-5 justify-center px-5 pt-10 pb-5  min-w-80 py-10 bg-white rounded-lg">
                                <img src="https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=400x498&vertical=center" className="rounded-full h-20 w-20 object-cover" alt="" />
                                <h1 className="text-lg font-normal mb-5">KAVIN KUMAR M</h1>
                                <div className="w-full font-normal h-full gap-5 flex flex-col">
                                    <p>Upload Design Work</p>
                                    <p>Settings</p>
                                </div>
                                <div className="h-[0.05rem] w-full bg-slate-500"></div>
                                <p onClick={()=>{
                            localStorage.removeItem('user');
                            window.location.reload();
                        }} className="cursor-pointer flex self-start font-normal">Sign out</p>
                            </div>
                        </div>
                    </div>
                }
         
            </ul>
        </div>
    )
}

export default Navbar