import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import PropTypes from 'prop-types'
import * as color from '../color/color'
import * as fontsize from '../text/fontsize'
import React from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const background = theme.variants(
    "mode",
    "variant",
    {
        primary: {
            main: props => color.primary ,
             subs: props => color.secondary,
            },
        secondary: {
            main: props => color.lightgray, 
            subs: props => color.black
        },
    }
)
const textColor = theme.variants(
    "mode",
    "variant",
    {
        primary: {
            main: props => color.secondary ,
             subs: props => color.primary,
            },
        secondary: {
            main: props => color.black, 
            subs: props => color.gray,
        },
    }
)
const fontSize = theme.variants(
    "mode",
    "variant",
    {
        primary: {
            main: props => fontsize.small,
             subs: props => fontsize.small,
            },
        secondary: {
            main: "blue", 
            subs: "white"
        },
    }
)

const Button = styled.button`
    background-color: ${background};
    border-radius: 7px 7px 0px 7px;
    color: ${textColor};
    font-size: ${fontSize};
    border: none;
    padding: 15px 30px;
    &:hover {
        cursor: pointer;
    }
    ${props => props.icon && css`
        background-color: ${background};
        padding: 20px 90px;
        border-radius: 10px;
        display: inline-flex;
        margin-left: 30px;
        &:hover {
            background-color: ${color.primary};
            color: ${color.secondary}
        }
    `}
    
    ${props => props.arrow && css `
        color: ${textColor};
        background-color: ${background};
        padding: 12px 16px;
        border-radius: ${
            props => props.arrow === "left" ? "5px": "0px"} 0px 0px
            ${props => props.arrow === "right"? "5px": "0px"};
        margin-bottom: 0px;
        &:hover {
            background-color: yellow;
        }

    `}
    `


export const ArrowButton = () => {
    return (
        <div>
            <Button arrow="left"><MdArrowBack/></Button><br/>
            <Button arrow="right"><MdArrowForward/></Button>
        </div>
    )
}


Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary"])
}

Button.defaultProps = {
    variant: "primary"
}

export default Button