import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import './styles/App.css';
import routesConfig from './routes-config'
import AuthenticatedRoute from './auth/AuthenticatedRoute';
import StartSession from './views/StartSession';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <Switch>
            <Route path="/login" component={StartSession}/>

            {routesConfig.map((route, i) =>
              <AuthenticatedRoute key={i} {...route}/>
            )}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
