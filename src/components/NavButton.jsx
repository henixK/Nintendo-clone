export default function NavButton ({svgIcon, text}) {
    return (
        <div className="flex gap-2 cursor-pointer text-[#484848] hover:text-red-600 hover:fill-red-600">
            <span>{svgIcon}</span>
        <span className="text-sm">{text}</span>
        </div>
    )
}