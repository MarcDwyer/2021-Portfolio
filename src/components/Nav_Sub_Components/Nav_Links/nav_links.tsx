import { NavAppLink } from "./nav_link_styles";
import { useLocation } from "react-router";

import "./nav_link_styles.scss";
import { ThemeStruct } from "../../../themes";
import { nanoid } from "nanoid";

const appLinks = [
  {
    header: "Home",
    match: "/",
  },
  {
    header: "Projects/Skills",
    match: "/projects",
  },
  {
    header: "Work",
    match: "/work",
  },
  {
    header: "Contact",
    match: "/contact",
  },
];

type Props = {
  setToggle: (b: boolean) => void;
  toggle: boolean;
  theme: ThemeStruct;
};
export default function NavLinks({ setToggle, theme }: Props) {
  const { pathname } = useLocation();
  return (
    <div className="main-app-links">
      {appLinks.map((link) => {
        return (
          <NavAppLink
            to={link.match}
            key={nanoid()}
            onClick={() => setToggle(false)}
            hoverShade={theme.hoverShade}
            style={{
              color: pathname === link.match ? "white" : "",
            }}
          >
            <span>{link.header}</span>
          </NavAppLink>
        );
      })}
    </div>
  );
}
