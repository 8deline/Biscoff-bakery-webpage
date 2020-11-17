import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../App.css'

 class About extends React.Component{
     render(){
         return(
            <div>
            <Navbar />
            <div className="container">
            <div className="row">
                 <div className="col-6">
                    <img className="about-img" src="/img/pexels-wendy-wei-1674064.png"/>    
                 </div>

                 <div className="col-6 about-para">
                    <h1 className="about">About</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut egestas purus, id dictum sem. Cras at mi sed nibh laoreet elementum. </p>

                    <p>Proin quis risus placerat, porta neque at, mollis elit. Pellentesque ac vestibulum orci, non pretium arcu. </p>
                 </div>

             </div>
            </div>
             
            <Footer />     
         </div>
         )
         
     }
 } 

 export default About