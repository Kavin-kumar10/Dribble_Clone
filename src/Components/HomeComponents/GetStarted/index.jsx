import CustomButton from "../../CustomButton"
import { useState,useEffect } from "react";


const GetStarted = () =>{

    const [hue, setHue] = useState(0); 

    useEffect(() => {
      const intervalId = setInterval(() => {
        setHue((prevHue) => (prevHue + 1) % 360); 
      }, 200);
  
      return () => clearInterval(intervalId);
    }, []);
    return(
        <div className="GetStarted h-[90vh] md:h-[65vh] w-screen flex flex-col items-center justify-center gap-8">
            <p style={{backgroundColor: `hsl(${hue}, 50%, 80%)`}} className=" font-serif-font py-3 px-5 rounded-full text-[1rem] font-bold">Over 3 million ready-to-work creatives!</p>
            <h1 className="text-5xl sm:text-6xl md:text-[4.5rem] leading-[4rem] md:leading-[5rem] flex items-center text-center font-serif-font">The world's destination <br /> for design</h1>
            <h2 className="text-lg text-center md:text-xl p-2 font-bold">Get inspired by the work of millions of top-rated designers & agencies around the world.</h2>
            <CustomButton text="Get Started" mode="dark"/>
        </div>
    )
}

export default GetStarted