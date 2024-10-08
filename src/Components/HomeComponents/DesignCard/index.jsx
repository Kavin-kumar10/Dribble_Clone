import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { IoBookmarkOutline,IoBookmark } from "react-icons/io5";
import { IoMdHeart } from "react-icons/io";
import { toggleCollectionPop } from "../../../Redux/PopSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDesign } from "../../../Redux/DataSlice";
import { addToLikedDesigns } from "../../../Redux/DataSlice";
import { FaRegHeart } from "react-icons/fa6";

const DesignCard = ({design}) =>{
    const dispatch = useDispatch();
    const likedDesigns = useSelector(state => state.Data.likedDesigns);
    const savedDesigns = useSelector(state => state.Data.savedDesigns);
    return(
        <div className="DesignCard rounded-md flex flex-col gap-2 ">
            <div className="relative group cursor-pointer">
                <div className="absolute rounded-md opacity-0 group-hover:opacity-100 duration-500 flex items-end justify-end h-full w-full">
                    <div className="w-full h-2/3 rounded-md bg-gradient-to-b from-transparent flex items-end py-4 justify-center px-3 via-[rgba(225,225,225,0.1)] to-black">
                        <ul className="flex gap-1 items-center justify-between w-full">
                            <li className="truncate w-3/5 font-bold text-secondary">{design.title}</li>
                            <div className="flex gap-2">
                                <li onClick={()=>{
                                    dispatch(toggleCollectionPop());
                                    dispatch(setSelectedDesign(design));
                                }} className="p-3 bg-secondary rounded-full text-black">{
                                    savedDesigns.includes(design)?
                                    <IoBookmark size={15} className="text-[#ea64d9]"/> :
                                    <IoBookmarkOutline size={15}/>
                                }
                                    </li>
                                <li onClick={()=>dispatch(addToLikedDesigns(design))} className="p-3 bg-secondary rounded-full text-black">
                                    {
                                        likedDesigns.includes(design)?
                                        <IoMdHeart size={15} className="text-[#ea64d9]"/> :
                                        <IoIosHeartEmpty size={15}/>
                                    }
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <img className="rounded-md" src={design.image} alt="" />
            </div>
            <div className="flex items-center justify-between w-full relative">
                <div className="flex items-center flex-1 gap-2">
                    <img className="h-7 rounded-full" src={design.logo} alt="" />
                    <p className="truncate">{design.name}</p>
                    <p className="p-1 text-[0.6rem] font-bold text-white rounded-md bg-[#CCCCCC]">{design.mode}</p>
                </div>
                <div className="text-slate-600 text-xs items-center flex-1 flex gap-1 justify-end">
                    <IoIosHeartEmpty size={15}/>
                    <p>24</p>
                    <IoEyeOutline size={15}/>
                    <p>2.3k</p>
                </div>
            </div>
         
        </div>
    )
}

export default DesignCard