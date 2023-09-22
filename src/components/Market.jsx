
import React, { useRef } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function LayoutMarket({ title, children }) {
    const containerRef = useRef(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 300; // Puoi personalizzare la quantità di spostamento qui
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 300; // Puoi personalizzare la quantità di spostamento qui
        }
    };

    return (
        <main className="lg:px-32 px-5">
            <section>
                <div className="lg:flex lg:items-center lg:gap-4 w-max h-full mb-10">
                    <h1>{title}</h1>
                    <span className="hidden lg:block border-[0.5px] h-[40px] border-slate-300"></span>
                    <a className="text-red-500 font-bold underline underline-offset-4">
                        See full list
                    </a>
                </div>
                <div className="relative" >
                <div
                    className="grid grid-flow-col gap-10 overflow-x-auto lg:px-10 lg:overflow-hidden" ref={containerRef}>
                    {children}
                    <div className="paddles hidden lg:block">
                        <button className="left-paddle paddle" onClick={handleScrollLeft}>
                            <MdKeyboardArrowLeft size={60} />
                        </button>
                        <button className="right-paddle paddle" onClick={handleScrollRight}>
                            <MdKeyboardArrowRight size={60} />
                        </button>
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
}
