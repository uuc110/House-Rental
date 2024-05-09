import React from 'react'
import './profile.css'

const PropertyList = ({ data }) => {
    return (
        <div>
            <div className="post">
                <div className="img">
                    <img src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
                <div className="details">
                    <h3>{data.title}</h3>
                    <div className="location flex-details">
                        <img src="./pin.png" alt="" />
                        <span>{data.address}</span>
                    </div>
                    <div className="price">
                        <span>${data.price}</span>
                    </div>
                    <div className="features">
                        <div className="bedroom flex-details">
                            <img src="./bed.png" alt="" />
                            <span>{data.bedroom} bedroom</span>
                        </div>
                        <div className="bath flex-details">
                            <img src="./bath.png" alt="" />
                            <span>{data.bathroom} bathroom</span>
                        </div>
                        <div className="etc flex-details">
                            <img src="./save.png" alt="" />
                            <img src="./chat.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyList