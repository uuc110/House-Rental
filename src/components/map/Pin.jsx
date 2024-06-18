import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import './map.css';
import 'leaflet/dist/leaflet.css';

// Importing default marker icon
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const Pin = ({ data }) => {
    return (
        <Marker position={[data.latitude, data.longitude]}>
            <Popup className='popup'>
                <div className="popup">
                    <div className="popup-left">
                        <img src="https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </div>
                    <div className="popup-right">
                        <Link to={`/properties/${data.id}`}>{data.title}</Link>
                        <span className='price'><b>${data.price}</b></span>
                    </div>
                </div>
            </Popup>
        </Marker>
    );
}

export default Pin;
