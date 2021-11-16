import { nanoid } from "nanoid";
import "./languages.scss";

export default function Languages() {
  const langs = ["english", "spanish"];
  return (
    <div className="language">
      <div className="language-container">
        <span className="fluent-in">Fluent in:</span>
        {langs.map((lang) => {
          return (
            <span key={nanoid()} className="lang">
              {lang}
            </span>
          );
        })}
      </div>
    </div>
  );
}
