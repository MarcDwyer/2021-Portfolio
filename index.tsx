import ReactDOM from "react-dom";

import { App } from "./src/App";

import "./index.scss";
import { ThemeStore } from "./src/store/theme_store";

const themeStore = new ThemeStore();

ReactDOM.render(<App ts={themeStore} />, document.getElementById("root"));
