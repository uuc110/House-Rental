import React, { useContext, useState } from 'react'
import './authentication.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const { updateUser } = useContext(AuthContext);

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value.toLowerCase();
        const password = e.target[1].value;
        await axios.post('https://house-rental-backend-production.up.railway.app/auth/login', {
            username,
            password
        }).then((res) => {
            // localStorage.setItem("user", JSON.stringify(res.data.user))
            updateUser(res.data.user);
            navigate('/profile');
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
                        <div>{message !== null && message}</div>
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