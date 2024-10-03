const CustomButton = ({text,mode}) =>{
    return(
        <button className={`px-6 py-4 font-semibold ${mode == "dark"?"bg-primary text-secondary border border-secondary rounded-full":"bg-secondary border border-primary rounded-full text-primary"}`}>
            {text}
        </button>
    )
}

export default CustomButton