import { useState, useRef } from "react";
import {
    MarioHat,
    Controller,
    Switch,
    News,
    Star,
    ArrowDown,
} from "@acme/icons";
import BasicDropdown from "./DropdownMenu";
import DropdownContent1 from "./DropdownContent1";
import DropdownContent2 from "./DropdownContent2";
import DropdownCard from "./DropdownCard";
import Data from "../../public/data.json";
import useOutsideClick from "./useOutsideClick";
import { NavItem } from "./NavItem";
import { Drawer } from "@mui/material";


export default function BottomNavDesktop() {


    const [showPopup, setShowPopup] = useState({
        item1: false,
        item2: false,
        item3: false,
        item4: false,
    });

    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const item3Ref = useRef(null);
    const item4Ref = useRef(null);

    useOutsideClick(item1Ref, () => {
        if (showPopup.item1) {
            setShowPopup({ ...showPopup, item1: false });
        }
    });

    useOutsideClick(item2Ref, () => {
        if (showPopup.item2) {
            setShowPopup({ ...showPopup, item2: false });
        }
    });
    useOutsideClick(item3Ref, () => {
        if (showPopup.item3) {
            setShowPopup({ ...showPopup, item3: false });
        }
    });
    useOutsideClick(item4Ref, () => {
        if (showPopup.item4) {
            setShowPopup({ ...showPopup, item4: false });
        }
    });

    const styleSvg = "18px";

    return (
        <div className="border-b border-slate-200">
            <ul className="flex justify-center items-center lg:gap-5 lg:p-[0.6rem] relative z-[99]">
                <BasicDropdown

                    itemref={item1Ref}
                    toggleDropdown={() => {
                        setShowPopup({ ...showPopup, item1: !showPopup.item1 });
                    }}
                    text="My Nintendo Store"
                    svgIcon={<MarioHat style={{ fontSize: styleSvg }} />}
                    arrow={<ArrowDown style={{ transform: showPopup.item1 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}/>}
                    dropdownContent={showPopup.item1 && <DropdownContent1/>}
                    />
                <BasicDropdown
                    itemref={item2Ref}
                    toggleDropdown={() => {
                        setShowPopup({ ...showPopup, item2: !showPopup.item2 });
                    }}
                    text="Games"
                    svgIcon={<Controller style={{ fontSize: styleSvg }} />}
                    arrow={<ArrowDown style={{ transform: showPopup.item2 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}/>}
                    dropdownContent={showPopup.item2 &&
                        <DropdownContent2>
                            {Data.dropdownGames.map((data) => (
                                <DropdownCard title={data.title} key={data.key} img={data.img} />
                            ))}
                        </DropdownContent2>
                    }
                />
                <BasicDropdown
                    itemref={item3Ref}
                    toggleDropdown={() => {
                        setShowPopup({ ...showPopup, item3: !showPopup.item3 });
                    }}
                    text="Nintendo Switch"
                    svgIcon={<Switch style={{ fontSize: styleSvg }} />}
                    arrow={<ArrowDown style={{ transform: showPopup.item3 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}/>}
                    dropdownContent={showPopup.item3 &&
                        <DropdownContent2>
                            {Data.dropdownNintendoSwitch.map((data) => (
                                <DropdownCard title={data.title} key={data.key} img={data.img} />
                            ))}
                        </DropdownContent2>
                    }
                />
                <NavItem
                    text="News & Events"
                    svgIcon={<News style={{ fontSize: styleSvg }} />}
                />
                <BasicDropdown
                    itemref={item4Ref}
                    toggleDropdown={() => {
                        setShowPopup({ ...showPopup, item4: !showPopup.item4 });
                    }}
                    text="Play Nintendo"
                    svgIcon={<Star style={{ fontSize: styleSvg }} />}
                    arrow={<ArrowDown style={{ transform: showPopup.item4 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}/>}
                    dropdownContent={showPopup.item4 &&
                        <DropdownContent2>
                            {Data.dropdownPlayNintendo.map((data) => (
                                <DropdownCard title={data.title} key={data.key} img={data.img} />
                            ))}
                        </DropdownContent2>
                    }
                />
            </ul>
        </div>

    );
}
