import CustomButton from "../../CustomButton"

const DesignBanner = () =>{
    return(
        <div className="DesignBanner h-[100vh] md:h-[85vh] w-screen text-center font-light bg-[#ffda79] gap-10 flex items-center justify-center flex-col p-5">
            <h1 className="font-serif-font font-semibold text-4xl md:text-5xl lg:text-6xl w-full md:w-1/3">Find your next designer today</h1>
            <p className="text-lg md:text-lg lg:text-[1.2rem] font-mona-sans w-full md:w-1/3 leading-relaxed">The world's leading brands use Dribbble to hire creative talent. Browse millions of top-rated portfolios to find your perfect creative match.</p>
            <div className="flex items-center gap-5 flex-wrap justify-center">
                <CustomButton text="Get Started now" mode="dark"/>
                <button className="font-semibold hover:opacity-50 px-4 py-3 md:px-6 md:py-4 bg-secondary text-primary border border-secondary rounded-full">Learn about hiring</button>
            </div>
           <p className="text-lg md:text-xl">Are you a designer? <u>Join Dribble</u></p>
        </div>
    )
}

export default DesignBanner