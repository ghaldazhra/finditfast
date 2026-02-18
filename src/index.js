import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReportItem from './ReportItem';
import ViewsItem from './ViewsItem';
import Login from './admin/login';
import AdminDashboard from './admin/AdminDashboard';

import { BrowserRouter, Route, Switch, Redirect } 
from 'react-router-dom/cjs/react-router-dom.min';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem("isAdmin") === "true" ? (
        <Component {...props} />
      ) : (
        <Redirect to="/admin/login" />
      )
    }
  />
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="/ReportItem" component={ReportItem} />
        <Route path="/ViewsItem" component={ViewsItem} />
        <Route path="/admin/login" component={Login} />

        <PrivateRoute path="/admin/dashboard" component={AdminDashboard} />
      </Switch>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
