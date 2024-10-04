import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdOutlineFilterList } from "react-icons/md";


const Subnav = () =>{
    const navs = ["Discover","Animation","Branding","Illustration","Mobile","Print","Product Design","Typography","Web Design"]
    return(
        <div className="Subnav flex justify-between items-center px-10 md:px-20 py-6">
            <button className="px-4 text-sm py-2 border rounded-md border-slate-200 gap-2 flex items-center justify-center">Following <FaAngleDown/></button>
            <ul className="flex gap-5 font-bold">
                {
                    navs.map(elem=>
                        <li className="px-3 hover:opacity-60 cursor-pointer py-1 text-sm rounded-full">{elem}</li>
                    )
                }
            </ul>
            <button className="px-4 text-sm py-2 border rounded-full border-slate-200 gap-2 flex items-center justify-center"><MdOutlineFilterList/> Filter</button>
        </div>
    )
}

export default Subnav