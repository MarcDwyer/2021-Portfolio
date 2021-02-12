import React from "react";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router";

import "./nav_social.scss";

const socialLinks = [
  {
    name: "github",
    cName: "fa fa-github",
    href: "https://github.com/MarcDwyer?tab=repositories",
  },
  {
    name: "linkedIn",
    cName: "fa fa-linkedin",
    href: "https://www.linkedin.com/in/marc-dwyer-53087339/",
  },
];

export default function NavSocialLinks() {
  const { pathname } = useLocation();
  const contactPath = "/contact";

  const { x, fontSize } = useSpring({
    x: pathname === contactPath ? 1 : 0,
    fontSize: pathname === contactPath ? 50 : 42,
    config: { duration: 1000 },
    from: { x: 0, fontSize: 42 },
  });

  return (
    <div className="social-links">
      <div className="btns">
        {socialLinks.map((link, i) => {
          return (
            <animated.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={link.cName}
              style={{
                //@ts-ignore
                opacity: x.interpolate({ output: [0.8, 1] }),
                transform: x
                  .interpolate({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  })
                  .interpolate((x) => `scale(${x})`),
                fontSize: fontSize.interpolate({
                  range: [33, 35, 37, 40, 44],
                  output: [33, 36, 40, 44, 54],
                }),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
