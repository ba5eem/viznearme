import React, { useState } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import * as D from './data'; // Importing variables



function MyMap({ changeMarker }){

	const [marker, setMarker] = useState({
      lat:21.459272, 
      lng:-157.836156
    });



  const changeMarkerState = (e) => {
    let coords = {
      lat:e.latlng.lat, 
      lng:e.latlng.lng
    }
    setMarker(coords);



  }

	

	return (
		<div id="map">
		  <Map
		  	onClick={(e)=>changeMarkerState(e)}
		    center={D.center} 
		    zoom={15}>
		    <TileLayer attribution={D.attribution} url={D.url}/>
		    <Marker position={[marker.lat,marker.lng]}/>



		  </Map>
		</div>
		)
}


export default MyMap;