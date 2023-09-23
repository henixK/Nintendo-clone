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
        <div className="absolute left-0 w-screen mt-2 z-50">
            <div className="relative">
                <div className={`z-[99] absolute w-screen left-0 top-0`}>
                    <div className="relative z-10">
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
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DropdownContent2;
