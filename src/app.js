import React from 'react'
import { Header } from './components/header';
import { UserProfile } from './components/body';
import { pageTitle } from './profile.json';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Recomendations } from './pages/recomendations';

document.title = pageTitle;

export const App = () => (

  <React.Fragment>
    <Router>
      <Header />
      <Switch>
        {/* <Route path="/gallery">
            <Gallery />
          </Route> */}
        <Route path="/product-recommendations" component={Recomendations} />
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
)
