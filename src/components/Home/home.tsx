import React from "react";
import { useSpring } from "react-spring";

import { ProjectHomeBtn } from "../../styled-comps/buttons";

import "./home.scss";
import { observer } from "mobx-react-lite";
import { ThemeStore } from "../../store/theme_store";

type Props = {
  ts: ThemeStore;
};
const Home = observer(({ ts }: Props) => {
  const iProps = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(150%)" },
  });

  return (
    <div className="master home" style={{ backgroundColor: ts.theme.bgColor }}>
      <div className="welcome" style={iProps}>
        <div className="home-header">
          <span className="first-header">MARC DWYER</span>
          <span>Full-Stack Developer</span>
        </div>
        <ProjectHomeBtn
          bgColor={ts.theme.btnColor}
          className="home-projects"
          to="/projects"
        >
          View Projects
        </ProjectHomeBtn>
      </div>
    </div>
  );
});

export default Home;
