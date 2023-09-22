import { useState } from "react";

export default function BasicDropdown({
  svgIcon,
  text,
  arrow,
  dropdownContent,
  toggleDropdown,
  itemref,
  isDropdownOpen, // Aggiungi questa prop
  setIsDropdownOpen, // Aggiungi questa prop
}) {
  const [clicked, setClicked] = useState(true);

  const arrowStyle = {
    transform: isDropdownOpen ? "rotate(0deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease",
  };

  const handleClick = () => {
    setClicked(!clicked);

    toggleDropdown(clicked);
  };

  return (
    <div ref={itemref}>
      <a
        className="flex items-center gap-2 cursor-pointer text-[#484848] hover:text-red-600 hover:fill-red-600 "
        onClick={() => {
          toggleDropdown(); // Gestisce l'apertura/chiusura del dropdown
          setIsDropdownOpen(!isDropdownOpen); // Cambia lo stato del dropdown
        }}
      >
        <span>{svgIcon}</span>
        <span className="text-sm">{text}</span>
        <span style={arrowStyle}>{arrow}</span>
      </a>

      {toggleDropdown && (
        <div className=" absolute left-0 w-screen mt-2 z-50">
          <div className="relative">
            <div className={`z-[99] absolute w-screen left-0 top-0`}>
              <div className="relative z-10">{dropdownContent}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
