import React from "react";
import Button  from "../components/button/button";
import { action } from "@storybook/addon-actions";
import { withA11y } from "@storybook/addon-a11y";

export default {
    title: "Button",
    decorators: [withA11y]
};

export const mediumButton = () => (
    <Button onClick={action('Clicked')}>Hire me</Button>
);
