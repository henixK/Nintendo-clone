
export default function DropdownMenu({
  svgIcon,
  text,
  arrow,
  dropdownContent,
  toggleDropdown,
  itemref,
}) {

  return (
    <div ref={itemref}>
      <a
        className="flex items-center gap-2 cursor-pointer text-[#484848] hover:text-red-600 hover:fill-red-600 "
        onClick={() => {
          toggleDropdown(); // Gestisce l'apertura/chiusura del dropdown
        }}
      >
        <span>{svgIcon}</span>
        <span className="text-sm">{text}</span>
        <span>{arrow}</span>
      </a>

        
        {toggleDropdown && 
          dropdownContent}



    </div>
  );
}
