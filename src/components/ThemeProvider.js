import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    createTheme,
   } from "@mui/material";
   import React from "react";
   const appTheme = createTheme({
    palette: {
    primary: {
    main: "rgba(44, 44, 44, 1)",
    },
    secondary: {
    main: "rgba(245, 245, 245, 1)",
    },
    text: {
    primary: "rgba(30, 30, 30, 1)",
    secondary: "rgba(245, 245, 245, 1)",
    },
    },
    typography: {
    fontFamily: "Inter, Helvetica",
    h1: {
    fontSize: "48px",
    fontWeight: 700,
    letterSpacing: "-0.96px",
    lineHeight: "120%",
    },
    button: {
    fontSize: "16px",
    fontWeight: 400,
    letterSpacing: "0px",
    lineHeight: "100%",
    textTransform: "none",
    },
    },
    components: {
    MuiButton: {
    styleOverrides: {
    root: {
    textTransform: "none",
    },
    },
    },
    },
   });
   export const ThemeProvider = ({ children }) => {
    return (
    <MuiThemeProvider theme={appTheme}>
    <CssBaseline />
    {children}
    </MuiThemeProvider>
    );
   };
   