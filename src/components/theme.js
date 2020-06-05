import { createContext } from 'react'
// import { themes, ThemeContext } from '../components/'
// import * as color from './color/color'
// import * as fontsize from './text/fontsize'
// import * as fontweight from './text/fontweight'
// import * as icons from './icons'


export const themes = {
    main: {
        primary: "main",
        secondary:"subs",
    },
    subs: {
        primary: "subs",
        secondary: "main",
    },
}


export const MyThemeContext = createContext({
    theme: themes.main,
})