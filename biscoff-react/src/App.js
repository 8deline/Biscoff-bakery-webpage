import React from 'react'
import ReactDOM from 'react-dom'

import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NavBarItems from './components/NavBarItems'

class App extends React.Component{
  constructor(prop) {
    super(prop)
  }

  render() {
    return (
    <div>
      <Navbar />
      <div className="homepage-background">
        <div className="homepage-words">
        <h1 className="homepage-words">Artisanal Breads & Cakes Freshly Baked Everyday</h1>
        </div>
        <button type="button" class="btn btn-light fresh-bakes">See our fresh bakes</button>
      
      </div>
      <Footer />
    </div>  
      

    )
  }
}

export default App;
