import React from 'react';
import './component/App.css';
import Home from './component/Home';
import Portfolio from './component/Portfolio';
import ContactMe from './component/ContactMe';
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Nav from './component/Nav';
import Fashion from './component/Fashion';
import Archi from './component/Archi';
import Food from './component/Food';
import Video from './component/Video';
import Conceptual from './component/Conceptual';
import Modell1 from './component/Modell1';

function App() {
  return (
    <Router>
    <div>
     <Switch>
     <Route path="/" exact component ={Nav}/>
       <Route path="/home" exact component ={Home}/>
       <Route path="/portfolio" exact component ={Portfolio}/>
       <Route path="/contactme" extact component ={ContactMe}/>
       <Route path="/portfolio/fashion" exact component ={Fashion}/>
       <Route path="/portfolio/conceptual" exact component ={Conceptual}/>
       <Route path="/portfolio/modell1" exact component ={Modell1}/>
       <Route path="/portfolio/archi" exact component ={Archi}/>
       <Route path="/portfolio/food" exact component ={Food}/>
       <Route path="/portfolio/video" exact component ={Video}/>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
