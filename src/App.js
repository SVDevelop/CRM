import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AppForm from './pages/AppForm';
import AllBids from './pages/AllBids';
import './App.css';

function App() {
  return (
    <div className="App">
      <AllBids />
      <Router >

        <Switch >
          {/* <Route path="/"><AppForm /></Route> */}
          <Route />
          <Route />
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
