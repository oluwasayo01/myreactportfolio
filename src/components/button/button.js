import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import * as color from '../color/color'
import { background, textColor, fontSize } from './mixin'
import React from 'react'
import { MdArrowBack, MdArrowForward } from 'react-icons/md'

const Button = styled.button`
    background-color: ${background};
    border-radius: 7px 7px ${props => props.edge==="lower-right" ? "0px" : "7px"} ${props => props.edge==="lower-left" ? "0px" : "7px"};
    color: ${textColor};
    font-size: ${fontSize};
    border: none;
    padding: 10px 20px;
    &:hover {
        background-color: #FDC813;
        cursor: pointer;
    }
    ${props => props.icon && css`
        background-color: ${background};
        width: 330px;
        padding: 20px 0px;
        border-radius: 10px;
        display: inline-flex;
        margin-left: 30px;
        margin-bottom: 20px;
        &:hover {
            background-color: ${color.primary};
            color: ${color.secondary}
        }
    `}
    
    ${props => props.arrow && css `
        color: ${textColor};
        background-color: ${background};
        padding: 10px 5px;
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