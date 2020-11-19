import React from 'react'
import '../App.css'

class Contact extends React.Component {
    render(){
        return(
           <div>
           
           <div className="container">
           <div className="row">
                <div className="col-6">
                   <img className="about-img" src="/img/pexels-daria-obymaha-1684151@2x.png"/>    
                </div>

                <div className="col-6 about-para">

                   <h1 className="about">Contact</h1>
                   <form>

                   <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control input" id="name"/>
    
                </div>       
                <div className="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" />
    
                </div>
                
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control input" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-send">Send</button>
            </form>
                </div>

            </div>
           </div>
            
              
        </div>
        )
        
    }
}

export default Contact