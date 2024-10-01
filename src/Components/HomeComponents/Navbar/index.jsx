import React from "react";
import Logo from "../../../logo.svg"
import CustomButton from "../../CustomButton";

const Navbar = () => {
    return(
        <div className="Navbar flex justify-between items-center px-8 py-6 font-semibold">
            <ul className="flex gap-5 text-sm">
                <li>Find designers</li>
                <li>Inspiration</li>
                <li>Jobs</li>
                <li>Go Pro</li>
            </ul>
            <img className="h-10 w-auto" src={Logo} alt="logo" />
            <ul className="text-sm">
                <input className="px-10  py-4 rounded-full" type="text" placeholder="Search" />
                <button className="px-5 py-3 ">Log in</button>
                <CustomButton text="Sign up" mode="dark"/>
            </ul>
        </div>
    )
}

export default Navbar