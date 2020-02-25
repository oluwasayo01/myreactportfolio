import React from 'react'
import styled from "styled-components";
import { variant } from "styled-system";
// import theme from 'styled-theming'
// import theme from "../theme";



// const StyledButton = styled.button `

// `

const StyledButton = styled("button")(
    variant({
        prop: "type",
        variants: {
            primary: {
                color: props => props.theme.color.secondary,
                backgroundColor: props => props.theme.color.primary,
                fontFamily: "sans-serif",
                fontWeight: props => props.theme.fontweight.bold,
                border: "none",
                borderRadius: "6px 6px 0px 6px",
                padding: "10px 20px",
                "&:hover": {
                    cursor: "pointer"
                }
            },
            secondary: {
                color: props => props.theme.color.primary,
                backgroundColor: props => props.theme.color.secondary,
                fontFamily: "sans-serif",
                fontWeight: props => props.theme.fontweight.bold,
                border: "none",
                borderRadius: "6px 6px 0px 6px",
                padding: "10px 20px",
                "&:hover": {
                    cursor: "pointer",
                    color: props => props.theme.color.black,
                    backgroundColor: props => props.theme.color.primary
                }
            },
            iconed: {
                color: props => props.theme.color.black,
                backgroundColor: props => props.theme.color.lightgray,
                fontFamily: "sans-serif",
                fontSize: props => props.theme.fontsize.small,
                fontWeight: props => props.theme.fontweight.bold,
                border: "none",
                borderRadius: "10px 10px 10px 10px",
                padding: "18px 100px 18px 25px",
                "&:hover": {
                    cursor: "pointer",
                    backgroundColor: props => props.theme.color.primary,
                    color: props => props.theme.color.secondary
                }
            }
        }
    })
);

export default StyledButton;
