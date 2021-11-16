import { createPortal } from "react-dom";
import { MobileNavbar, HamburgerMenu } from "./mobile_nav_styles";

import "./mobile_nav.scss";
import { ThemeStore } from "../../store/theme_store";

type Props = {
  toggler: () => void;
  ts: ThemeStore;
};
const MobileNav = ({ toggler, ts }: Props) => {
  return createPortal(
    <MobileNavbar bgcolor={ts.theme.bgColor}>
      <div className="burger-menu">
        <HamburgerMenu
          color={ts.theme.hamburgercolor}
          fontSize="36px"
          onClick={toggler}
        />
      </div>
    </MobileNavbar>,
    document.querySelector("#root")
  );
};

export default MobileNav;
