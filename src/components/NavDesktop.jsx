import React from "react";
import { Search, Heart, Cart, Profile, Support, ArrowDown, Nintendo } from "@acme/icons";
import America from "../../public/assets/FlagUsaIconRegionSelect.webp";
import BottomNavDesktop from "./BottomNavDesktop";
import NavButton from "./NavButton";

const styleSvg = "18px";

export default function NavDesktop() {
    return (
        <nav className="lg:block hidden md:hidden">
            <div className="w-full z-[99] fixed top-0 bg-white">
                <div className=" flex justify-between border-b border-slate-200">
                    <div className="flex items-center gap-6 overflow-hidden">
                        <div className="bg-red-600 p-4">
                        <Nintendo style={{ width: "80px" }} />
                        </div>
                        <div>
                            <div className="border-b border-black hover:border-red-600 hover:text-red-600">
                                <form className="flex items-center justify-between py-1 hover:fill-red-600 ">
                                    <div className="flex items-center gap-2 cursor-pointer ">
                                        <div>
                                            <Search />
                                        </div>
                                        <input
                                            className="text-sm font-thin outline-none w-[300px] hover:text-red-500 hover:placeholder:text-red-500  "
                                            type="text"
                                            placeholder="Search"
                                        />
                                    </div>
                                    <div className="text-xs flex items-center gap-2 ">
                                        <p className="text-sm font-normal hover:text-red-500">
                                            All categories
                                        </p>
                                        <div>
                                            <ArrowDown />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ul className="flex items-center py-3 gap-8 px-5">
                        <NavButton text="Support"
                            svgIcon={<Support style={{ fontSize: styleSvg }} />}/>
                        <NavButton
                            text="Wish List"
                            svgIcon={<Heart style={{ fontSize: styleSvg }} />}
                        />
                        <NavButton
                            text="Cart"
                            svgIcon={<Cart style={{ fontSize: styleSvg }} />}
                        />
                        <NavButton
                            text="Log in / Sign up"
                            svgIcon={<Profile style={{ fontSize: styleSvg }} />}
                        />
                        <img className="block cursor-pointer" src={America} alt="" />
                    </ul>
                </div>
                <div className="border-b border-slate-200">
                    <BottomNavDesktop />
                </div>
            </div>
        </nav>
    );
}
