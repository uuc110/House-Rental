import React from 'react'
import './profile.css'
import PropertyList from './PropertyList'
import Chat from '../chat/Chat'
import { listData, userData } from '../../lib/dummyData'
import axios from 'axios'

const Profile = () => {

    const handleLogout = async function () {
        await axios.post("http://localhost:4500/auth/logout");
        localStorage.removeItem("token");
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
                                <button>Update Profile</button>
                            </div>
                        </div>
                        <div className="user-details">
                            <img className='pfp' src={userData.img} alt="" />
                            <div className="user-personal-details">
                                <p>Username: <span>{userData.name}</span></p>
                                <p>Email: <span>joe@gmail.com</span></p>
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