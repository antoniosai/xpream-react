import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    neutralBody: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    error?: PaletteOptions["error"];
    neutralBody?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    xpream: true;
    xpreamOutlined: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    widgetTitle: true;
    widgetSubtitle: true;
    widgetDescription: true;
    widgetDisplayComponent: true;
    dialogTitle: true;
    dialogSubtitle: true;
    boxDashboardTitle: true;
    boxDashboardSubtitle: true;
  }
}

const basicTheme = createTheme({
  palette: {
    primary: {
      main: "#0E1B31",
      light: "#F3F7FB",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#42B3B4",
      light: "#7BC9CB",
      contrastText: "#004A45",
    },
    neutral: {
      main: "#9E9FA3",
      light: "#DEDEDE",
      contrastText: "#9E9FA3",
    },
    error: {
      main: "#E8985D",
      contrastText: "#FFFFFF",
    },
    neutralBody: {
      main: "#FAFAFA",
      contrastText: "#000000",
    },
  },
  typography: {
    // fontFamily: ["Lato"].join(","),
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography:{
      variants:[
        {
          props: { variant: "widgetTitle"},
          style: {
            color: "#31333F",
            fontStyle: "normal",
            fontSize: "24px",
            fontWeight: 500,
            lineHeight: "29px",
            display: "block"
          }
        },
        {
          props: { variant: "widgetSubtitle"},
          style: {
            color: "#CECED0",
            fontStyle: "normal",
            fontSize: "18px",
            fontWeight: "normal",
            lineHeight: "22px",
            display: "block"

          }
        },
        {
          props: { variant: "widgetDisplayComponent"},
          style: {
            color: "#D76660",
            fontStyle: "normal",
            fontSize: "64px",
            fontWeight: "bold",
            display: "block"
          }
        },
        {
          props: { variant: "widgetDescription"},
          style: {
            color: "#71727A",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "150%",
            display: "block"

          }
        },
        {
          props: { variant: "dialogTitle"},
          style: {
            color: "#31333F",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "48px",
            lineHeight: "58px",
            display: "block"

          }
        },
        {
          props: { variant: "dialogSubtitle"},
          style: {
            color: "#71727A",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            display: "block"

          }
        },
        {
          props: { variant: "boxDashboardTitle"},
          style: {
            color: "#000000",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "24px",
            lineHeight: "29px",
            display: "block"
          }
        },
        {
          props: { variant: "boxDashboardSubtitle"},
          style: {
            color: "#71727A",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "12px",
            lineHeight: "14px",
            display: "block"
          }
        }
      ]
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "xpream" },
          style: {
            textTransform: "none",
            color: "#FFFFFF",
            background: "#D76660",
            border: "1px solid #D76660",
            padding: "24px 48px",
            fontSize: "16px",
            lineHeight: "19px",
            borderRadius: "10px",
            ":hover": {
              background: "#DD4539",
            },
          },
        },
        {
          props: { variant: "xpream", size: "small" },
          style: {
            color: "#FFFFFF",
            backgroundColor: "#D76660",
            border: "1px solid #D76660",
            padding: "16px 24px"
          },
        },
        {
          props: { variant: "xpream", color: "secondary" },
          style: {
            color: "#FFFFFF",
            backgroundColor: "#42B3B4",
            border: "1px solid #42B3B4",
            ":hover": {
              background: "#00A3A3",
            },
          },
        },
        {
          props: { variant: "xpream", color: "error" },
          style: {
            color: "#FFFFFF",
            backgroundColor: "#E8985D",
            border: "1px solid #E8985D",
            ":hover": {
              background: "#E48437",
            },
          },
        },
        {
          props: { variant: "xpreamOutlined" },
          style: {
            textTransform: "none",
            color: "#D76660",
            border: "1px solid #D76660",
            background: "#FFFFFF",
            padding: "24px 48px",
            fontSize: "16px",
            lineHeight: "19px",
            borderRadius: "10px",
          },
        },
        {
          props: { variant: "xpreamOutlined", size: "small" },
          style: {
            color: "#D76660",
            border: "1px solid #D76660",
            padding: "16px 24px"
          },
        },
        {
          props: { variant: "xpreamOutlined", color: "secondary" },
          style: {
            color: "#42B3B4",
            backgroundColor: "#FFFFFF",
            border: "1px solid #42B3B4",
          },
        },
        {
          props: { variant: "xpreamOutlined", color: "error" },
          style: {
            color: "#E8985D",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E8985D",
          },
        },
      ],
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            marginLeft: "-30px",
            textTransform: "none",
            color: "#000000",
            background: "#FFFFFF",
            padding: "16px",
            fontSize: "16px",
            lineHeight: "19px",
            borderRadius: "6px",
          },
        },
        
      ],
    },
  },
});

export default basicTheme;
