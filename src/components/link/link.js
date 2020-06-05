import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import PropTypes from 'prop-types'
import * as color from '../color/color'
import * as fontsize from '../text/fontsize'
import * as weight from '../text/fontweight'

const textColor = theme.variants(
    "mode",
    "variant",
    {
        primary: {
            main: props => color.gray,
             subs: props => color.primary,
            },
    }
)
const fontSize = theme.variants(
    "mode",
    "variant",
    {
        primary: {
            main: props => fontsize.xSmall ,
             subs: props => fontsize.small,
            },
    }
)

const fontWeight = theme.variants(
    "mode",
    "variant",
    {
        primary: {
            main: props => weight.defaultWeight,
            //  subs: props => fontsize.small,
            },
    }
)

const Link = styled.a`
    color: ${textColor};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    padding: 0px 20px;
    &:hover{
        color: ${color.primary};
        cursor: pointer;
    }
    ${props => props.navlogo && css `
        font-weight: ${weight.bold};
        font-size: ${fontsize.medium};
        color: ${color.primary};
    `}
`

Link.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary"])
};

Link.defaultProps = {
    variant: "primary"
};

export default Link;