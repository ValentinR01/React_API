import {useEffect} from "react";
import { Component } from "react";
import usePostInscription from "../Hook/usePostInscription.tsx";

export default class Inscription extends Component {
    constructor(props) {
        super(props);

        this.state = {username: '', password: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getUsername = (e) => {
        this.setState({username: e.target.value});
    }

    getPassword = (e) => {
        this.setState({password: e.target.value})
    }


     handleSubmit(event) {
         event.preventDefault();
         // Minimum value check
         if ((this.state.username.length > 1) && (this.state.password.length > 1)) {
             const body = JSON.stringify({
                 username: this.state.username,
                 password: this.state.password
             })

             const headers = new Headers({
                 'Content-Type': 'application/json',
                 'Accept': 'application/json'
             })

             fetch('http://localhost:2345', {
                 method: 'post',
                 mode: 'cors', // this cannot be 'no-cors'
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify({
                     "user": {
                         "email": `fds`,
                         "password": `efc`
                     }
                 }),
             })
                 .then(res => res.json())
                 .then(data =>  console.log(data))

         }
     }




    render() {
    return (
        <div className="container">
        
        <form onSubmit={this.handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Inscription</h1>
      
        <div className="form-floating">
            <input type="text" className="form-control" id="floatingInput" placeholder="valentin01" onChange={this.getUsername}/>
            <label htmlFor="floatingInput">Username</label>
        </div>

        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={this.getPassword}/>
            <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary">Inscription</button>
        </form>    
        </div>
    )
}
}