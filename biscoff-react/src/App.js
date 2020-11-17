import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Bakedgoods from './components/bakedgoods'
import NavBarItems from './components/NavBarItems'

class App extends React.Component{
  constructor(prop) {
    super(prop)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/bakedgoods">
            <Bakedgoods />
          </Route>
          <Route path = "/">
          <div>
      <Navbar />
      <div className="homepage-background">
        <div className="homepage-words">
        <h1 className="homepage-words">Artisanal Breads & Cakes Freshly Baked Everyday</h1>
        </div>
        <Link to="/bakedgoods" className="btn btn-light fresh-bakes">See our fresh bakes</Link>
      </div>
      <Footer />
    </div>  
          </Route>
        </Switch>
       
      </Router>
    
      

    )
  }
}

export default App;
