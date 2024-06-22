import React, { useContext, useEffect, useState } from 'react'
import './propertysearch.css'
import Map from '../map/Map'
import Chat from '../chat/Chat'
import ImageSlider from '../imageslider/ImageSlider'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { GoBookmark } from "react-icons/go";
import { GoBookmarkFill } from "react-icons/go";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaMapMarkedAlt } from "react-icons/fa";


const SingleProperty = () => {
    const params = useParams();
    const [property, setProperty] = useState([]);
    const [save, setSave] = useState(false);
    const [popMsg, setPopMsg] = useState(false);

    async function bookmark() {
        setSave(!save)
        try {
            const res = await axios.post(`http://localhost:4500/user/save/${params.id}`);
            // console.log(res.data.bookmark);
        } catch (error) {
            console.log(error);
        }
    }

    const postData = async function () {
        try {
            const { data } = await axios.get(`http://localhost:4500/post/properties/${params.id}`);
            console.log(data);
            setProperty(data.post);
            setSave(data.isBookmark);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        postData();
    }, [])


    return (
        <div>
            <div className="property-search">
                <div className="property-side">
                    <div className="images">
                        <ImageSlider images={property.images} />
                    </div>

                    <div className="property-detail">
                        <div className="property-detail-top">
                            <div className="property-top-left">
                                <h2>{property.title}</h2>
                                <div className="location">
                                    <img src="/pin.png" alt="" />
                                    <span>{property.address},</span>
                                    <span>{property.city ? property.city.charAt(0).toUpperCase() + property.city.slice(1) : null}</span>
                                </div>
                                <div className="price">
                                    <span>₹{property.price}</span>
                                </div>
                            </div>
                            <div className="property-top-right">
                                <img className='posted-user-avatar' src={property?.avatar || `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png`} alt="" />
                                <h3>{property.postedBy}</h3>
                            </div>
                        </div>
                        <div className="property-detail-bottom">
                            <p>
                                {property.detail}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="map-side">
                    {/* <div className="notes">
                    </div> */}
                    <div className="chat-save">
                        <button onClick={bookmark}>{save ? <GoBookmarkFill className='h-6 w-6' /> : <GoBookmark className='h-6 w-6' />} <span>{save ? `Unsave Property` : `Save Property`}</span></button>
                        <button id='chat-save-msg-map' onClick={() => { setPopMsg(!popMsg) }}>{popMsg ? <FaMapMarkedAlt className='h-6 w-6'/> : <IoChatboxEllipsesOutline className='h-6 w-6' />}</button>
                    </div>
                    <div className="map">
                        {popMsg ? <Chat data={property}/> : <Map listData={property} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProperty