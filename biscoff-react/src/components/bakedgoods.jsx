import React from 'react'
import axios from 'axios'
   
import {Link} from 'react-router-dom'
import '../App.css'

class Bakedgoods extends React.Component{
    constructor(props) {
        super(props)
        this.state = {bakedgoods: null}
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/v1/products')
        .then(response=>[
            this.setState({bakedgoods: response.data})
            // console.log(response.data)
        ])
    }

    render(){
        return(
            <div>
                
                <div className="container baked-good-main">
                <h1 className="about">Baked goods</h1>
                <div className="row">
                    
                {this.state.bakedgoods===null ? '': (this.state.bakedgoods.map(bakedgood=>{
                    return( 
                       <div className="col-4 bakedgood-div">
                           <div className="bakedgoods-list">
                             <figure>
                             <Link to={"/bakedgoods/"+ bakedgood.slug}>
                        <img className="bakedgood"  src={bakedgood.image}></img></Link>
                           
                            
                         <figcaption>
                         <p> {bakedgood.name}</p>
                        <p> {bakedgood.price.$numberDecimal}</p>
                             </figcaption>         
                                 </figure>  
                           
                            
                           </div>
                           
                        </div>
                        
                    )
                     
                    
                }))
                 }
                
                </div>
                
            </div>
            
            </div>
            
            

                
            )
            }
         
            
        
    
}

export default Bakedgoods