import React from 'react'

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Bakedgoods from './components/bakedgoods'
import Contact from './components/contact'

import About from './components/about'
import Showbakedgood from './components/showbakedgoods'
class App extends React.Component{
  constructor(prop) {
    super(prop)
  }

  render() {
    return (
      <Router>
        <Switch>
        
        <Route path ="/bakedgoods/about">
            <About />
          </Route>
          <Route path ="/bakedgoods/contact">
            <Contact />
          </Route>
          

          
          <Route path="/bakedgoods">
            <Bakedgoods />
          </Route>
          <Route path="/bakedgoods/:slug" component={Showbakedgood} />
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
