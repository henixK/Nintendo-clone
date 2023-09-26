import America from "../../public/assets/FlagUsaIconRegionSelect.jpg";
import {
    Support,
    ArrowDown,
    Star,
    Switch,
    Dpad,
    News,
    MarioHat,
    Icons8Close
} from "@acme/icons";
import { CSSTransition } from "react-transition-group";
import { useState, useRef, useEffect } from "react";
import Accordion from "./Accordion";
import Data from "../../public/data.json";
import React from "react";


const iconMap = [<MarioHat />, <Dpad />, <Switch />, <News />, <Star />, <Support />];

export default function DropdownMobileMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (activeMenu === "main" && dropdownRef.current) {
            setMenuHeight(dropdownRef.current.offsetHeight);
        } else {
            setMenuHeight(null);
        }
    }, [activeMenu]);


    function DropdownItem({ leftIcon, rightIcon, className = "", children, goToMenu }) {
        return (
            <a
                href="#"
                className={`${className} flex items-center gap-2 text-base text-[#484848] font-bold px-5 border-b-[0.001px] py-4 bg-white`}
                onClick={() => goToMenu && setActiveMenu(goToMenu)}
            >
                <span className="text-primary-color text-lg">{leftIcon}</span>
                {children}
                <span className="ml-auto transform -rotate-90">{rightIcon}</span>
            </a>
        );
    }

    function DropdownTitle(props) {
        return (
            <div className="flex items-center justify-between border-b px-5 text-base">
                <ArrowDown className=" rotate-90 w-min text-[#484848]" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}/>
                <div className=" py-5 font-bold text-[#484848] bg-white rounded-t-3xl">{props.title}</div>
                <Icons8Close className="w-min text-[#484848] text-3xl opacity-30" />
            </div>
        )
    }



    const [expanded, setExpanded] = React.useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };


    return (
        <section className="absolute bottom-0 left-0 rounded-3xl bg-white w-full -z-[1] border">
            <div className="relative min-h-[420px] rounded-3xl" style={{ height: menuHeight }} ref={dropdownRef}>
                <CSSTransition
                    in={activeMenu === 'main'}
                    timeout={500}
                    classNames="menu-primary"
                    unmountOnExit
                >
                    <div className="">
                        <div className="text-center p-4 border-b text-lg font-bold text-[#484848] bg-white rounded-t-3xl">Menu </div>
                        {/* menu principale */}
                        <ul className="overflow-scroll h-[300px] bg-slate-400 bg-opacity-20">
                            <DropdownItem leftIcon={iconMap[0]} rightIcon={<ArrowDown />} goToMenu="Nintendo-store">
                                My Nintendo Store
                            </DropdownItem>
                            <DropdownItem leftIcon={iconMap[1]} rightIcon={<ArrowDown />} goToMenu="Games">
                                Games
                            </DropdownItem>
                            <DropdownItem leftIcon={iconMap[2]} rightIcon={<ArrowDown />} goToMenu="Nintendo-Switch">
                                Nintendo Switch
                            </DropdownItem>
                            <DropdownItem leftIcon={iconMap[3]}>News & Events</DropdownItem>
                            <DropdownItem leftIcon={iconMap[4]} rightIcon={<ArrowDown />} goToMenu="PlayNintendo">
                                Play Nintendo
                            </DropdownItem>


                            <div className="my-10 border-t">
                                <DropdownItem leftIcon={iconMap[5]} rightIcon={<ArrowDown />}>
                                    Support
                                </DropdownItem>
                                <DropdownItem leftIcon={<img src={America} alt="" />}>
                                    Change Region
                                </DropdownItem>
                            </div>
                        </ul>
                    </div>
                </CSSTransition>

                {/* primo dropwdown */}
                <CSSTransition
                    in={activeMenu === 'Nintendo-store'}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit>

                    <div className="">
                        <DropdownTitle title={"My Nintendo Store"} goToMenu="main" />
                        <ul className="overflow-scroll h-[300px]">
                            <DropdownItem>
                                Shop All
                            </DropdownItem>
                            <Accordion title="Games" panel={1} >
                                {Data.navbar && Data.navbar[0].li[1].li2.map((item, index) => (
                                    <li className="text-base font-thin px-2 text-secondary-color cursor-pointer" key={index}>{item}</li>
                                ))}
                            </Accordion>
                            <Accordion title={"Hardware"} panel={2} >
                                {Data.navbar && Data.navbar[0].li[2].li2.map((item, index) => (
                                    <li className="text-base font-thin px-2 text-secondary-color cursor-pointer" key={index}>{item}</li>
                                ))}
                            </Accordion>
                            <Accordion title={"Merchandise"} panel={3} >
                                {Data.navbar && Data.navbar[0].li[3].li2.map((item, index) => (
                                    <li className="text-base font-thin px-2 text-secondary-color cursor-pointer" key={index}>{item}</li>
                                ))}
                            </Accordion>
                            <Accordion title={"Store exclusives"} panel={4}>
                                {Data.navbar && Data.navbar[0].li[4].li2.map((item, index) => (
                                    <li className="text-base font-thin px-2 text-secondary-color cursor-pointer" key={index}>{item}</li>
                                ))}
                            </Accordion>
                            <Accordion title={"Characters"} panel={5}>
                                {Data.navbar && Data.navbar[0].li[5].li2.map((item, index) => (
                                    <li className="text-base font-thin px-2 text-secondary-color cursor-pointer" key={index}>{item}</li>
                                ))}
                            </Accordion>
                            <DropdownItem className="border-t mb-10">
                                Sales & deals
                            </DropdownItem>
                        </ul>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={activeMenu === 'Games'}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit>

                    <div className="">
                    <DropdownTitle title={"Games"} goToMenu="main" />
                        <DropdownItem>
                            Nintendo Switch games
                        </DropdownItem>
                        <DropdownItem>
                            New releases
                        </DropdownItem>
                        <DropdownItem>
                            Coming soon
                        </DropdownItem>
                        <DropdownItem>
                            Shop games
                        </DropdownItem>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={activeMenu === 'Nintendo-Switch'}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit>

                    <div className="">
                    <DropdownTitle title={"Nintendo Switch"} goToMenu="main" />
                        <DropdownItem>
                            Nintendo Switch lineup
                        </DropdownItem>
                        <DropdownItem>
                            Compare systems
                        </DropdownItem>
                        <DropdownItem>
                            Online service
                        </DropdownItem>
                        <DropdownItem>
                            Accessories
                        </DropdownItem>
                        <DropdownItem>
                            Shop systems
                        </DropdownItem>
                    </div>
                </CSSTransition>
                <CSSTransition
                    in={activeMenu === 'PlayNintendo'}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit>

                    <div className="">
                    <DropdownTitle title={"Play Nintendo"} goToMenu="main" />
                        <DropdownItem>
                            For kids
                        </DropdownItem>
                        <DropdownItem>
                            For parents
                        </DropdownItem>

                    </div>
                </CSSTransition>
            </div>
        </section>
    );
}
