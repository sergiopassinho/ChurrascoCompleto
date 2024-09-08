import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import iconLocation from '../../assets/iconLocation.svg';

const Map = () => {
    const position = [-2.56198614308118, -44.19179727491495];

    const customMarkerIcon = new L.Icon({
        iconUrl: iconLocation,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    return (
        <MapContainer center={position} zoom={20} style={{ height: '376px', width: '718px' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customMarkerIcon} />
        </MapContainer>
    );
};

export default Map;
