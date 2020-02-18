import React from 'react'
import TextStyled from './style'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

function Text() {
    return (
        <ThemeProvider theme={theme}>
            <TextStyled heading colorheading>About Me</TextStyled>
        </ThemeProvider>
    )
}

export default Text