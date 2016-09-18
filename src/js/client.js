import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Layout from './pages/Layout';
import Settings from './pages/Settings';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured} />
      <Route path='archives(:/article)' component={Archives} />
      <Route path='settings' component={Settings} />
    </Route>
  </Router>,
app);