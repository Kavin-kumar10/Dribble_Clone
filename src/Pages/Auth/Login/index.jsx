import Wix from "../wix.svg"
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../../Redux/AxiosCalls";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";



const Login = ()=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { user, error, loading } = useSelector((state) => state.Auth);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
        setTimeout(()=>{
            navigate('/');
        },1000)
    };
    
    return(
        <div className="Login flex relative h-screen w-screen">
            <div className="flex-col w-1/4 absolute hidden lg:flex">
                <div className="wix bg-[#0d0c22] px-10 py-20 gap-10 flex flex-col items-start">
                    <img src={Wix} className="h-7" alt="" />
                    <h1 className="text-4xl text-secondary">Deliver more value to clients with an expert-led SEO course.</h1>
                    <p className="text-lg text-secondary">Take the course --</p>
                </div>
                <video class="wix-auth-sidebar__media h-full" muted="" autoplay="true" loop="true" poster="https://cdn.dribbble.com/uploads/58490/original/c3db6c95a7ecf8de7a4dfa8790432c8a.jpg?1727183764" src="https://cdn.dribbble.com/uploads/58489/original/9d10766cd3ed04dbbe770edb40140700.mp4?1727183698">
                </video>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <form onSubmit={handleSubmit} className="w-full p-10 sm:p-0 sm:w-1/2 md:w-1/3 gap-5">
                    <h1 className="text-3xl font-semibold mb-10">Sign in to Dribbble</h1>
                    <button className="w-full flex items-center justify-center font-semibold p-3 rounded-full border gap-5"><FcGoogle size={20}/> Sign in to Google</button>
                    <div className="flex flex-col gap-2 my-5">
                        <label htmlFor="user">Username or Email</label>
                        <input type="email" placeholder="kavinkumarm@presidio.com" value={email} onChange={(e) => setEmail(e.target.value)} id="user" className="border px-4 py-4 rounded-2xl outline-none"
  style={{ boxShadow: 'rgba(234, 100, 217, 0.1) 0px 0px 0px 4px;' }}  />
                    </div>
                    <div className="flex flex-col gap-2 my-5">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="pass" value={password} onChange={(e) => setPassword(e.target.value)}  id="password"  className="border px-4 py-4 rounded-2xl outline-none"
  style={{ boxShadow: 'rgba(234, 100, 217, 0.1) 0px 0px 0px 4px;' }} />
                    </div>
                    <button type="submit" disabled={loading} className="py-3 px-3 rounded-full flex items-center text-center justify-center w-full text-secondary bg-primary">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login