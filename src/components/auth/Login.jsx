import React, { useState } from 'react'
import './authentication.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;

        await axios.post('http://localhost:4500/auth/login', {
            username,
            password
        }).then((res) => {
            localStorage.setItem("token", JSON.stringify(res.data.token))
            navigate('/properties');
        }).catch((err) => {
            console.log(err.response.data.message);
            setMessage(err.response.data.message);
        })
    }

    return (
        <div>
            <div className="auth-page">
                <div className="auth-left">
                    <div className="login auth">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Username" />
                            <input type="password" placeholder="Password" />
                            <button>Login</button>
                        </form>
                        <div>{message!==null && message}</div>
                        <a href="/register">Not registered yet?</a>
                    </div>
                </div>
                <div className="auth-right">
                    <img src="./bg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login