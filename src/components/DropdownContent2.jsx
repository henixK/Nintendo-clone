import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";

const DropdownContent2 = ({ children, onClose }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <section className="py-[2rem] bg-white">
            {isOpen && (
                <div className="fixed w-screen h-screen border-2 bg-black opacity-30 top-22 border-black -z-20"></div>
            )}

            {isOpen && (
                <div className="flex justify-center gap-5">
                    <div
                        className="absolute top-2 right-5 cursor-pointer"
                        onClick={handleClose}
                    >
                        <AiOutlineCloseCircle
                            stroke="#484848"
                            fill="#484848"
                            className="hover:opacity-70"
                            size={30}
                        />
                    </div>
                    {children}
                </div>
            )}
        </section>
    );
};

export default DropdownContent2;
