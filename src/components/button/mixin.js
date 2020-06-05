import theme from 'styled-theming'
import * as color from '../color/color'
import * as fontsize from '../text/fontsize'


export const background = theme.variants(
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

export const textColor = theme.variants(
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

export const fontSize = theme.variants(
    "mode",
    "variant",
    {
        primary: {
            main: props => fontsize.xSmall,
             subs: props => fontsize.small,
            },
        secondary: {
            main: "blue", 
            subs: "white"
        },
    }
)