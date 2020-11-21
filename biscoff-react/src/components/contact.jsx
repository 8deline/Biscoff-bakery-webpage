import React from 'react'
import '../App.css'
import qs from 'qs'
import axios from 'axios'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        // console.log(this.state)
        console.log('success')
        axios.post('http://localhost:5000/api/v1/contact', qs.stringify(this.state))
            .then(response => {
                console.log('success')
                this.setState({
                    name: '',
                    email: '',
                    message: ''
                })
            })
            .catch(err => {
                console.log(err)
                console.log('test')
            })




    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className="about-img" src="/img/pexels-daria-obymaha-1684151@2x.png" />
                        </div>

                        <div className="col-6 about-para">

                            <h1 className="about">Contact</h1>
                            <form onSubmit={(e) => { this.handleSubmit(e) }}>

                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" className="form-control input" id="name" name="name" value={this.state.name} onChange={(e) => { this.handleChange(e) }} />

                                </div>
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control input" id="exampleInputEmail1" name="email" value={this.state.email} onChange={(e) => { this.handleChange(e) }} aria-describedby="emailHelp" />

                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control input" id="exampleFormControlTextarea1" name="message" value={this.state.message} onChange={(e) => { this.handleChange(e) }} rows="3"></textarea>
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