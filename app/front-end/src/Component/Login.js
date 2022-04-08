

export default function Login(){


    return (
        <div className="container">
        
<form>
        <h1 className="h3 mb-3 fw-normal">Connnexion</h1>
      
        <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Connexion</button>
</form>    
</div>
    )

}

