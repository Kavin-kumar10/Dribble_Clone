import React from "react";

const Loader = ()=>{
    return(
        <div className="flex items-center h-[50vh] border-dashed border-2 border-primary w-full justify-center">
            <div className="spinner"></div>
        </div>
    )
}

export default Loader