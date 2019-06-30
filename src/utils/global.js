export const GlobalStyles = {
  font: {
    small: "14px",
    light: "20px",
    from30To60: "calc(30px + (60 - 14) * ((100vw - 300px) / (1600 - 300)));",
    from14To30: "calc(14px + (30 - 14) * ((100vw - 300px) / (1600 - 300)));",
    from14to20: "calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));",
    from10to15: "calc(10px + (15 - 14) * ((100vw - 300px) / (1600 - 300)));",
    from5to10: "calc(5px + (10 - 14) * ((100vw - 300px) / (1600 - 300)));"
  },
  image: {
    width: {
      fluid45to50: "calc(200px + (250 - 14) * ((100vw - 300px) / (1600 - 300)));",
      fluid25to50: "calc(25vw + (50 - 14) * ((100vw - 300px) / (1600 - 300)));"
    }
  },
  fontFamily: {
    fontFamilyCabin: "'Cabin Sketch', cursive"
  },
  color: {
    colorPalette: {
      prim: "#26547C",
      sec: "#FFD166",
      ter: "#06D6A0",
      quart: "#CC3D60",
      quint: "#FCFCFC"
    },
    background: "#61829F",
    hover: {
      prim: "black"
    }
  }
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};


