import styled, { css} from 'styled-components'

const StyledText = styled.div`
    ${(props) => props.heading ? 
    css`
    font-weight: ${props.theme.fontweight.bold};
    font-size: ${props.theme.fontsize.large};
    color: ${props.colorheading && css`${props.theme.color.primary}`}
    `
    : props.link ?
     css`
     font-weight: normal;
     color: ${props.theme.color.gray};
     &:hover {
         cursor: pointer;
         color: ${props.theme.color.primary};
     }
     `
     :  css`
    font-weight: ${props.theme.fontweight.defaultWeight};
     color: ${props.theme.color.gray};
     `}
`;


export default StyledText