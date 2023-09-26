import America from "../../public/assets/FlagUsaIconRegionSelect.jpg";
import {
    Nintendo,
} from "@acme/icons";
import { useState } from "react";


const styleSvg = "18px";
function Dropdown({ children }) {
    const [activeMenu, setActiveMenu] = useState('main')
    return (
        <section className="absolute bottom-0 rounded-3xl bg-white w-full h-[60vh] -z-[1] border">
            <div className="relative">
                {children}
            </div>
        </section>
    );
};




export default function NavMobile({ children }) {
    const [clicked, setClicked] = useState(false);

    const toggleDropdown = () => {
        setClicked(!clicked);
    };
    return (
        <nav className="w-full h-full relative bg-[#E60012] block md:block lg:hidden">
            <header className="px-3 h-[46px] flex items-center justify-between">
                <div className="py-10 w-[100px] text-2xl">
                    <a href="">
                        <Nintendo />
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src={America} alt="" />
                    </a>
                </div>
            </header>
            <div className="fixed bottom-4 w-full px-2 h-[58px] z-[99]">
                <div
                    style={{ boxShadow: "0px 0.25rem 0.5rem rgba(0, 0, 0, 0.2)" }}
                    className=" bg-white z-20 w-full rounded-full"
                >
                    <ul className="flex justify-between px-8 items-center relative text-[#484848] h-[58px]">
                        {children}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
