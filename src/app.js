import React from 'react'
import { Header } from './components/header';
// import { Gallery } from './components/gallery';
import { UserProfile } from './components/body';
import { createGlobalStyle } from 'styled-components';
import { pageTitle } from './profile.json';
import { mobileScreenSize } from './styleguide/breakpoints';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  :root {
    --header-height: 300px;

    @media screen and (max-width: ${mobileScreenSize}) {
      --header-height: 200px;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html, #app {
    background-color: #262626;
    font-family: 'Roboto', sans-serif;
    padding:0;
    margin:0;
    height: 100%;
  }
`
document.title = pageTitle;

export const App = () => (

  <React.Fragment>
    <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          {/* <Route path="/gallery">
            <Gallery />
          </Route> */}
          <Route path="/">
            <UserProfile />
          </Route>
        </Switch>
      </Router>
  </React.Fragment>
)
