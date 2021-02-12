import { autorun, makeAutoObservable, reaction } from "mobx";
import { Dark, Light } from "../themes";

export class ThemeStore {
  isDark: boolean = false;

  constructor() {
    makeAutoObservable(this);

    autorun(() => {
      const isDark = localStorage.getItem("isDark");
      if (isDark) {
        this.isDark = JSON.parse(isDark);
        return;
      }
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        // dark mode
        this.isDark = true;
      }
    });
    reaction(
      () => this.isDark,
      (isDark) => {
        console.log("changing");
        document.body.style.backgroundColor = this.theme.bgColor;
        localStorage.setItem("isDark", JSON.stringify(isDark));
      }
    );
  }
  handleMediaEvent(event: MediaQueryListEvent) {
    const theme = event.matches ? "dark" : "light";
    switch (theme) {
      case "dark":
        this.isDark = true;
        break;
      case "light":
        this.isDark = false;
    }
  }
  get theme() {
    const theme = this.isDark ? Dark : Light;
    return theme;
  }
  changeTheme() {
    this.isDark = !this.isDark;
  }
}
