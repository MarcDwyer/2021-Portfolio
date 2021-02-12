import React from "react";
import { useSpring, animated } from "react-spring";
import { Container } from "../../styled-comps/containers";

import "./contact.scss";
import { ThemeStruct } from "../../themes";
import { observer } from "mobx-react-lite";
type Props = {
  theme: ThemeStruct;
};
const Contact = observer(({ theme }: Props) => {
  const subProps = useSpring({
    transform: "translateX(0%)",
    opacity: 1,
    from: { transform: "translateX(-100%)", opacity: 0 },
  });

  return (
    <animated.div
      className="sub-contact card"
      style={{
        ...subProps,
        backgroundColor: theme.bgColor,
      }}
    >
      <span>Marc Dwyer</span>
      <div className="contact-info">
        <a href="mailto:marcdwyer1738@gmail.com" className="email">
          <i className="fa fa-envelope" style={{ color: theme.btnColor }} />
          <span>marcdwyer1738@gmail.com</span>
        </a>
      </div>
    </animated.div>
  );
});

export default Contact;
