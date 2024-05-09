import React, { useState } from 'react'
import './nav.css'

const Nav = () => {
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu);
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
                    <a href='/login'>Login</a>
                    <a href='/Register'>Register</a>
                </div>
                <div className="right">
                    <a href='/login'>Login</a>
                    <a href='/Register'>Register</a>
                </div>
            </nav>
        </div>
    )
}

export default Nav