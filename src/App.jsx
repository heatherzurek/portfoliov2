import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Error404 from './Components/Error404';
import About from './Components/About';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <Footer />
      <Main />
      <Switch>
      <Route exact path='/' component={Header} />
      <Route path='/about' component={About} />
      <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
