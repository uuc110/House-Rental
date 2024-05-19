import React, { useContext } from 'react'
import './profile.css'
import PropertyList from './PropertyList'
import Chat from '../chat/Chat'
import { listData } from '../../lib/dummyData'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const Profile = () => {
    //to get the user data
    const { user, updateUser } = useContext(AuthContext);

    //to log out the user
    const handleLogout = async function () {
        await axios.post("http://localhost:4500/auth/logout");
        // localStorage.removeItem("user");
        updateUser(null);
        window.location.href = "/login";
    }

    return (
        <div>
            <div className="profile-page">
                <div className="user-info">
                    <div className="info">
                        <div className="heading-user-info">
                            <h2>User Information</h2>
                            <div className="buttons-profile">
                                <button onClick={handleLogout}>Logout</button>
                                <Link to="/profile/update">
                                <button>Update Profile</button>
                                </Link>
                            </div>
                        </div>
                        <div className="user-details">
                            <img className='pfp' src={user.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="" />
                            <div className="user-personal-details">
                                <p>Username: <span>{user?.username}</span></p>
                                <p>Email: <span>{user?.email}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="my-list">
                        <div className="heading-user-info">
                            <h2>My List</h2>
                            <button>Create New Post</button>
                        </div>
                        <div className="property-list">
                            {listData.map((data) => { return <PropertyList key={data.id} data={data} /> })}
                        </div>
                    </div>
                    <div className="saved-list">
                        <div className="heading-user-info">
                            <h2>Saved List</h2>
                        </div>
                        <div className="property-list">
                            {listData.map((data) => { return <PropertyList key={data.id} data={data} /> })}
                        </div>
                    </div>
                </div>
                <div className="chat-side">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Profile