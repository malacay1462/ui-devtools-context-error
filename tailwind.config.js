const defaults = require("tailwindcss/defaultConfig");

const red = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000",
};
const pink = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162",
};
const purple = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff",
};
const deepPurple = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea",
};
const indigo = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe",
};
const blue = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff",
};
const lightBlue = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea",
};
const cyan = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4",
};
const teal = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5",
};
const green = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853",
};
const lightGreen = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17",
};
const lime = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00",
};
const yellow = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600",
};
const amber = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00",
};
const orange = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00",
};
const deepOrange = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00",
};
const brown = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723",
};
const blueGrey = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238",
};
const grey = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121",
};
const colors = {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  lightBlue,
  cyan,
  teal,
  green,
  lightGreen,
  lime,
  yellow,
  amber,
  orange,
  deepOrange,
  brown,
  blueGrey,
  grey,
};

const percentValues = {
  "10%": "10%",
  "20%": "20%",
  "30%": "30%",
  "40%": "40%",
  "50%": "50%",
  "60%": "60%",
  "70%": "70%",
  "80%": "80%",
  "90%": "90%",
  "100%": "100%",
  "5%": "5%",
  "15%": "15%",
  "25%": "25%",
  "75%": "75%",
  "35%": "35%",
  "45%": "45%",
  "65%": "65%",
  "85%": "85%",
  "95%": "95%",
};

const transitionDelayAndDuration = {
  "0": "0ms",
  "25": "25ms",
  "50": "50ms",
  "75": "75ms",
  "125": "125ms",
  "175": "175ms",
  "225": "225ms",
  "250": "250ms",
  "275": "275ms",
  "350": "350ms",
  "450": "450ms",
  "550": "550ms",
  "400": "400ms",
};

let materialColors = {};
let materialColorsList = {};

Object.keys(colors).forEach((color) => {
  if (color !== "shades") {
    materialColors["material-" + color] = {};
    //materialColors['material-' + color] = colors[color];

    Object.keys(colors[color]).forEach((colorPart) => {
      let colorPartTransformed = colorPart;

      if (colorPart !== "base") {
        const colorPartAccentValue = colorPartTransformed.substr(-1, 1);
        colorPartTransformed =
          colorPartTransformed.substr(0, colorPartTransformed.length - 1) +
          "-" +
          colorPartAccentValue;
      }

      materialColors["material-" + color][colorPartTransformed] =
        colors[color][colorPart];
      materialColorsList["material-" + color + "-" + colorPart] =
        colors[color][colorPart];
    });
  }
});

