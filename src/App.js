import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import './App.css';
import Header from './components/header/header.component';
import AttemptPage from './pages/attempt/attempt.page';
import IntroductionPage from './pages/introduction/introduction.component';
import ResultPage from './pages/result/result.page';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={IntroductionPage} />
        <Route exact path='/attempts' component={AttemptPage} />
        <Route exact path='/result' component={ResultPage} />
      </Switch>
    </div>
  );
}

export default App;
