import React from "react";
import "./button.css";

const STYLES = ["btn--yellow", "btn--white"];

const SIZE = ["btn--medium", "btn--large"];


const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => { 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
    return (
        <button onClick={onClick} type={type} className={`btn ${checkButtonSize} ${checkButtonStyle}`}>
            {children}
        </button>
    );
};

export default Button;