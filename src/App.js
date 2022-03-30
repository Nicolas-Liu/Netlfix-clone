import React from 'react';
import Home from './pages/home/Home'
import "./App.scss"
import Watch from './pages/watch/watch';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return <>
  <Router>
      <Switch>
            <div className="container">
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/movies">
                <Home type="movies"/>
              </Route>
              <Route path="/series">
                <Home type="series"/>
              </Route>
              <Route path="/watch">
                <Watch/>
              </Route>

            </div>
      </Switch>
    </Router>
  </>
}

export default App