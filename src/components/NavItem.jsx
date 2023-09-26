import React from "react";

export const NavItem = ({ svgIcon, text }) => {
    return (
        <div className="flex gap-2 cursor-pointer text-[#484848] hover:text-red-600 hover:fill-red-600">
            <span>{svgIcon}</span>
            <span className="text-sm">{text}</span>
        </div>
    );
};

export const NavSvg = ({ svg, onClick, children, open }) => {
    return (
        <li>
            <a onClick={onClick} className="text-2xl cursor-pointer relative text-secondary-color">
                {svg}
            </a>
            {open && children}
        </li>

    );
};
