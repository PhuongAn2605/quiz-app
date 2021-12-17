import { CircularProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react';
import {  Switch, Route, Link } from 'react-router-dom';


import './App.css';
import Header from './components/header/header.component';
const AttemptPage = lazy(() => import('./pages/attempt/attempt.page'));
const IntroductionPage = lazy(() => import('./pages/introduction/introduction.component'));
const ResultPage = lazy(() => import('./pages/result/result.page'));

const App = () => {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<CircularProgress sx={{ display: 'flex', justifyContent: "center" }} />}>
      <Switch>
        <Route exact path='/' component={IntroductionPage} />
        <Route exact path='/attempts' component={AttemptPage} />
        <Route exact path='/result' component={ResultPage} />
        <Route path='/'>
          <div style={{ textAlign: "center"}}>
          Page Not Found
          </div>
        </Route>
      </Switch>
      </Suspense>
      
    </div>
  );
}

export default App;
