import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Contact from './Contact';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from './About';
function App() {
  return (
    <BrowserRouter>
    <div>
  <Menu/>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/contact" component={Contact}/>
  </Switch>
    </div>
    </BrowserRouter>
  );
}

const Home =()=>{
  return (<div className='aboutstyle' style={{backgroundColor:'#EB871C'}} >
    <h2>Welcome to Home</h2>
  </div>)
}

export default App;
