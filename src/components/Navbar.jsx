import { Heart, Cart, Profile, Support, Menu } from "@acme/icons";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import SearchButton from "./SearchButtonMobile";
import { NavItem, NavSvg } from "./NavItem";
import { useState } from "react";
import BottomNavDesktop from "./BottomNavDesktop";
import DropdownMobileMenu from "./DropdownMobileMenu";
import {
  Star,
  Switch,
  Dpad,
  News,
  MarioHat,
} from "@acme/icons";





export default function Navbar() {
  const iconMap = [<MarioHat />, <Dpad />, <Switch />, <News />, <Star />, <Support />];

  const [open, setOpen] = useState(false);

  const styleSvg = "18px";

  return (
    <nav>
      <NavDesktop bottom={<BottomNavDesktop />}>
        <NavItem text="Support" svgIcon={<Support style={{ fontSize: styleSvg }} />} />
        <NavItem text="Wish List" svgIcon={<Heart style={{ fontSize: styleSvg }} />} />
        <NavItem text="Cart" svgIcon={<Cart style={{ fontSize: styleSvg }} />} />
        <NavItem text="Log in / Sign up" svgIcon={<Profile style={{ fontSize: styleSvg }} />} />
      </NavDesktop>

      <NavMobile>
        <NavSvg svg={<Menu />} onClick={() => setOpen(!open)} open={open}>
          <DropdownMobileMenu>
          </DropdownMobileMenu>
        </NavSvg>
        <NavSvg svg={<Heart />} />
        <SearchButton />
        <NavSvg svg={<Cart />} />
        <NavSvg svg={<Profile />} />
      </NavMobile>
    </nav>
  );
}
