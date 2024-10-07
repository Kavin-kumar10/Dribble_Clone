import React from "react";
import { IoIosClose } from "react-icons/io";
import CustomButton from "../CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollectionPop, toggleNewCollectionPop } from "../../Redux/PopSlice";
import { addItemToCollection, setSelectedCollection } from "../../Redux/DataSlice";
import { addimage } from "../../assets";


const CollectionPop = () =>{
    const Collections = useSelector(state => state.Data.Collections)
    const selectedCollection = useSelector(state => state.Data.selectedCollection);
    const dispatch = useDispatch();
    return(
        <div className="CollectionPop h-screen flex justify-center p-2 sm:p-10 fixed top-0 left-0 z-40 w-screen bg-[#1E1E1EE6]">
            <div className="w-full sm:w-3/5 md:w-2/5 flex flex-col h-2/3 bg-white p-2 rounded-xl">
                <div className="flex justify-end">
                    <IoIosClose className="cursor-pointer" onClick={()=>dispatch(toggleCollectionPop())} size={30}/>
                </div>
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col px-12 pt-6 gap-5">
                            <h1 className="text-xl">Add this Shot to the Collection</h1>
                            <input className="outline-none focus:shadow-custom-shadow hover:shadow-custom-shadow px-3 py-4 text-sm rounded-lg text-black font-light border border-gray-500" type="text" placeholder="Filter Collections..." />
                        </div>
                        <div className="flex flex-col px-12 gap-3 overflow-y-scroll h-[28vh]">
                            {
                                Collections.map((collection,index)=>(
                                    <div key={index} onClick={()=>dispatch(setSelectedCollection(collection))} className={`${selectedCollection == collection ? "bg-gray-300":"bg-gray-100"} flex p-2 cursor-pointer rounded-lg bg-gray-200 gap-5`}>
                                        <img className="h-16 rounded-md" src={addimage} alt="" />
                                        <div className="flex flex-col gap-2 items-start">
                                            <h1 className="text-md">{collection.name}</h1>
                                            <p className="text-xs">{collection.items.length} shots</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex justify-between px-12 py-6">
                        <button onClick={()=>{
                            dispatch(toggleCollectionPop());
                            dispatch(toggleNewCollectionPop());
                            }} className="px-4 py-2 border border-primary rounded-full text-sm">Create a new Collection</button>
                        <button onClick={()=>{
                            dispatch(addItemToCollection());
                            dispatch(toggleCollectionPop());
                        }} className="px-4 py-2 border border-primary text-secondary bg-primary rounded-full text-sm">Done</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionPop