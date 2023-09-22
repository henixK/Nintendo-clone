import React, { useState, useEffect } from "react";
import Button from "./Button";

export default function SmallLayout({
    title,
    image,
    image2,
    secondTitle,
    button,
    children,
}) {
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
        <section className="w-full">
            <div className="px-3 lg:px-32">
                <h1 className="my-3">{title}</h1>
                <div className="rounded-md overflow-hidden my-10">
                    <img
                        className="w-full"
                        src={isSmallScreen ? image : image2}
                        alt={title}
                    />
                </div>
                <div className="mt-12 mb-10 flex items-center flex-col lg:flex-row lg:gap-10">
                    <h2>{secondTitle}</h2>
                    <button className="mt-10 lg:mt-0 btn">{button}</button>
                </div>
            </div>
            {children}
        </section>
    );
}
