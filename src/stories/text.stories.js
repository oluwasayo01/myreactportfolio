import React from "react";
import Text  from "../components/text/text";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from '@storybook/addon-knobs'
import { ThemeProvider } from "styled-components";

export default {
    title: "Text",
    decorators: [withA11y, withKnobs]
};

export const heading = () => (
    <ThemeProvider theme={{mode:"main"}}>
        <Text heading type={text("type", "link")} >
            Hello World!
         </Text>
    </ThemeProvider>
);


export const body = () => (
    <ThemeProvider theme={{mode: "main"}}>
        <Text type={text("type", "link")} >
            Hello there
    </Text>
    </ThemeProvider>
);
