import ReactDOM from "react-dom";

import { App } from "./src/App";

import "./index.scss";
import { ThemeStore } from "./src/store/theme_store";

const themeStore = new ThemeStore();
const rootNode = document.getElementById("root");

ReactDOM.render(<App ts={themeStore} />, rootNode);
