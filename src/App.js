import React, { useState } from "react";
import Button from "./components/button/button";
import Text from "./components/text/text";
import { FaAddressBook, FaAlignLeft, FaAlignCenter } from "react-icons/fa";
// import { TiPuzzleOutline } from "react-icons/ti";
// import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { ThemeProvider } from "styled-components";
import Image from "./components/Image/image";
import StyledCard, { YellowCard } from "./components/card/card";
import { Footer } from "./components/footer/footer";
import { Navbar } from "./components/navbar/navbar";
import { themes } from "./components/theme";
import "./App.css";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// export default function App() {
//   const Home = lazy(() => import('./components/navbar/navbar'))
//   const About = lazy(() => import('./components/card/card'))

//   return (
//     <Router>
//       <Suspense fallback={<div>Loading ...</div>}>
//         <Switch>
//           <Route exact path="/" component={Home}></Route>
//           <Route  path="/about" component={About}></Route>
//         </Switch>
//       </Suspense>
//     </Router>
//   )

// }
// const [state, setState] = useState({
//   theme: themes.main,
  // toggleTheme,
// });

// function toggleTheme() {
//   setState((state) => ({
//     theme: state.theme === themes.main ? themes.subs : themes.main,
//   }));
// }

function App() {
  return (
    // <MyThemeContext.Provider value={state}>
    <ThemeProvider theme={themes.main}>
      <div class="App-container">
        <section className="header">
          <Navbar></Navbar>
          <hr />
          <div class="banner">
            <div>
              <Image />
            </div>
            <div class="banner-text">
              <Text heading>Hello! I am Oluwasayo Akinkunmi</Text>
              <div class="description">
                <Text>
                  Next this not shut rhetoric best had well of was on facility
                  presented . Groundterm, economics a get title and in he
                  attention if one sleep is a self interest. The be a text
                  conduct slightly probably, looked hitting he abused.{" "}
                </Text>
              </div>
              <div>
                <Button edge="lower-right">Download CV</Button>
              </div>
            </div>
          </div>
        </section>
        <section class="header">
          <div>
            <Text heading>About Me</Text>
            <Text>
              Next this not shut rhetoric best had well of was on facility
              presented . Groundterm, economics a get title and in he attention
              if one sleep is a self interest. The be a text conduct slightly
              probably, looked hitting he abused.
            </Text>
            <Button edge="lower-left">Hire me</Button>
          </div>
          <div>
            <Image />
          </div>
        </section>
        <section class="header" id="my-experience">
          <div>
            <Text heading>My Experience</Text>
            <Text>
              Next this not shut rhetoric best had well of was on facility
              presented . Groundterm, economics a get title.
            </Text>
          </div>
          <div>
            <StyledCard />
          </div>
        </section>
        <section class="header" id="my-projects">
          <div>
            <Text heading>My Projects</Text>
            <Navbar />
          </div>
          <div>
            <Image />
            <Image />
            <Image />
          </div>
        </section>
        <section class="header" id="my-speciality">
          <div class="icon-buttons">
            <Button icon variant="secondary">
              <FaAddressBook />
              Communication Skills
            </Button>
            <Button icon variant="secondary">
              <FaAlignLeft />
              Understanding Skills
            </Button>
            <Button icon variant="secondary">
              <FaAlignCenter />
              Management Skills
            </Button>
          </div>
          <div class="speciality">
            <Text heading>My Speciality</Text>
            <Text>
              Next this not shut rhetoric best had well of was on facility
              presented . Groundterm, economics a get title and in he attention
              if one sleep is a self interest. The be a text conduct slightly
              probably, looked hitting he abused.{" "}
            </Text>
          </div>
        </section>
        <section class="header" id="my-experience">
          <div>
            <Text heading>My Experience</Text>
            <Text>
              Next this not shut rhetoric best had well of was on facility
              presented . Groundterm, economics a get title.
            </Text>
          </div>
          <div>
            <YellowCard />
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </ThemeProvider>
    // </MyThemeContext.Provider>
  );
}

export default App;
