import React, { useContext, useState } from 'react'
import { Router, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './nav.css'

const Nav = () => {
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu);
    }

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    function redirectToProfile() {
        navigate('/profile');
    }

    return (
        <div>
            <nav className="navbar">
                <div className="left">
                    <div className='logo'>
                        <img src="/logo.png" alt="" />
                        <div>Urban Homes</div>
                    </div>
                    <a className="logo-seen" href='/'>
                        <img src="/logo.png" alt="" />
                        <span>Urban Homes</span>
                    </a>
                    <a href='/'>About</a>
                    <a href='/properties'>Properties</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    <a href='/profile'>Profile</a>
                </div>
                <img className='menu' src="/menu.png" alt="" onClick={showMenu} />
                <div className={!menu ? 'close-menu menu' : 'show-menu'}>
                    <a href='/'>About</a>
                    <a href='/'>Services</a>
                    <a href='/'>Contact</a>
                    <a href='/'>Agents</a>
                    {user ? <a href='/profile'>Profile</a> : <a href='/login'>Login</a>}
                    {!user && <a href='/register'>Register</a>}
                </div>
                <div className="right">
                    {user ? <div className='login-register'><div className='user-pfp'><img onClick={redirectToProfile} src={user.avatar || "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5ff9cd-a751-4cd4-b9c5-00aa21620b7b/deu3q3u-6f1ca041-b5b7-46d7-ab06-f8547a7114cc.jpg/v1/fill/w_748,h_734,q_75,strp/cool_pfp_for_anyone__by_snowierev_deu3q3u-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzM0IiwicGF0aCI6IlwvZlwvNWU1ZmY5Y2QtYTc1MS00Y2Q0LWI5YzUtMDBhYTIxNjIwYjdiXC9kZXUzcTN1LTZmMWNhMDQxLWI1YjctNDZkNy1hYjA2LWY4NTQ3YTcxMTRjYy5qcGciLCJ3aWR0aCI6Ijw9NzQ4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.bIIhpuZAj8GkKnWaCQ-QqVf-q58InCQZthNWr5mno7w"} alt="avatar" /></div><a href='/profile'>Profile</a></div> : <div className='login-register'><a href='/login'>Login</a> <a href='/register'>Register</a></div>}
                </div>
            </nav>
        </div>
    )
}

export default Nav