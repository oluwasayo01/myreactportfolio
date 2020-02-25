import React from "react";
import Button from './components/button/button'
import Text from './components/text/text'
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa"
import { TiPuzzleOutline } from 'react-icons/ti'
import { MdArrowForward, MdArrowBack } from 'react-icons/md'
import { ThemeProvider } from "styled-components"
import Link from "./components/link/link";
import Image from './components/image/image'
// import './components/image/'


function App() {
  return (
    <ThemeProvider theme={{mode: "main"}}>
      <Button >Hello Oluwasayo</Button><hr style={{color: "yellow"}}/>
      {/* <div > */}
      <Button arrow ><MdArrowBack/></Button>
      <Button arrow><MdArrowForward/></Button>
      {/* </div> */}
      <Text>Hello World</Text><br/>
      <Link navlogo>Oluwasayo</Link>
      <Image src="./assets/portfolio.jpg"/>
      <Image src="./assets/portfolio2.jpg"/>
      <Image src="./assets/portfolio.jpg"/>
      <Image src="./assets/portfolio2.jpg"/>
      <ThemeProvider theme={{mode:"main"}}>
        <Button icon="bla bla" variant="secondary"><TiPuzzleOutline/>Communication Skills</Button>
        <Button icon="bla bla" variant="secondary"><FaInstagram/>Understanding Skills</Button>
        <Button icon="bla bla" variant="secondary"><FaTwitter/> Management Skills</Button>
      </ThemeProvider>
    </ThemeProvider>
    
    )
  }


export default App;
