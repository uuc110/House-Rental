import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import './nav.css'

const Nav = () => {
    const [menu, setMenu] = useState(false);

    const showMenu = () => {
        setMenu(!menu);
    }

    let { user } = useContext(AuthContext);

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
                    <a href='/properties'>About</a>
                    <a href='/properties'>Listings</a>
                    {user ? <a href='/profile/createpost'>Add Listing</a> : null}
                    <a href='/profile'>User Profile</a>
                </div>
                <img className='menu' src="/menu.png" alt="" onClick={showMenu} />
                <div className={!menu ? 'close-menu menu' : 'show-menu'}>
                    <a href='/properties'>Listings</a>
                    {user ? <a href='/profile/createpost'>Add Listing</a> : null}
                    {user ? <a href='/profile'>User Profile</a> : <a href='/login'>Login</a>}
                    {!user && <a href='/register'>Register</a>}
                </div>
                <div className="right">
                    {user ? <div className='login-register'><div className='user-pfp'><img onClick={redirectToProfile} src={user.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="avatar" /></div></div> : <div className='login-register'><a href='/login'>Login</a> <a href='/register'>Register</a></div>}
                </div>
            </nav>
        </div>
    )
}

export default Nav