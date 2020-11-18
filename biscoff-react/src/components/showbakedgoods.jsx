import React from 'react'
import axios from 'axios'

class Showbakedgood extends React.Component {
    constructor(props) {
        super(props)
        this.state={bakedgood: null}
    }
    componentDidMount(){
        this.getbakedgood()
        .then(response=>{
            console.log(response)
            this.setState({bakedgood: response.data})
        })
    }
    getbakedgood(){
        axios.get('http://localhost:5000/api/v1/products/' + this.props.match.params.slug)
    }

    render(){
        return (
            <p>test</p>
        )
    }
}

export default Showbakedgood