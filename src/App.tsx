import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './styles/App.css';
import routesConfig from './routes-config'


function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Switch>
            {routesConfig.map((route, i) =>
              <Route key={i} {...route}/>
            )}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
