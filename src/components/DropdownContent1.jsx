import nintendoStore from "../../public/assets/dropdown/Mynintendostore.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Data from "../../public/data.json";
import { useState } from "react";
import { Tshirt, SalesTag, ControllerIcon, Dpad, Character, Star2 } from "@acme/icons";
import { Drawer } from "@mui/material";


const iconMap = [
    <Dpad />,
    <ControllerIcon />,
    <Tshirt />,
    <Star2 />,
    <Character />,
    <SalesTag />,
];

const Menu = ({ icon, title, li }) => {
    const menuIcon = iconMap[icon];

    return (
        <div>
            <div className="flex items-center gap-2">
                <span className="text-primary-color text-lg">{menuIcon}</span>
                <h3 className="text-base font-bold cursor-pointer hover:text-primary-color">
                    {title}
                </h3>
            </div>
            <ul>{li}</ul>
        </div>
    );
};



export default function DropdownContent1({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        if (onClose) {
            onClose();
        }
    };
    return (


        <section className="h-[300px] bg-white absolute w-screen top-8 left-0 mt-2 z-[2]">
{/*             <div className="absolute w-screen h-screen border-2 bg-black opacity-30 top-22 border-black  -z-[1] "></div> */}
            <div className="z-[99] absolute inset-0">
                <div className="w-full h-[60px] bg- bg-primary-color text-white text-center absolute top-0">
                    <div className="mt-4 flex justify-center">
                        <img src={nintendoStore} alt="" />
                    </div>
                    {isOpen && (
                        <div className="flex justify-center gap-5">
                            <div
                                className="absolute top-2 right-5 cursor-pointer"
                                onClick={handleClose}
                            >
                                <AiOutlineCloseCircle size={30} />
                            </div>
                        </div>
                    )}
                    <div className="bg-triangle h-8 bg-repeat-x absolute w-full mt-[1.18rem]"></div>
                </div>
                
                <div className=" absolute w-full top-20 flex justify-center gap-12">
                    {Data.dropdown.map((data) => (
                        <Menu
                            key={data.key}
                            title={data.title}
                            icon={data.iconsIndex}
                            li={
                                data.li &&
                                data.li.map((item, index) => (
                                    <li
                                        className="text-[#484848] font-thin my-2 cursor-pointer hover:text-primary-color"
                                        key={index}
                                    >
                                        {item}
                                    </li>
                                ))
                            }
                        />
                    ))}
                </div>
                <div className=" w-full flex justify-center">
                    <button className="absolute bottom-3 px-6 hover:bg-primary-color hover:bg-opacity-10 py-2 border text-lg border-primary-color text-primary-color font-bold rounded-xl w-fit ">
                        Shop all
                    </button>
                </div>
            </div>
        </section>

    );
}
