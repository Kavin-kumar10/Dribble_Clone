import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Marquee = () => {

    const Profiles = useSelector((state)=>state.Data.Profiles);

    useEffect(() => {
        const marqueeContent = document.querySelector('.marquee-content');
        const clone = marqueeContent.cloneNode(true);
        marqueeContent.parentNode.appendChild(clone);
    }, []);

    return (
        <div className="marquee h-[40vh]">
            <div className="marquee-content gap-4">
                {Profiles.map((profile, index) => (
                    <div key={index} className="cursor-pointer marquee-item flex flex-col items-start h-72 lg:h-80 w-64 rounded-xl justify-end relative bg-white shadow-lg m-2">
                        <div className="absolute h-full w-full justify-end text-secondary flex rounded-xl flex-col gap-3 p-4">
                            <div className="flex flex-col">
                                <h1 className="text-xs font-bold">{profile.name}</h1>
                                <h2 className="text-xs font-bold">{profile.role}</h2>
                            </div>
                            <ul className="flex text-xs gap-2">
                                <li className="px-2 py-1 border border-gray-400 rounded-full">Product</li>
                                <li className="px-2 py-1 border border-gray-400 rounded-full">Mobile</li>
                            </ul>
                        </div>
                        {
                            profile.video?
                            <video 
                            width="600" 
                            autoPlay 
                            muted 
                            loop
                            className='h-full w-full object-cover rounded-2xl'
                          >
                            <source
                              src={profile.video}
                              type="video/mp4"
                            />
                          </video>
                          
                        :<img alt="Mercedes Bazan" width="273" height="340" className="object-cover h-full rounded-2xl" data-sizes="auto" data-aspectratio="0.8029411764705883" src={profile.profilePicture}/>        
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
