import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components'; 
import {Route} from 'react-router-dom';

const App = () => (
  <div>  
    <Route exact path = {`/`} component = {Home} ></Route>
    <Route exact path = {`/about`} component = {About}></Route>
    <Route exact path = {'/contact'} component = {Contact}></Route>
    <Navigation />
  </div>
);

export default App;
