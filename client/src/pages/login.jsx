import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****************" id="password" name="password" />
                <button type="submit" className="customtest">Log In</button>
                <button className="link-btn" onClick={() => history.push("/register")}>Don't have an account? Register here.</button>
            </form>
            
        </div>
    )
}