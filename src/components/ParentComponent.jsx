import React, { useState } from "react";
import NavItem from "./BasicDropdown"; // Assicurati di importare correttamente il tuo componente NavItem

export default function ParentComponent() {
    const [dropdownStates, setDropdownStates] = useState(Array(4).fill(false)); // Inizializza gli stati dei dropdown a false

    const toggleDropdown = (index) => {
        const newDropdownStates = [...dropdownStates];
        newDropdownStates[index] = !newDropdownStates[index];
        setDropdownStates(newDropdownStates);
    };

    const dropdownData = [
        {
            svgIcon: "Icon1",
            text: "Text1",
            arrow: "Arrow1",
            dropdownContent: "Content1",
        },
        {
            svgIcon: "Icon2",
            text: "Text2",
            arrow: "Arrow2",
            dropdownContent: "Content2",
        },
        {
            svgIcon: "Icon3",
            text: "Text3",
            arrow: "Arrow3",
            dropdownContent: "Content3",
        },
        {
            svgIcon: "Icon4",
            text: "Text4",
            arrow: "Arrow4",
            dropdownContent: "Content4",
        },
    ];

    return (
        <ul>
            {dropdownData.map((data, index) => (
                <NavItem
                    key={index}
                    isOpen={dropdownStates[index]}
                    toggleDropdown={() => toggleDropdown(index)}
                    {...data}
                />
            ))}
        </ul>
    );
}
