import React from 'react'
import { UserProfile } from './components/body';
import { pageTitle } from './profile.json';
import './styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Recommendations, Bookmarks } from './pages/recomendations';

document.title = pageTitle;

export const App = () => (

  <React.Fragment>
    <Router>
      <Switch>
        {/* <Route path="/gallery">
            <Gallery />
          </Route> */}
        <Route path="/product-recommendations" component={Recommendations} />
        <Route path="/bookmarks" component={Bookmarks} />
        <Route exact path="/">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  </React.Fragment>
)
