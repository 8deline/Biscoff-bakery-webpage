import React from 'react'
import axios from 'axios'
import './showbakedgoods.scss'

class Showbakedgood extends React.Component {
    constructor(props) {
        super(props)
        this.state={bakedgood: null}
    }
    componentDidMount(){
        this.getbakedgood().then(response=>{
            
            this.setState({bakedgood: response.data})
            console.log(response.data)
        })
        
     }
    getbakedgood(){
        return axios.get('http://localhost:5000/api/v1/products/' + this.props.match.params.slug)
    }

    render(){
        return (
            
            this.state.bakedgood? 
            (<div className="container page">
            
               <div className="product row">
                 <div className="column col-5">
                 <img className="bakedgood" src= {this.state.bakedgood.image}></img>

                 </div>
                 <div className="column col-7">
                     <h1>{this.state.bakedgood.name}</h1>
                    <p>${this.state.bakedgood.price.$numberDecimal}</p>
                     <article>{this.state.bakedgood.description}</article>  
                 </div>  
     
                        
             </div>                 
                
             </div> )
             : ''
            )
        
    }
}

export default Showbakedgood