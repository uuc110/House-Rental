import React, { useContext, useEffect, useState } from 'react'
import './profile.css'
import PropertyList from './PropertyList'
import Chat from '../chat/Chat'
// import { listData } from '../../lib/dummyData'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'

const Profile = () => {
    //to get the user data
    const { user, updateUser } = useContext(AuthContext);
    // console.log(user);
    // const [err, setErr] = useState('');
    const [projectList, setProjectList] = useState([]);
    const [savedPosts, setSavedPosts] = useState([]);

    //to log out the user
    const handleLogout = async function () {
        await axios.post("https://house-rental-backend-production.up.railway.app/auth/logout");
        // localStorage.removeItem("user");
        updateUser(null);
        window.location.href = "/login";
    }

    //to get lists of projects
    const projectListFetch = async function () {
        try {
            const { data } = await axios.get("https://house-rental-backend-production.up.railway.app/post/properties");
            // console.log(data);
            // const userPosts = data.post.filter(post => post.userId === user.id);
            setProjectList(data.post);

            // data.bookmarks.forEach(post => {
            //     savedProjects(post);
            // })
        } catch (error) {
            console.log(error);
        }
    };

    // to get saved lists
    const savedProjects = async function () {
        const { data } = await axios.get(`https://house-rental-backend-production.up.railway.app/post/savedposts/${user.id}`);
        // console.log(data.bookmarks);
        setSavedPosts(data.bookmarks);
    }

    useEffect(() => {
        projectListFetch();
        savedProjects();
    }, []);

    // console.log(savedPosts);
    // console.log(projectList);

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
                                <p>Username: <span>{user?.username.charAt(0).toUpperCase() + user?.username.slice(1)}</span></p>
                                <p>Email: <span>{user?.email}</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="my-list">
                        <div className="heading-user-info">
                            <h2>My List</h2>
                            <Link to={"/profile/createpost"}><button>Create New Post</button></Link>
                        </div>
                        <div className="property-list">
                            {projectList.map((data) => { return <PropertyList key={data.id} data={data} /> })}
                        </div>
                    </div>
                    <div className="saved-list">
                        <div className="heading-user-info">
                            <h2>Saved List</h2>
                        </div>
                        <div className="property-list">
                            {savedPosts.map((data) => { return <PropertyList key={data.id} data={data.post} /> })}
                            {/* {listData.map((data) => { return <PropertyList key={data.id} data={data} /> })} */}
                        </div>
                    </div>
                </div>
                <div className="chat-side">
                    {/* <Chat /> */}
                    <img src="./bg.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Profile