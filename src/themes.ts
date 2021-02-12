export enum DefaultTheme {
  shadeColor = "#322052",
  bgColor = "#231639",
}

export enum NewTheme1 {
  navColor = "#353a40",
  btnColor = "#007bff",
  darkBlue = "#223850",
  textColor = "#EEEEEE",
}

export enum NewTheme {
  navColor = "#15191c",
  btnColor = "#3d55d1",
  darkBlue = "#23262b",
  textColor = "#b4bac2",
  shadeOne = "#2f333c",
  shadeTwo = "#333a42",
  borderColor = "#676767",
}

export type ThemeStruct = {
  bgColor: string;
  color: string;
  cardColor: string;
  routeBgColor: string;
  routeColor: string;
  borderColor: string;
  btnColor: string;
  hoverShade: string;
  hamburgercolor: string;
};
export const Dark: ThemeStruct = {
  bgColor: "#15191c",
  color: "#b4bac2",
  routeColor: "#676767",
  routeBgColor: "#23262b",
  cardColor: "#2f333c",
  borderColor: "#676767",
  btnColor: "#23262b",
  hoverShade: "#2f333c",
  hamburgercolor: "#F7850A",
};

export const Light: ThemeStruct = {
  bgColor: "#A6A6A6",
  hamburgercolor: "#F7850A",
  color: "black",
  cardColor: "#A6A6A6",
  routeBgColor: "#eee",
  routeColor: "#eee",
  borderColor: "#BEBEBE",
  btnColor: "#eee",
  hoverShade: "#C0C0C0",
};
