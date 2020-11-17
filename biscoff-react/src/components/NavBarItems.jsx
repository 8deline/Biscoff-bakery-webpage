import React from 'react'

class NavBarItems extends React.Component {
    constructor(prop){
        super(prop)
    }
    render() {
        return (
        <li className="nav-item"><a className="nav-link" href= {this.props.link}>{this.props.item}</a></li>
        )
    }
}

export default NavBarItems;