// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Recientes from './views/Recientes'
import Deportes from './views/Deportes'
import Economia from './views/Economia';
import Salud from './views/Salud';
import Add from './components/Add';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Navbar />
        <Add 
          position="top"
        />
          <div className="container">
            <div className="row">
              {/* <Add
              position="left"
              /> */}

              {/* <Add
              position="right"
              /> */}
              <Route path="/Deportes" component={Deportes}/>
              <Route path="/Salud" component={Salud}/>
              <Route path="/Economia" component={Economia}/>
              <Route path="/" exact component={Recientes}/>
            </div>
          </div>
        <Add/>
    </Router>

  );
}

export default App;
