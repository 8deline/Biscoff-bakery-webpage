import React from 'react'
import NavBarItems from './NavBarItems'

class Navbar extends React.Component{
    constructor(prop) {
        super(prop)
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img className="bread-logo" src="/icon-biscoff-bakery.png" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy"/>
                        Biscoff bakery
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            {/* <li class="nav-item active">
                                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li> */}
                            <NavBarItems link="/" item="Home" />
                            <span className="marker">|</span>
                            <NavBarItems link="/bakedgoods" item = "Baked goods" />
                            <span className="marker">|</span>
                            <NavBarItems link="/bakedgoods/about" item = "About" />
                            <span className="marker">|</span>
                            <NavBarItems link="/bakedgoods/contact" item = "Contact" />
        
                        </ul>
                    </div>
                </nav> 
            </div>
        )
    }
}

export default Navbar;
