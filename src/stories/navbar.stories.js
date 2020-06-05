import React from "react";
import Button from "../components/button/button";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { FaFacebook } from "react-icons/fa"
import { Navbar } from "../components/navbar/navbar";
// import theme from "../components/theme";

export default {
    title: "Navbar",
    decorators: [withA11y, withKnobs]
};

export const mainButton = () => (
    <ThemeProvider theme={{mode:"main"}}>
        <Navbar/>
    </ThemeProvider>
);