module.exports = {
  theme: {
    extend: {
      transitionProperty: {
        ...defaults.theme.transitionProperty,
        DEFAULT:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        default:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        defaultSpacing:
          "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, padding, margin",
      },
      transitionDuration: {
        ...defaults.theme.transitionDuration,
        ...transitionDelayAndDuration,
      },
      transitionDelay: {
        ...defaults.theme.transitionDelay,
        ...transitionDelayAndDuration,
      },
      animation: {
        ...defaults.theme.animation,
      },
      keyframes: {
        ...defaults.theme.keyframes,
      },
      inset: {
        full: "100%",
      },
      opacity: {
        "10": "0.1",
        "20": "0.2",
        "30": "0.3",
        "40": "0.4",
        "50": "0.5",
        "60": "0.6",
        "70": "0.7",
        "80": "0.8",
        "90": "0.9",
        "15": "0.15",
        "25": "0.25",
        "35": "0.35",
        "45": "0.45",
        "55": "0.55",
        "65": "0.65",
        "75": "0.75",
        "85": "0.85",
        "95": "0.95",
        "100": "1",
      },
      spacing: {
        ...defaults.theme.spacing,
        ...percentValues,
      },
      padding: {
        ...defaults.theme.padding,
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "2/6": "33.333333%",
        "3/6": "50%",
        "4/6": "66.666667%",
        "5/6": "83.333333%",
        "1/12": "8.333333%",
        "2/12": "16.666667%",
        "3/12": "25%",
        "4/12": "33.333333%",
        "5/12": "41.666667%",
        "6/12": "50%",
        "7/12": "58.333333%",
        "8/12": "66.666667%",
        "9/12": "75%",
        "10/12": "83.333333%",
        "11/12": "91.666667%",
        full: "100%",
      },
      maxWidth: {
        ...defaults.theme.spacing,
        ...percentValues,
      },
      minWidth: {
        ...defaults.theme.spacing,
        ...percentValues,
      },
      maxHeight: {
        ...defaults.theme.spacing,
        ...percentValues,
      },
      minHeight: {
        ...defaults.theme.spacing,
        ...percentValues,
      },
      colors: {
        ...defaults.theme.colors,
        ...materialColors,
      },
      textColor: {
        ...defaults.theme.textColor,
        "dark-white": "#d1d1d1",
        "default-dark": "#d1d1d1",
        inherit: "inherit",
      },
      backgroundColor: {
        ...defaults.theme.backgroundColor,
        inherit: "inherit",
        transparent: "transparent",
        "header-dark": "#272727",
        "card-background": "#1e1e1e",
        "default-dark": "#1e1e1e",

        black: "rgba(0, 0, 0, 1)",
        "black-opacity-10": "rgba(0, 0, 0, 0.1)",
        "black-opacity-20": "rgba(0, 0, 0, 0.2)",
        "black-opacity-30": "rgba(0, 0, 0, 0.3)",
        "black-opacity-40": "rgba(0, 0, 0, 0.4)",
        "black-opacity-50": "rgba(0, 0, 0, 0.5)",
        "black-opacity-60": "rgba(0, 0, 0, 0.6)",
        "black-opacity-70": "rgba(0, 0, 0, 0.7)",
        "black-opacity-80": "rgba(0, 0, 0, 0.8)",
        "black-opacity-90": "rgba(0, 0, 0, 0.9)",

        white: "rgba(255, 255, 255, 1)",
        "white-opacity-10": "rgba(255, 255, 255, 0.1)",
        "white-opacity-20": "rgba(255, 255, 255, 0.2)",
        "white-opacity-30": "rgba(255, 255, 255, 0.3)",
        "white-opacity-40": "rgba(255, 255, 255, 0.4)",
        "white-opacity-50": "rgba(255, 255, 255, 0.5)",
        "white-opacity-60": "rgba(255, 255, 255, 0.6)",
        "white-opacity-70": "rgba(255, 255, 255, 0.7)",
        "white-opacity-80": "rgba(255, 255, 255, 0.8)",
        "white-opacity-90": "rgba(255, 255, 255, 0.9)",

        grey: "rgba(15, 158, 158)",
        "grey-opacity-10": "rgba(15, 158, 158, 0.1)",
        "grey-opacity-20": "rgba(15, 158, 158, 0.2)",
        "grey-opacity-30": "rgba(15, 158, 158, 0.3)",
        "grey-opacity-40": "rgba(15, 158, 158, 0.4)",
        "grey-opacity-50": "rgba(15, 158, 158, 0.5)",
        "grey-opacity-60": "rgba(15, 158, 158, 0.6)",
        "grey-opacity-70": "rgba(15, 158, 158, 0.7)",
        "grey-opacity-80": "rgba(15, 158, 158, 0.8)",
        "grey-opacity-90": "rgba(15, 158, 158, 0.9)",

        "light-grey": "rgba(224, 224, 224, 1)",
        "light-grey-opacity-10": "rgba(224, 224, 224, 0.1)",
        "light-grey-opacity-20": "rgba(224, 224, 224, 0.2)",
        "light-grey-opacity-30": "rgba(224, 224, 224, 0.3)",
        "light-grey-opacity-40": "rgba(224, 224, 224, 0.4)",
        "light-grey-opacity-50": "rgba(224, 224, 224, 0.5)",
        "light-grey-opacity-60": "rgba(224, 224, 224, 0.6)",
        "light-grey-opacity-70": "rgba(224, 224, 224, 0.7)",
        "light-grey-opacity-80": "rgba(224, 224, 224, 0.8)",
        "light-grey-opacity-90": "rgba(224, 224, 224, 0.9)",

        "dark-grey": "rgba(97, 97, 97, 1)",
        "dark-grey-opacity-10": "rgba(97, 97, 97, 0.1)",
        "dark-grey-opacity-20": "rgba(97, 97, 97, 0.2)",
        "dark-grey-opacity-30": "rgba(97, 97, 97, 0.3)",
        "dark-grey-opacity-40": "rgba(97, 97, 97, 0.4)",
        "dark-grey-opacity-50": "rgba(97, 97, 97, 0.5)",
        "dark-grey-opacity-60": "rgba(97, 97, 97, 0.6)",
        "dark-grey-opacity-70": "rgba(97, 97, 97, 0.7)",
        "dark-grey-opacity-80": "rgba(97, 97, 97, 0.8)",
        "dark-grey-opacity-90": "rgba(97, 97, 97, 0.9)",
      },
      boxShadow: {
        ...defaults.theme.boxShadow,
        "spatie-mailcoach-email": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "spatie-mailcoach-whiite":
          "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
        "css-scan-3-highlighted": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        "css-scan-5-small-highlighted": "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "css-scan-9-subtile": "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        "css-scan-13-subtile-spread":
          "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        "css-scan-15-prominent":
          "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        "css-scan-19-border":
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        "css-scan-29-prominent-light":
          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "css-scan-43-full-border":
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        "css-scan-55-blue-border": "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
        "css-scan-57-light-spread-inset":
          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        "css-scan-3-highlighted-white":
          "rgba(255, 255, 255, 0.35) 0px 5px 15px",
        "css-scan-5-small-highlighted-white":
          "rgba(255, 255, 255, 0.24) 0px 3px 8px",
        "css-scan-9-subtile-white": "rgba(255, 255, 255, 0.13) 1px 4px 12px",
        "css-scan-13-subtile-spread-white":
          "rgba(255, 255, 255, 0.15) 0px 48px 100px 0px",
        "css-scan-15-prominent-white":
          "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px",
        "css-scan-19-border-white":
          "rgba(202, 202, 202, 0.35) 0px 2px 5px -1px, rgba(255, 255, 255, 0.3) 0px 1px 3px -1px",
        "css-scan-19-border-prominent":
          "rgba(50, 50, 93, 0.25) 0px 0px 7px 0px, rgba(0, 0, 0, 0.3) 0px 1px 4px -1px",
        "css-scan-19-border-prominent-white":
          "rgba(202, 202, 202, 0.35) 0px 0px 7px 0px, rgba(255, 255, 255, 0.3) 0px 1px 4px -1px",
        "css-scan-29-prominent-light-white":
          "rgba(255, 255, 255, 0.19) 0px 10px 20px, rgba(255, 255, 255, 0.23) 0px 6px 6px",
        "css-scan-29-prominent-lighter":
          "rgba(0, 0, 0, 0.19) 0px 1px 15px, rgba(0, 0, 0, 0.23) 0px 4px 6px",
        "css-scan-29-prominent-lighter-white":
          "rgba(255, 255, 255, 0.19) 0px 1px 15px, rgba(255, 255, 255, 0.23) 0px 4px 6px",
        "css-scan-43-full-border-white":
          "rgba(255, 255, 255, 0.07) 0px 1px 2px, rgba(255, 255, 255, 0.07) 0px 2px 4px, rgba(255, 255, 255, 0.07) 0px 4px 8px, rgba(255, 255, 255, 0.07) 0px 8px 16px, rgba(255, 255, 255, 0.07) 0px 16px 32px, rgba(255, 255, 255, 0.07) 0px 32px 64px",
        "css-scan-57-light-spread-inset-white":
          "rgba(255, 255, 255, 0.2) 0px 5px 22px 0px, rgba(255, 255, 255, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        "css-scan-3-highlighted-grey": "rgba(144, 144, 144, 0.35) 0px 5px 15px",
        "css-scan-5-small-highlighted-grey":
          "rgba(144, 144, 144, 0.24) 0px 3px 8px",
        "css-scan-9-subtile-grey": "rgba(144, 144, 144, 0.13) 1px 4px 12px",
        "css-scan-13-subtile-spread-grey":
          "rgba(144, 144, 144, 0.15) 0px 48px 100px 0px",
        "css-scan-15-prominent-grey":
          "rgba(144, 144, 144, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(144, 144, 144, 0.3) 0px 30px 60px -30px",
        "css-scan-19-border-grey":
          "rgba(136, 136, 136, 0.35) 0px 2px 5px -1px, rgba(144, 144, 144, 0.3) 0px 1px 3px -1px",
        "css-scan-19-border-prominent-grey":
          "rgba(136, 136, 136, 0.35) 0px 0px 7px 0px, rgba(144, 144, 144, 0.3) 0px 1px 4px -1px",
        "css-scan-29-prominent-light-grey":
          "rgba(144, 144, 144, 0.19) 0px 10px 20px, rgba(144, 144, 144, 0.23) 0px 6px 6px",
        "css-scan-29-prominent-lighter-grey":
          "rgba(144, 144, 144, 0.19) 0px 1px 15px, rgba(144, 144, 144, 0.23) 0px 4px 6px",
        "css-scan-43-full-border-grey":
          "rgba(144, 144, 144, 0.07) 0px 1px 2px, rgba(144, 144, 144, 0.07) 0px 2px 4px, rgba(144, 144, 144, 0.07) 0px 4px 8px, rgba(144, 144, 144, 0.07) 0px 8px 16px, rgba(144, 144, 144, 0.07) 0px 16px 32px, rgba(144, 144, 144, 0.07) 0px 32px 64px",
        "css-scan-57-light-spread-inset-grey":
          "rgba(144, 144, 144, 0.2) 0px 5px 22px 0px, rgba(144, 144, 144, 0.1) 0px 2px 4px 0px, rgba(144, 144, 144, 0.05) 0px 0px 0px 1px inset",
        "vuetify-toolbars":
          "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        "outline-dark": "0 0 0 3px rgba(0, 0, 0, 0.5)",
        "xs-white": "0 0 0 1px rgba(255, 255, 255, 0.05)",
        "sm-white": "0 1px 2px 0 rgba(255, 255, 255, 0.05)",
        "default-white":
          "0 1px 3px 0 rgba(255, 255, 255, 0.1), 0 1px 2px 0 rgba(255, 255, 255, 0.1)",
        "md-white":
          "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.1)",
        "lg-white":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
        "xl-white":
          "0 20px 25px -5px rgba(255, 255, 255, 0.1), 0 10px 10px -5px rgba(255, 255, 255, 0.04)",
        "2xl-white": "0 25px 50px -12px rgba(255, 255, 255, 0.25)",
        "inner-white": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)",
        "outline-white": "0 0 0 3px rgba(255, 255, 255, 0.5)",
        "xs-grey-light": "0 0 0 1px rgba(224, 224, 224, 0.05)",
        "sm-grey-light": "0 1px 2px 0 rgba(224, 224, 224, 0.05)",
        "grey-light":
          "0 1px 3px 0 rgba(224, 224, 224, 0.1), 0 1px 2px 0 rgba(224, 224, 224, 0.1)",
        "md-grey-light":
          "0 4px 6px -1px rgba(224, 224, 224, 0.1), 0 2px 4px -1px rgba(224, 224, 224, 0.1)",
        "lg-grey-light":
          "0 10px 15px -3px rgba(224, 224, 224, 0.1), 0 4px 6px -2px rgba(224, 224, 224, 0.05)",
        "xl-grey-light":
          "0 20px 25px -5px rgba(224, 224, 224, 0.1), 0 10px 10px -5px rgba(224, 224, 224, 0.04)",
        "2xl-grey-light": "0 25px 50px -12px rgba(224, 224, 224, 0.25)",
        "inner-grey-light": "inset 0 2px 4px 0 rgba(224, 224, 224, 0.1)",
        "outline-grey-light": "0 0 0 3px rgba(224, 224, 224, 0.5)",
        "xs-grey-dark": "0 0 0 1px rgba(97, 97, 97, 0.05)",
        "sm-grey-dark": "0 1px 2px 0 rgba(97, 97, 97, 0.05)",
        "grey-dark":
          "0 1px 3px 0 rgba(97, 97, 97, 0.1), 0 1px 2px 0 rgba(97, 97, 97, 0.1)",
        "md-grey-dark":
          "0 4px 6px -1px rgba(97, 97, 97, 0.1), 0 2px 4px -1px rgba(97, 97, 97, 0.1)",
        "lg-grey-dark":
          "0 10px 15px -3px rgba(97, 97, 97, 0.1), 0 4px 6px -2px rgba(97, 97, 97, 0.05)",
        "xl-grey-dark":
          "0 20px 25px -5px rgba(97, 97, 97, 0.1), 0 10px 10px -5px rgba(97, 97, 97, 0.04)",
        "2xl-grey-dark": "0 25px 50px -12px rgba(97, 97, 97, 0.25)",
        "inner-grey-dark": "inset 0 2px 4px 0 rgba(97, 97, 97, 0.1)",
        "outline-grey-dark": "0 0 0 3px rgba(97, 97, 97, 0.5)",
        "xs-grey": "0 0 0 1px rgba(158, 158, 158, 0.05)",
        "sm-grey": "0 1px 2px 0 rgba(158, 158, 158, 0.05)",
        grey:
          "0 1px 3px 0 rgba(158, 158, 158, 0.1), 0 1px 2px 0 rgba(158, 158, 158, 0.1)",
        "md-grey":
          "0 4px 6px -1px rgba(158, 158, 158, 0.1), 0 2px 4px -1px rgba(158, 158, 158, 0.1)",
        "lg-grey":
          "0 10px 15px -3px rgba(158, 158, 158, 0.1), 0 4px 6px -2px rgba(158, 158, 158, 0.05)",
        "xl-grey":
          "0 20px 25px -5px rgba(158, 158, 158, 0.1), 0 10px 10px -5px rgba(158, 158, 158, 0.04)",
        "2xl-grey": "0 25px 50px -12px rgba(158, 158, 158, 0.25)",
        "inner-grey": "inset 0 2px 4px 0 rgba(158, 158, 158, 0.1)",
        "outline-grey": "0 0 0 3px rgba(158, 158, 158, 0.5)",
        "subtile-white":
          "0px 1px 3px 0px rgba(255, 255, 255, 0.2), 0px 1px 0px 0px rgba(255, 255, 255, 0.14), 0px 0px 0px 0px rgba(255, 255, 255, 0.12)",
        "subtile-dark":
          "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 0px 0px rgba(0, 0, 0, 0.14), 0 0 0 0 rgba(0, 0, 0, 0.12)",
        "subtile-grey":
          "0px 1px 3px 0px rgba(158, 158, 158, 0.2), 0px 1px 0px 0px rgba(158, 158, 158, 0.14), 0 0 0 0 rgba(158, 158, 158, 0.12)",
        "subtile-grey-light":
          "0px 1px 3px 0px rgba(224, 224, 224, 0.2), 0px 1px 0px 0px rgba(224, 224, 224, 0.14), 0 0 0 0 rgba(224, 224, 224, 0.12)",
        "subtile-grey-dark":
          "0px 1px 3px 0px rgba(97, 97, 97, 0.2), 0px 1px 0px 0px rgba(97, 97, 97, 0.14), 0 0 0 0 rgba(97, 97, 97, 0.12)",
        "highlighted-white":
          "0px 3px 1px -2px rgba(255, 255, 255, 0.2), 0px 2px 2px 0px rgba(255, 255, 255, 0.14), 0px 1px 5px 0px rgba(255, 255, 255, 0.12)",
        "highlighted-dark":
          "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)",
        "highlighted-grey":
          "0px 3px 1px -2px rgba(158, 158, 158, 0.2), 0px 2px 2px 0px rgba(158, 158, 158, 0.14), 0px 1px 5px 0px rgba(158, 158, 158, 0.12)",
        "highlighted-grey-light":
          "0px 3px 1px -2px rgba(224, 224, 224, 0.2), 0px 2px 2px 0px rgba(224, 224, 224, 0.14), 0px 1px 5px 0px rgba(224, 224, 224, 0.12)",
        "highlighted-grey-dark":
          "0px 3px 1px -2px rgba(97, 97, 97, 0.2), 0px 2px 2px 0px rgba(97, 97, 97, 0.14), 0px 1px 5px 0px rgba(97, 97, 97, 0.12)",
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        solid: "0 0 0 2px currentColor",
        "outline-gray": `0 0 0 3px rgba(254, 202, 202, .5)`,
        "outline-blue": `0 0 0 3px rgba(191, 219, 254, .5)`,
        "outline-green": `0 0 0 3px rgba(167, 243, 208, .5)`,
        "outline-yellow": `0 0 0 3px rgba(253, 230, 138, .5)`,
        "outline-red": `0 0 0 3px rgba(254, 202, 202, .5)`,
        "outline-pink": `0 0 0 3px rgba(251, 207, 232, .5)`,
        "outline-purple": `0 0 0 3px rgba(221, 214, 254,, .5)`,
        "outline-indigo": `0 0 0 3px rgba(199, 210, 254, .5)`,
      },
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1264px",
        xl: "1904px",

        /*'xsSm': '320px',
                'xsMd': '380px',
                'xsLg': '450px',
                'xsXl': '599px',

                'smLg': '748px',
                'smXl': '960px',

                'mdXs': '1024px',
                'mdSm': '1200px',

                'lgXs': '1280px',
                'lgSm': '1440px',
                'lgLg': '1600px',
                'lgXl': '1750px',

                'xl4K': '2560px',*/
      },
      fontSize: {
        ...defaults.theme.fontSize,
        smallest: "0.7rem",
        "smallest-sm": "0.6rem",
        "smallest-xs": "0.5rem",
      },
    },
  },
  variants: {
    appearance: [
      /*'responsive'*/
    ],
    backgroundAttachment: [
      /*'responsive'*/
    ],
    backgroundColor: [
      /*'responsive',*/ "hover",
      "important",
      "dark" /*, 'dark-hover'*/,
    ],
    backgroundPosition: [
      /*'responsive'*/
    ],
    backgroundRepeat: [
      /*'responsive'*/
    ],
    backgroundSize: [
      /*'responsive'*/
    ],
    borderCollapse: [
      /*'responsive'*/
    ],
    borderColor: [
      /*'responsive',*/ "hover",
      "important",
      "dark" /*, 'dark-hover'*/,
    ],
    borderRadius: [
      /*'responsive'*/
    ],
    borderStyle: [
      /*'responsive'*/
    ],
    borderWidth: [
      /*'responsive'*/
    ],
    cursor: [
      /*'responsive'*/
    ],
    display: ["responsive", /*'group-hover',*/ "important"],
    flexDirection: ["responsive"],
    flexWrap: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    justifyContent: ["responsive"],
    alignContent: ["responsive"],
    flex: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    float: ["responsive"],
    fontFamily: [
      /*'responsive'*/
    ],
    fontWeight: [/*'responsive',*/ "hover"],
    height: ["responsive"],
    lineHeight: [
      /*'responsive'*/
    ],
    listStylePosition: [
      /*'responsive'*/
    ],
    listStyleType: [
      /*'responsive'*/
    ],
    margin: ["responsive", "important", "hover", "dark"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    negativeMargin: ["responsive", "hover", "dark"],
    objectFit: [
      /*'responsive'*/
    ],
    objectPosition: [
      /*'responsive'*/
    ],
    opacity: [
      /*'responsive'*/
    ],
    outline: [
      /*'focus'*/
    ],
    overflow: [
      /*'responsive'*/
    ],
    padding: ["responsive", "important", "hover", "dark"],
    pointerEvents: [
      /*'responsive'*/
    ],
    position: ["responsive"],
    inset: [
      /*'responsive'*/
    ],
    resize: [
      /*'responsive'*/
    ],
    boxShadow: [/*'responsive',*/ "hover", "important", "dark"],
    fill: [],
    stroke: [],
    tableLayout: [
      /*'responsive'*/
    ],
    textAlign: ["responsive"],
    textColor: [
      /*'responsive',*/ "hover",
      "important",
      "dark" /*, 'dark-hover'*/,
    ],
    fontSize: [/*'responsive',*/ "important"],
    fontStyle: [
      /*'responsive'*/
    ],
    textTransform: [
      /*'responsive'*/
    ],
    textDecoration: [
      /*'responsive', 'hover'*/
    ],
    fontSmoothing: [
      /*'responsive'*/
    ],
    letterSpacing: [
      /*'responsive'*/
    ],
    userSelect: [
      /*'responsive'*/
    ],
    verticalAlign: [
      /*'responsive'*/
    ],
    visibility: ["responsive", "important"],
    whitespace: [
      /*'responsive'*/
    ],
    wordBreak: ["responsive"],
    width: ["responsive"],
    zIndex: [
      /*'responsive'*/
    ],
    accessibility: [
      /*'responsive',*/
    ],
    backgroundOpacity: [
      /*'responsive', 'hover'*/
    ],
    borderOpacity: [
      /*'responsive', 'hover'*/
    ],
    boxSizing: [
      /*'responsive'*/
    ],
    divideColor: [/*'responsive',*/ "dark"],
    divideOpacity: [
      /*'responsive'*/
    ],
    divideWidth: [
      /*'responsive'*/
    ],
    clear: [
      /*'responsive'*/
    ],
    order: ["responsive"],
    placeholderColor: [/*'responsive',*/ "dark"],
    placeholderOpacity: [
      /*'responsive',*/
    ],
    space: ["responsive"],
    strokeWidth: [
      /*'responsive'*/
    ],
    textOpacity: [
      /*'responsive', 'hover'*/
    ],
    gap: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnStart: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridTemplateRows: ["responsive"],
    gridRow: ["responsive"],
    gridRowStart: ["responsive"],
    gridRowEnd: ["responsive"],
    transform: [
      /*'responsive'*/
    ],
    transformOrigin: [
      /*'responsive'*/
    ],
    scale: [
      /*'responsive', 'hover'*/
    ],
    rotate: [
      /*'responsive', 'hover'*/
    ],
    translate: [
      /*'responsive', 'hover'*/
    ],
    skew: [
      /*'responsive', 'hover'*/
    ],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    transitionTimingFunction: [
      /*'responsive'*/
    ],
    transitionDuration: ["responsive", "motion-safe", "motion-reduce"],
    transitionDelay: ["responsive", "motion-safe", "motion-reduce"],
    backgroundClip: [
      /*'responsive'*/
    ],
    backgroundImage: [
      /*'responsive'*/
    ],
    gradientColorStops: [
      /*'responsive', 'hover', 'focus'*/
    ],
    container: [
      /*'responsive'*/
    ],
    divideStyle: [
      /*'responsive'*/
    ],
    overscrollBehavior: [
      /*'responsive'*/
    ],
    animation: [
      /*'responsive'*/
    ],
    textOverflow: ["responsive"],
    fontVariantNumeric: [
      /*'responsive'*/
    ],
    gridAutoColumns: ["responsive"],
    gridAutoRows: ["responsive"],
    justifyItems: ["responsive"],
    justifySelf: ["responsive"],
    placeContent: ["responsive"],
    placeItems: ["responsive"],
    placeSelf: ["responsive"],
    ringColor: ["responsive", "dark" /*'focus-within', 'focus'*/],
    ringOffsetColor: ["responsive", "dark" /*'focus-within', 'focus'*/],
    ringOffsetWidth: ["responsive", /*'focus-within', 'focus'*/ "dark"],
    ringOpacity: ["responsive", /*'focus-within', 'focus'*/ "dark"],
    ringWidth: ["responsive", /*'focus-within', 'focus'*/ "dark"],
  },
  future: {
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    standardFontWeights: true,
  },
  experimental: {
    darkModeVariant: true,
    additionalBreakpoint: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    standardFontWeights: true,
    extendedFontSizeScale: true,
  },
  dark: "class",
  darkMode: "class",
  purge: {
    enabled: process.env.NODE_ENV === "staging",
    preserveHtmlElements: false,
    options: {
      defaultExtractor: (content) => content.match(/[\w-/.:%!]+(?<!:)/g) || [],
      safelist: [
        /*'mode-dark', 'theme--dark'*/
      ],
    },
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./packages/**/*.html",
      "./packages/**/*.vue",
      "./packages/**/*.jsx",
      "./packages/**/*.js",
      "./plugins/**/*.html",
      "./plugins/**/*.vue",
      "./plugins/**/*.jsx",
      "./plugins/**/*.js",
    ],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("./tailwind/additional-variants")(),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    //require('@tailwindcss/forms'),
  ],
};
