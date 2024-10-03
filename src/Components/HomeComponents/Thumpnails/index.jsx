import React,{useEffect} from "react";
import { useSelector } from "react-redux";

const Thumpnails = () =>{
    const Thumpnails = useSelector(state => state.Data.Thumpnails);

    useEffect(() => {
        const marqueeContent = document.querySelector('.marquee-content');
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.parentNode.appendChild(clone);
    }, []);
    return(
        <div className="marquee my-10">
        <div className="marquee-content gap-14 font-normal">
            {Thumpnails.map((thumpnail, index) => (
               <div className="flex flex-col gap-3 w-52">
                    <img src={thumpnail.image} className="rounded-lg " alt="image" />
                    <h1 className="font-mona-sans">{thumpnail.title}</h1>
               </div>
            ))}
        </div>
    </div>
    )
}

export default Thumpnails