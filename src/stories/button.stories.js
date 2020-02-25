import React from "react";
import Button from "../components/button/button";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from "@storybook/addon-knobs";
import { ThemeProvider } from "styled-components";
import { FaFacebook } from "react-icons/fa"
// import theme from "../components/theme";

export default {
    title: "Button",
    decorators: [withA11y, withKnobs]
};

export const mainButton = () => (
    <ThemeProvider theme={{mode:"main"}}>
        <Button>{text("Label", "Hire me")}</Button>
    </ThemeProvider>
);

export const secondaryButton = () => (
    <ThemeProvider theme={{mode: "subs"}}>
        <Button>{text("Label", "Say, Hello!")}</Button>
    </ThemeProvider>
);

export const iconedButton = () => (
    <ThemeProvider theme={{mode: "main"}}>
        <Button icon="whatever" variant="secondary" onClick={action("Clicked")}><FaFacebook/>Download CV</Button>
    </ThemeProvider>
);
