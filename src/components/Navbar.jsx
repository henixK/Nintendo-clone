import { Heart, Cart, Profile, Support, Menu } from "@acme/icons";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import SearchButton from "./SearchButtonMobile";
import { NavItem, NavSvg } from "./NavItem";
import { useState } from "react";
import BottomNavDesktop from "./BottomNavDesktop";


export default function Navbar() {

  const [clicked, setClicked] = useState(false);

  const toggleDropdown = () => {
    setClicked(!clicked);
  };
  const styleSvg = "18px";

  return (
    <nav>
      <NavDesktop bottom={<BottomNavDesktop />}>
        <NavItem text="Support" svgIcon={<Support style={{ fontSize: styleSvg }} />} />
        <NavItem text="Wish List" svgIcon={<Heart style={{ fontSize: styleSvg }} />} />
        <NavItem text="Cart" svgIcon={<Cart style={{ fontSize: styleSvg }} />} />
        <NavItem text="Log in / Sign up" svgIcon={<Profile style={{ fontSize: styleSvg }} />} />
      </NavDesktop>

      <NavMobile/>
    </nav>
  );
}
