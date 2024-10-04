import React from "react";
import Logo from "../../../logo.svg"
import CustomButton from "../../CustomButton";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar = () => {
    const User = JSON.parse(localStorage.getItem('user'));
    return(
        <div className="Navbar flex justify-between items-center px-5 md:px-10 py-6 font-bold gap-5">
            <ul className="hidden md:flex gap-6 text-sm items-center justify-start flex-grow">
                <img className="h-10 w-auto md:block lg:hidden" src={Logo} alt="logo" />
                <li className="flex items-center gap-2">Find designers <FaAngleDown size={12}/></li>
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
                    <div className="h-12 w-12 rounded-full object-cover">
                        <img onClick={()=>{
                            localStorage.removeItem('user');
                            window.location.reload();
                        }} src="https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=400x498&vertical=center" className="h-full w-full object-cover rounded-full "/>
                    </div>
                }
         
            </ul>
        </div>
    )
}

export default Navbar