const colorNames = {
  scienceBlue: "#0366D6",
  blumine: "#1F5189",
  dodgerBlue: "#2188FF",
  shipCove: "#6D93BE",
  anakiwa: "#8CC2FF",
  tropicalBlue: "#CDE0F7",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  porcelain: "#F2F3F4",
  mercury: "#e5e5e5",
  slateGrey: "#555b63",
  doveGrey: "#6D6D6D",
  tundora: "#414141",
  mineShaft: "#252525",
  mineShaftLighter: "#313131",
};

const common = {
  breakpoints: {
    mobileMax: 767,
    tabletVerticalMax: 991,
    tabletHorizontalMax: 1199,
  },
  boxShadow: "0px 0px 18px #000000a0",
  borderRadiusSmall: "4px",
};

export const themeLight = {
  ...common,
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.mineShaft,
    site: {
      background: colorNames.whiteLilac,
      text: colorNames.slateGrey,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.anakiwa,
    },
    boxBackground: colorNames.white,
    headerLine: colorNames.mercury,
    tile: {
      border: colorNames.porcelain,
      borderHover: colorNames.tropicalBlue,
      header: colorNames.scienceBlue,
    },
    themeSwitch: {
      background: colorNames.mercury,
      icon: colorNames.white,
    },
  },
};

export const themeDark = {
  ...common,
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    site: {
      background: colorNames.mineShaft,
      text: colorNames.white,
    },
    buttonLink: {
      text: colorNames.white,
      border: colorNames.ironTransparent,
      shadow: colorNames.shipCove,
    },
    boxBackground: colorNames.mineShaftLighter,
    headerLine: colorNames.tundora,
    tile: {
      border: colorNames.tundora,
      borderHover: colorNames.blumine,
      header: colorNames.white,
    },
    themeSwitch: {
      background: colorNames.doveGrey,
      icon: colorNames.mineShaft,
    },
  },
};
