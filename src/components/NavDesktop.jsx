import React from "react";
import { Nintendo } from "@acme/icons";
import America from "../../public/assets/FlagUsaIconRegionSelect.webp";
import SearchBar from "./SearchBar";


export default function NavDesktop({ children, bottom }) {
    return (
        <nav className="lg:block hidden md:hidden">
            <div className="w-full z-[99] fixed top-0 bg-white">
                <div className=" flex justify-between border-b border-slate-200">
                    <div className="flex items-center gap-6 overflow-hidden">
                        <div className="bg-red-600 p-4">
                            <Nintendo style={{ width: "80px" }} />
                        </div>
                        <div>
                            <SearchBar />
                        </div>
                    </div>
                    <ul className="flex items-center py-3 gap-8 px-5">
                        {children}
                        <img className="block cursor-pointer" src={America} alt="" />
                    </ul>
                </div>
                    {bottom}
            </div>
        </nav>
    );
}
