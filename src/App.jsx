import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Candidates from './Containers/Candidates.container';
import routes from './utils/routes';
// import createBrowserHistory from 'history/createBrowserHistory';


const App = () => (
  <BrowserRouter>
    <Route path={routes.home} component={Candidates} />
  </BrowserRouter>
);

export default App;
