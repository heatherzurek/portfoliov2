import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Error404 from './Components/Error404';
import About from './Components/About';
import Projects from './Components/Projects';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Main />
      <Switch>
      <Route exact path='/' component={Header} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
