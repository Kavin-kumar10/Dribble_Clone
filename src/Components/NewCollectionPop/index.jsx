import React from "react";
import { useDispatch } from "react-redux";
import { IoIosClose } from "react-icons/io";
import { toggleNewCollectionPop } from "../../Redux/PopSlice";

const NewCollectionPop = () =>{
    const dispatch = useDispatch();
    return(
        <div className="NewCollectionPop h-screen flex justify-center p-2 md:p-10 fixed top-0 left-0 z-40 w-screen bg-[#1E1E1EE6]">
        <div className="w-full sm:w-3/5 md:w-2/5 flex flex-col h-fit bg-white p-2 rounded-xl">
            <div className="flex justify-end">
                <IoIosClose className="cursor-pointer" onClick={()=>{
                    dispatch(toggleNewCollectionPop());
                }} size={30}/>
            </div>
            <div className="flex flex-col gap-0 h-full">
                <div className="flex flex-col px-12">
                    <p className="text-sm ">Create a new Collection</p>
                    <div className="h-[1px] w-full bg-gray-400 opacity-50"></div>
                </div>
                <div className="flex flex-col px-12 py-6 gap-1">
                    <h1 className="text-lg">Name</h1>
                    <input className=" outline-none focus:shadow-custom-shadow hover:shadow-custom-shadow px-3 py-4 text-sm rounded-lg text-black font-light border border-gray-200" type="text"  />
                </div>
                <div className="flex flex-col px-12 py-1 gap-1">
                    <h1 className="text-lg">Description (Optional)</h1>
                    <textarea className="outline-none focus:shadow-custom-shadow hover:shadow-custom-shadow px-3 py-4 text-sm rounded-lg text-black font-light border border-gray-200" type="text"  />
                </div>
                <div className="flex flex-col px-12 py-2 gap-1">
                    <p className="opacity-50 text-sm">URLs are Hyperlinked. Only a tag is allowed</p>
                </div>
                <div className="flex gap-5 px-12 py-6">
                    <button className="px-4 py-2 border border-primary text-secondary bg-primary rounded-full text-sm">Create Collection</button>
                    <button onClick={()=>dispatch(toggleNewCollectionPop())} className="px-4 py-2 border border-primary rounded-full text-sm">Cancel</button>
                </div>
            </div>
        
        </div>
    </div>
    )
}

export default NewCollectionPop