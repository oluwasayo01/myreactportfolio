import styled, { css } from 'styled-components'
import theme from 'styled-theming'




const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 20px;
    padding:10px ;
    &:hover {
        cursor: pointer;
    }

`
export default Image;