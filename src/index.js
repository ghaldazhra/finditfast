import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReportItem from './ReportItem';
import ViewsItem from './ViewsItem';
import Login from './admin/login';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={App} />
        <Route path="/ReportItem" component={ReportItem} />
        <Route path="/ViewsItem" component={ViewsItem} />
        <Route path="/admin/login" component={Login} />
      </Switch>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
