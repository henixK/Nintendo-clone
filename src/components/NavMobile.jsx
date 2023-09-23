import America from "../../public/assets/FlagUsaIconRegionSelect.jpg";
import {
    Support,
    ArrowDown,
    Star,
    Switch,
    Dpad,
    News,
    MarioHat,
    Cart,
    Profile,
    Menu,
    Heart,
    Nintendo,
} from "@acme/icons";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Data from "../../public/data.json";
import { NavSvg } from "./NavItem";
import SearchButton from "./SearchButtonMobile";
const iconMap = [<MarioHat />, <Dpad />, <Switch />, <News />, <Star />, <Support />];




const styleSvg = "18px";

export default function NavMobile({ children }) {
    const [clicked, setClicked] = useState(false);

    const toggleDropdown = () => {
        setClicked(!clicked);
    };
    const DropdownMenu = () => {
        const [activeMenu, setActiveMenu] = useState('main')
        return (
            <section className="absolute bottom-0 rounded-3xl bg-white w-full h-[60vh] -z-[1] border">
                <div className="relative">
                    <div className="absolute inset-0">
                        <div className="text-center py-4 border-b text-[#484848] bg-white rounded-t-3xl">
                            <h1>Menu</h1>
                        </div>
                        <ul className="overflow-y-scroll bg-slate-300 bg-opacity-30 h-[45vh] relative">

                                {Data.navbar.filter(item => item.key <= 5).map((data) => (
                                    <li
                                        className="cursor-pointer flex items-center gap-2 text-base font-bold bg-white text-[#484848] border-b px-5 py-3 relative" // Added 'relative' class
                                        key={data.key}
                                    >
                                        <span className="text-lg text-primary-color">
                                            {iconMap[data.icon]}
                                        </span>
                                        {data.title}
                                        {data.key !== 4 && (
                                            <span className="absolute right-5 text-base -rotate-90">
                                                <ArrowDown />
                                            </span>
                                        )}
                                    </li>
                                ))}


                                <div className="mt-5 mb-10">
                                    {Data.navbar.filter(item => item.key === 6).map(data => (
                                        <li className="cursor-pointer bg-white flex text-base font-bold items-center gap-2 text-[#484848] border-y px-5 py-3" key={data.key}>
                                            <span className="text-lg text-primary-color">
                                                {iconMap[data.icon] || [data.icon]}
                                            </span>
                                            {data.title}
                                        </li>
                                    ))}

                                    <li className="cursor-pointer bg-white flex text-base font-bold items-center gap-2 text-[#484848] border-b px-5 py-3">
                                        <span><img src={America} alt="" /></span>Change Region
                                    </li>

                                </div>

                        </ul>
                    </div>

                </div>

            </section>
        );
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
                    <div className="flex justify-between px-8 items-center relative  h-[58px]">
                        <NavSvg svg={<Menu />} onClick={toggleDropdown} />
                        <NavSvg svg={<Heart />} />
                        <SearchButton />
                        <NavSvg svg={<Cart />} />
                        <NavSvg svg={<Profile />} />
                    </div>
                </div>
                {clicked && (
                    <div className="relative">
                        <DropdownMenu />
                    </div>
                )}
            </div>
        </nav>
    );
}
