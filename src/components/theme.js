import * as color from './color/color'
import * as fontsize from './text/fontsize'
import * as fontweight from './text/fontweight'
import * as icons from './icons'
import theme from 'styled-theming'

const background = theme.variants(
    "mode",
    "variant",
    {
        default: {
            
        }
    }
)
// const theme = {
//     color,
//     fontsize,
//     fontweight,
//     icons,
// };

export default theme