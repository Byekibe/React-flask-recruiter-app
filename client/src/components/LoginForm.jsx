import { useState } from "react";

const LoginForm = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const url = "http://localhost:7005/token";

    const reqOpts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "mail": mail, "password": password })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const postToBackend = async () => {
            const res = await fetch(url, reqOpts);
            const data = await res.json();
            console.log(data)
        };

        postToBackend();
        setMail("");
        setPassword("");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com" 
                    value={mail}
                    onChange={e => setMail(e.target.value)}
                />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input 
                    type="password" 
                    className="form-control" 
                    id="floatingPassword" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-outline-secondary">Log in</button>
        </form>
        </>
    );
};

export default LoginForm;