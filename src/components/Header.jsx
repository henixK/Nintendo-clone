import React, { useState, useEffect } from "react";
import Hero from "../../public/assets/hero/3600x1300_SMBWonder.avif";
import HeroMobile from "../../public/assets/hero/2200x2000_SMBW.avif";
import { Es } from "@acme/icons";

export default function Header({ image, image2 }) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

    useEffect(() => {
        function handleResize() {
            setIsSmallScreen(window.innerWidth <= 768);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <main className="lg:mt-[5.6rem] border-b-[0.5px] border-slate-300">
            <div className="w-full h-full relative">
                <div
                    style={{ height: "calc((100% - 2rem) - 1.5rem)" }}
                    className="bg-hero bg-repeat absolute w-full z-0"
                ></div>
                <div className="w-full overflow-hidden lg:px-8 lg:pt-12 lg:pb-2 relative z-10">
                    <img
                        className="md:w-full rounded-2xl"
                        src={isSmallScreen ? HeroMobile : Hero} 
                        alt=""
                    />
                    <div className="px-6 text-center my-8 lg:hidden block md:block">
                        <h1 className="text-white">
                            The next evolution of Mario fun! Jump in 10/20
                        </h1>
                        <button className="mt-3 btn">Free Download</button>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="w-full hidden lg:hidden md:block">
                <div className="flex md:flex-row justify-center flex-col items-center gap-2">
                    <Es/>
                    <span
                        style={{ color: "rgb(72, 72, 72)" }}
                        className="text-xs font-thin"
                    >
                        Comic Mischief, Fantasy Violence
                    </span>
                </div>
            </div>

            {/* dekstop */}
            <div className="hidden lg:block lg:mt-8 lg:mb-12 text-center px-10">
                <div className="flex w-full justify-between items-center">
                    <div className="w-2/3 flex items-center gap-10">
                        <h1 className="">The next evolution of Mario fun! Jump in 10/20</h1>
                        <button className="btn">Free Download</button>
                    </div>
                    <div className="hidden lg:block">
                        <div className="w-full flex lg:flex-row flex-col items-center">
                        <Es style={{fontSize:"4em"}}/>
                            <span
                                style={{ color: "rgb(72, 72, 72)" }}
                                className="text-xs font-thin"
                            >
                                Comic Mischief, Fantasy Violence
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
