import Button from '../button/button'
import renderer from 'react-test-renderer'
import React from 'react'
import { ThemeProvider } from 'styled-components'

test('Snapshot of a button element', () => {
    const tree = renderer.create(
        <ThemeProvider theme={{mode: "main"}}>
            <Button text="Hire Me" pressed="false"/>;
        </ThemeProvider>).toJSON()
        expect (tree).toMatchSnapshot();
    })

