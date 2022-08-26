import React from 'react';
import Navbar from './components/includes/navbar';
import Fundation from './components/pages/fundation';
import Projects from './components/pages/our-projects';
import Network from './components/pages/our-network';
import Parteners from './components/pages/be-parteners';
import Novel from './components/pages/actu';
import Space from './components/pages/espace-acteurs';
import Founder from './components/pages/acteurs/fondateur';
import Donator from './components/pages/acteurs/donateur';
import SubmitPage from './components/pages/submit';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>

      <div>
      <Navbar />

        <Route path="/">
        <Fundation />
        </Route>

        <Route path="/projects">
        <Projects />
        </Route>

        <Route path="/network">
        <Network />
        </Route>
       
        <Route path="/parteners">
        <Parteners />
        </Route>

        <Route path="/novel">
        <Novel />
        </Route>

        <Route path="/space">
        <Space />
        </Route>

        <Route path="/founder">
        <Founder />
        </Route>

        <Route path="/donator">
        <Donator />
        </Route>

        <Route path="/submitPage">
        <SubmitPage />
        </Route>
       
      </div>
    </Router>

  );
}

export default App;
