import Login from './Component/Login.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Inscription from './Component/Inscription.js';


function App() {
  useEffect(() => {
    const body = new URLSearchParams({
      username: '',
      password: ''
    })

    const headers = new Headers({
      token: "token"
    })

    fetch('http://localhost:3000', {
      method: 'POST',
      body: body, 
      headers: headers,
      mode: 'cors',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data =>  console.log(data))
  })

  return (
    <>
    <Inscription />
    
    <Login />
    </>

  );
}

export default App;
