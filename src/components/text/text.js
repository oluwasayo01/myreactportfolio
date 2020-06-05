import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import PropTypes from 'prop-types'
import * as color from '../color/color'
import * as fontsize from '../text/fontsize'
import * as weight from './fontweight'

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
            main: props => fontsize.small ,
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
             subs: props => fontsize.small,
            },
    }
)

const Text = styled.div`
    color: ${textColor};
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    margin-bottom:2%;
    ${props => props.heading && css `
        font-weight: ${weight.bold};
        font-size: ${fontsize.medium};
        color: ${color.black};
        margin-bottom: 1.5%;
        
    `}
`

Text.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary"])
};

Text.defaultProps = {
    variant: "primary"
};

export default Text;