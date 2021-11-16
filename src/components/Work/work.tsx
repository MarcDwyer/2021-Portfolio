import React from "react";
import WorkExp from "../../app_data/work_exp";
import { useSpring, animated } from "react-spring";

import "./work.scss";
import { NewTheme } from "../../themes";
import { nanoid } from "nanoid";

type Props = {
  cardColor: string;
};
const Work = ({ cardColor }: Props) => {
  const cardProps = useSpring({
    transform: "translateX(0%)",
    opacity: 1,
    from: { transform: "translateX(100%)", opacity: 0 },
  });
  return (
    <animated.div className="card-flex work-page" style={cardProps}>
      <div className="inner-card">
        {WorkExp.map((job) => {
          return (
            <div
              className="card work-card"
              key={nanoid()}
              style={{
                backgroundColor: cardColor,
                borderColor: NewTheme.navColor,
              }}
            >
              <div className="actual-content">
                <div
                  className="headers"
                  style={{ borderBottom: `1px solid ${NewTheme.navColor}` }}
                >
                  <span className="company-name">{job.companyName}</span>
                  <span className="job-title">{job.title}</span>
                </div>
                <div className="inner-content">
                  {job.currentJob ? (
                    <div className="present">
                      <i className="fa fa-check" style={{ color: "#7FBF7F" }} />
                      <span>Present Job</span>
                    </div>
                  ) : (
                    <span>
                      {/* {`Worked for: ${job.duration || "No duration given"}`} */}
                    </span>
                  )}
                  <ul>
                    {job.descriptionRole.map((desc) => (
                      <li key={nanoid()}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </animated.div>
  );
};

export default Work;
