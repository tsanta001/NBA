import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import ListEquipes from './ListEquipes';
import ListJoueurs from './ListJoueurs';

function App() {
  return (
    // <Router>
    //     <Route exact path="/">
    //       <Redirect to="/equipes" />
    //     </Route>
    //     <Route exact path="/equipes" component={ListEquipes} />
    //     <Route path="/equipe/:id" component={ListJoueurs} />
    //</Router>
    <div className="App">
      <ListEquipes /> 
    </div>
  );
}

export default App;
