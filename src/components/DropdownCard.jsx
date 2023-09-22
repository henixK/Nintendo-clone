export default function DropdownCard ({img, title}) {
    return (
        <div>
            <div className=" border h-[4.25rem] px-4 rounded-2xl text-[#484848] hover:bg-primary-color cursor-pointer flex items-center justify-center">
                <img className=" h-auto max-h-full " src={img} alt="" />
            </div>
            <h3 className="text-center mt-2 font-thin">{title}</h3>
        </div>
        
    )
}