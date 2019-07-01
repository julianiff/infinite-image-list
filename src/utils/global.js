export const GlobalStyles = {
    fontsize: {
        small: "16px",
    },
    lineHeight: {
        small: "2em",
    },
    image: {
        width: {
            fluidXStoM: "calc(240px + (380 - 14) * ((100vw - 300px) / (500 - 200)));",
        }
    },
    fontFamily: {
        default: "Helvetica, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif"
    },
    color: {
        colorPalette: {
            prim: "#26547C",
            black: "#000000"
        }
    }
};

const size = {
    mobileXS: "280px",
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px"
};

export const device = {
    mobileXS: `(min-width: ${size.mobileXS})`,
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};


