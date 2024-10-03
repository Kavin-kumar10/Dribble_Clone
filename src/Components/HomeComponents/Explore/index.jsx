import React from "react";
import DesignCard from "../DesignCard";
import { useSelector } from "react-redux";

const Explore = () =>{
    const Designs = useSelector(state => state.Data.Designs)
    return(
        <div className="Explore min-h-screen flex flex-col p-4 sm:p-14 md:p-24 gap-14 items-center justify-center text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl p-10">Explore inspiring designs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
                {
                    Designs?.map((design)=>{
                        return(
                            <DesignCard key={design.id} design={design}/>
                        )
                    })
                }
            </div>
            <button className="border border-primary px-10 py-3 rounded-full">Browse more inspiration</button>
        </div>
    )
}

export default Explore