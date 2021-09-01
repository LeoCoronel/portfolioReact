import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    mainColor: "#fff",
    mainColorSticky: "#eaeaeae0",
    secondaryColor: "#fff",

    borderColor: "#c1c1c1",

    mainText: "#5D6063",
    secondaryText: "black",
    subtitle: "#f9564f",

    themeDotBorder: "#24292e",

    previewBg: "rgba(251, 249, 243, 0.8)",

    previewShadow: "#81a6d1",

    btnColor: "#5995DA"
}

export const darkTheme = {
    mainColor: "#15202B",
    mainColorSticky: "#152026e",
    secondaryColor: "#192734",

    borderColor: "#164D56",

    mainText: "#fff",
    secondaryText: "eee",
    subtitle: "#f9564f",

    themeDotBorder: "#fff",

    previewBg: "rgba(25, 39, 52, 0.8)",

    previewShadow: "#111921",

    btnColor: "#5995DA"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.mainColor};
    }
`