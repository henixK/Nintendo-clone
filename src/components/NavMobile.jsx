import America from "../../public/assets/FlagUsaIconRegionSelect.webp";
import {
    Search,
    Heart,
    Cart,
    Profile,
    Support,
    ArrowDown,
    Star,
    Switch,
    Dpad,
    News,
    Menu,
    MarioHat,
    Nintendo,
} from "@acme/icons";
import { useState } from "react";
import Data from "../../public/data.json";
import NavButton from "./NavButton";

const iconMap = [<MarioHat />, <Dpad />, <Switch />, <News />, <Star />];

const NavSvg = ({ svg, onClick }) => {
    return (
        <a onClick={onClick} className="text-2xl cursor-pointer relative">
            {svg}
        </a>
    );
};

const styleSvg = "18px";

export default function NavMobile() {
    const [clicked, setClicked] = useState(false);

    const toggleDropdown = () => {
        setClicked(!clicked);
    };
    const Dropdown = () => {
        return (
            <section className="absolute bottom-0 rounded-3xl bg-white w-full min-h-[400px] max-h-[400px] -z-[1] border-2 overflow-hidden">
                <div className="text-center py-4 border-b text-[#484848] bg-white ">
                    <h1>Menu</h1>
                </div>
                <div className="border-2 border-green-500 overflow-scroll min-h-[800px]">
                    <ul className="flex flex-col text-black bg-white">
                        {/* Add more content to exceed the container's height */}
                        {Data.navbar.map((data) => (
                            <li
                                className="flex items-center gap-2 text-lg text-[#484848] border-b px-5 py-3"
                                key={data.key}
                            >
                                <span className="text-lg text-primary-color">
                                    {iconMap[data.icon]}
                                </span>
                                {data.title}
                            </li>
                        ))}
                    </ul>
                    <div></div>
                    <div className="flex flex-col">
                        <div className="border-2 border-black">ciao</div>
                        <div className="border-2 border-black">ciao</div>
                        <div className="border-2 border-black">ciao</div>
                        <div className="border-2 border-black">ciao</div>
                        <div className="border-2 border-black">ciao</div>
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
                        <div className="w-[60px] h-[60px] -mt-4 bg-primary-color  rounded-full">
                            <button className="  w-full h-full text-3xl text-white">
                                <Search />
                            </button>
                        </div>
                        <NavSvg svg={<Cart />} />
                        <NavSvg svg={<Profile />} />
                    </div>
                </div>
                {clicked && (
                    <div className="relative">
                        <Dropdown />
                    </div>
                )}

            </div>
        </nav>
    );
}
