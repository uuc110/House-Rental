import React, { useState } from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom'
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const PropertyList = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className='property-list-single'>
            <div className="post">
                <div className="img">
                    <img src={data.images ? data.images[0] : 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" />
                </div>
                <div className="details">
                    <h3 onClick={() => { navigate(`/properties/${data.id}`) }}>{data.title}</h3>
                    <div className="location flex-details">
                        <img src="./pin.png" alt="" />
                        <span>{data.address}</span>
                    </div>
                    <div className="price">
                        <span>₹{data.price}</span>
                    </div>
                    <div className="features">
                        <div className="bedroom flex-details">
                            <img src="./bed.png" alt="" />
                            <span>{data.bed} bedroom</span>
                        </div>
                        <div className="bath flex-details">
                            <img src="./bath.png" alt="" />
                            <span>{data.bath} bathroom</span>
                        </div>
                        <div className="flex-details etc-features">
                            {/* <div className="etc" onClick={handleSaving}>{save ? <GoBookmarkFill className='h-6 w-6'/> : <GoBookmark className='h-6 w-6'/>}</div> */}
                            <div className='etc-chat etc'><IoChatboxEllipsesOutline className='h-6 w-6'/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyList