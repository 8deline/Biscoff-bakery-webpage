import React from 'react'

class Bakedgoods extends React.Component{
    constructor(props) {
        super(props)
        this.state = {bakedgoods: ""}
    }

    componentDidMount(){
        
    }

    render(){
        if (this.state.bakedgoods ===""){
            return (
                <p>test</p>
            )
        } else {
            return (
                <div>
                    <p>test that link is created</p>
                </div>
            )
        }
    }
}

export default Bakedgoods