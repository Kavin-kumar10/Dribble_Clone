import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";



const DesignCard = () =>{
    return(
        <div className="DesignCard rounded-md flex flex-col gap-2">
            <img className="rounded-md" src="https://cdn.dribbble.com/userupload/16876495/file/original-3eac71e727fd8e577524ce60728ff369.png?resize=752x" alt="" />
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center flex-1 gap-2">
                    <img className="h-7 rounded-full" src="https://cdn.dribbble.com/users/68544/avatars/small/4c145fcf55db7976aa63183a03c7aa65.png?1672415553" alt="" />
                    <p>Dalius suoka</p>
                </div>
                <div className="flex-1 flex gap-2 justify-end">
                    <IoIosHeartEmpty size={20}/>
                    <IoEyeOutline size={20}/>
                </div>
            </div>
        </div>
    )
}

export default DesignCard