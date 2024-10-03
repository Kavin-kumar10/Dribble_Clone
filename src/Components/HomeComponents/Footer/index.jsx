import logo from "../../../logo.svg"
import { FaTwitter,FaFacebookSquare,FaInstagram,FaPinterest } from "react-icons/fa";


const Footer =() =>{
    return(
        <div className="Footer flex items-center flex-col  w-screen px-10 sm:px-32 md:px-40">
            <div className="top_foot flex items-center flex-col lg:flex-row justify-between gap-5 py-10 w-full">
                <img className="" src={logo} alt="" />
                <ul className="flex items-center flex-wrap justify-center gap-3 md:gap-5 font-semibold text-sm">
                    <li>For designers</li>
                    <li>Hire talent</li>
                    <li>Inspiration</li>
                    <li>Advertising</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Support</li>
                </ul>
                <ul className="flex items-center justify-center gap-2 text-xl">
                    <li><FaTwitter/></li>
                    <li><FaFacebookSquare/></li>
                    <li><FaInstagram/></li>
                    <li><FaPinterest/></li>
                </ul>
            </div>
            <div className="bottom_foot flex flex-col lg:flex-row justify-between opacity-50 gap-10 w-full py-10">
                <ul className="flex flex-wrap items-center justify-center gap-5">
                    <li>@ 2024 Dribbble</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Cookies</li>
                </ul>
                <ul className="flex flex-wrap items-center justify-center gap-5">
                    <li>Jobs</li>
                    <li>Designers</li>
                    <li>Freelancers</li>
                    <li>Tags</li>
                    <li>Places</li>
                    <li>Resources</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer