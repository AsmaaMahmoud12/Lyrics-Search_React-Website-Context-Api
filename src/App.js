import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react';

import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';

import { Provider } from './context';

function App() {
  return (
    <Provider>
      <BrowserRouter>  
        {/* Fake Dom element not going
         to show in the actual dom */}
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Index} />
              <Route path='/lyrics/track/:id' component={Lyrics} />
            </Switch>
          </div>
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
