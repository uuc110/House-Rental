import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './map.css'
import "leaflet/dist/leaflet.css"
import Pin from './Pin'

const Map = ({ listData }) => {
    if (!Array.isArray(listData)) {
        listData = [listData];
    }

    // console.log(listData);
    return (
        <MapContainer center={listData.length === 1 ? [listData[0].latitude, listData[0].longitude] : [20.59, 78.96]} zoom={5} scrollWheelZoom={true} className='leaflet-map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {listData.map((data) => { return <Pin data={data} key={data.id} /> })}
        </MapContainer>
    )
}

export default Map