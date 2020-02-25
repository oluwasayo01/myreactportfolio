import React from "react";
import Text  from "../components/text/text";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
    title: "Text",
    decorators: [withA11y, withKnobs]
};

export const heading = () => (
    <Text type={text("type", "link")} >
    </Text>
);

export const link = () => (
    <Text type={text("type", "link")}> Hello </Text>
);

export const body = () => (
    <Text>About Me</Text>
);
