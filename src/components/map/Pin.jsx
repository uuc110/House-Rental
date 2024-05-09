import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import './map.css'
import { Link } from 'react-router-dom'

const Pin = ({ data }) => {
    return (
        <div>
            <Marker position={[data.latitude, data.longitude]}>
                <Popup className='popup'>
                    <div className="popup">
                        <div className="popup-left">
                            <img src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        </div>
                        <div className="popup-right">
                            <Link to={`/properties/:${data.id}`}>{data.title}</Link>
                            <span className='price'><b>${data.price}</b></span>
                        </div>
                    </div>
                </Popup>
            </Marker>
        </div>
    )
}

export default Pin