import React from 'react';
import './App.css';
import LeaderBoard from './Component/LeaderBoard';
import 'h8k-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const title = 'SPA - LeaderBoard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <Switch>
          <Route path="/:sortKey">
            <LeaderBoard />
          </Route>
          <Route path="/">
            <LeaderBoard />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
