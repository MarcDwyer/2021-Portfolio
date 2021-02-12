import React from "react";

import "./languages.scss";

export default function Languages() {
  const langs = ["english", "spanish"];
  return (
    <div className="language">
      <div className="language-container">
        <span className="fluent-in">Fluent in:</span>
        {langs.map((l, i) => {
          return (
            <span key={i} className="lang">
              {l}
            </span>
          );
        })}
      </div>
    </div>
  );
}
