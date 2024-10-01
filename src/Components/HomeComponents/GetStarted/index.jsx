import CustomButton from "../../CustomButton"

const GetStarted = () =>{
    return(
        <div className="GetStarted h-[50vh] w-screen flex flex-col items-center justify-center gap-5">
            <p className="p-3 rounded-full">Over 3 million ready-to-work creatives!</p>
            <h1 className="text-7xl flex items-center text-center">The world's destination <br /> for design</h1>
            <h2>Get inspired by the work of millions of top-rated designers & agencies around the world.</h2>
            <CustomButton text="Get Started" mode="dark"/>
        </div>
    )
}

export default GetStarted