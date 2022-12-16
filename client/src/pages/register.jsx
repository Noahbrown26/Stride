import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function Register(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setName] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
            <label htmlFor="name">Username</label>
            <input value={username} name="username" id="usernamw" placeholder="username" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" className="customBtn" onClick={() => history.push("/")}>Log In</button>
        </form>
    </div>
    )
}