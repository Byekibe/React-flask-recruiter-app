import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import LoginPage from '../pages/LoginPage.jsx';
import HomePage from '../pages/HomePage.jsx'

const RegisterForm = () => {
    // const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [backendRes, setBackendRes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const postRegisterData = async () => {
            const reqOpts = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "username": userName, "mail": mail, "password": password })
            }
        
            const url = "http://localhost:7005/register";

            const res = await fetch(url, reqOpts);
            const data = await res.json();
            setBackendRes(data.msg);

            setMail("");
            setPassword("");
            setUserName("");
        };

        postRegisterData();

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="floatingUsername" 
                    placeholder="Pete" 
                    required
                    value={userName}
                    onChange={e => setUserName(e.target.value)}    
                />
                <label htmlFor="floatingUsername">Username</label>
                </div>
                <div id="passwordHelpBlock" className="form-text text-danger">
                    {backendRes === 1062? (
                        <h5>Email exists</h5>
                    ) : ""}
                </div>
                <div className="form-floating mb-3">
                <input 
                    type="email" 
                    className="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com" 
                    required
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
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className="d-flex">
                    <button className="btn btn-sm btn-outline-secondary me-5">Sign Up</button>
                    <h6 className="mt-2">Have an account? <Link to="/login">Log in</Link></h6>
                </div>
            </form>
        </>
    );
};

export default RegisterForm