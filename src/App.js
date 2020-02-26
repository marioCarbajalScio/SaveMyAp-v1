import React from 'react';
import './App.css';
import Home from './components/Home'
import Questions from './components/Questions'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/questions' component={Questions}/>
        </Switch>
        </BrowserRouter>

  );
}

export default App;
