const CustomButton = ({text,mode}) =>{
    return(
        <button className={`px-5 py-4 ${mode == "dark"?"bg-primary text-secondary border border-secondary rounded-full":"bg-secondary border border-primary rounded-full text-primary"}`}>
            {text}
        </button>
    )
}

export default CustomButton