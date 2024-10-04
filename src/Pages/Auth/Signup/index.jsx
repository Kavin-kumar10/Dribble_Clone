import Wix from "../wix.svg"
import { FcGoogle } from "react-icons/fc"

const Signup = () =>{
    return(
        <div className="Signup flex relative h-screen w-screen">
            <div className="flex flex-col w-1/4 absolute">
                <div className="wix bg-[#0d0c22] gap-10 px-10 py-20 flex flex-col items-start">
                    <img src={Wix} className="h-7" alt="" />
                    <h1 className="text-3xl text-secondary">Deliver more value to clients with an expert-led SEO course.</h1>
                    <p className="text-lg text-secondary">Take the course --</p>
                </div>
                <video class="wix-auth-sidebar__media h-full" muted="" autoplay="true" loop="true" poster="https://cdn.dribbble.com/uploads/58490/original/c3db6c95a7ecf8de7a4dfa8790432c8a.jpg?1727183764" src="https://cdn.dribbble.com/uploads/58489/original/9d10766cd3ed04dbbe770edb40140700.mp4?1727183698">
                </video>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="w-[30vw] gap-5 flex flex-col">
                    <h1 className="text-2xl font-semibold mb-10">Sign up to Dribbble</h1>
                    <button className="w-full hover:opacity-50 flex bg-primary text-secondary items-center justify-center font-semibold p-3 rounded-full border gap-5"><FcGoogle size={20}/> Sign in to Google</button>
                    <button className="w-full hover:opacity-50 flex bg-secondary text-primary items-center justify-center font-semibold p-3 rounded-full border ">Continue with email</button>
                    <p className="text-sm text-center mt-10">By creating an account you agree with our Terms of Service, Privacy Policy, and our default Notification Settings.</p>
                    <p className="text-center text-sm">Already have an account? <u>Sign In</u></p>
                </div>
            </div>
        </div>
    )
}

export default Signup