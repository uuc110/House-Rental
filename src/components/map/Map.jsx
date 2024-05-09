import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import './map.css'
import "leaflet/dist/leaflet.css"
import Pin from './Pin'

const Map = ({listData}) => {
    return (
            <MapContainer center={[51.505, -0.09]} zoom={7} scrollWheelZoom={true} className='leaflet-map'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {listData.map((data) => {
                    return <Pin data={data} key={data.id} />
                })}
            </MapContainer>
    )
}

export default Map