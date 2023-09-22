import React, { useRef } from "react";

const ScrollableGrid = ({ children }) => {
    const containerRef = useRef(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 100; // Puoi personalizzare la quantità di spostamento qui
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 100; // Puoi personalizzare la quantità di spostamento qui
        }
    };

    return (
        <div className="relative">
            <button
                onClick={handleScrollLeft}
                className="absolute left-0 top-0 bottom-0 bg-gray-200 p-2"
            >
                &lt;
            </button>
            <button
                onClick={handleScrollRight}
                className="absolute right-0 top-0 bottom-0 bg-gray-200 p-2"
            >
                &gt;
            </button>
            <div
                className="grid grid-flow-col gap-10 overflow-x-auto px-10"
                ref={containerRef}
            >
                {children}
            </div>
        </div>
    );
};

export default ScrollableGrid;
