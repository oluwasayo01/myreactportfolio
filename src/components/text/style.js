import styled from 'styled-components'
import {variant} from 'styled-system'
import theme from 'styled-theming'
import PropTypes from 'prop-types'
// import { variant } from 'styled-system'

const textStyle = theme.variants(
    "mode",
    "type",
    {
       primary: {
            color: props => props.theme.color.primary,
            // fontsize:  theme.fontsize.large,
            // fontweight:  theme.fontweight.bold,

       },
       secondary: {
            color: props => props.theme.color.secondary,
            // fontsize:  theme.fontsize.large,
            // fontweight:  theme.fontweight.bold,

       } 
    }
)

const Text = styled.div`
    color: ${textStyle};
    /* font-size: ${textStyle};
    font-weight: ${textStyle}; */

 `

 Text.propTypes = {
     variant: PropTypes.oneOf(["primary", "secondary"])
 };

 Text.defaultProps = {
     variant: "primary",
 };

// const Text = styled('div') (
//     variant({
//         prop: 'type',
//         variants: {
//             heading: {
//                 // fontSize:  theme.fontsize.large,
//                 fontWeight:  theme.fontweight.bold
//             },
//             normal: {
//                 color:  theme.color.gray,
//                 fontSize:  theme.fontsize.medium,
//                 fontWeight:  theme.fontweight.defaultWeight,
//             },
//             navlink: {
//                 color:  theme.color.gray,
//                 fontSize:  theme.fontsize.small,
//                 fontWeight:  theme.fontweight.defaultWeight,
//                 '&:hover': {
//                     color:  theme.color.primary,
//                     cursor: "pointer"
//                 }   
//             }
//         }
//     })
// )


export default Text