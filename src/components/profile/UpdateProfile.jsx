import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './profile.css';
import { useNavigate } from 'react-router-dom';
import CloudinaryUploadWidget from './CloudinaryUploadWidget';

axios.defaults.withCredentials = true; // to save/check cookies

const UpdateProfile = () => {
    const { user, updateUser } = useContext(AuthContext);

    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState('');

    const [avatar, setAvatar] = useState(user.avatar);

    const navigate = useNavigate();

    const handleChange = async (e) => {
        e.preventDefault();

        // console.log(username, email, password, avatar);

        try {
            const res = await axios.put(
                `https://house-rental-backend-production.up.railway.app/user/${user.id}`,
                { username, email, password, avatar }
            );
            updateUser(res.data.user);
            navigate('/profile');
        } catch (err) {
            console.error(err.response ? err.response.data.message : err.message);
        }
    }

    return (
        <div className='update-profile'>
            <form onSubmit={handleChange}>
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <p style={{ fontSize: '0.7rem', textAlign: 'center' }}>Please fill all fileds!!</p>
                <button>Update</button>
            </form>
            <div className="right-update">
                <img src={avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt="Profile" />
                <CloudinaryUploadWidget uwConfig={{
                    cloudName: "adarshkds",
                    uploadPreset: "estate",
                    folder: "avatar",
                    multiple: false,
                    maxImageSize: 3000000, //3MB
                }} setAvatar={setAvatar} />
            </div>
        </div>
    );
}

export default UpdateProfile;
