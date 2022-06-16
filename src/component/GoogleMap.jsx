import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMaps = ({ latitude, longitude }) => {
 const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
  position: { lat: latitude, lng: longitude },
  map,
  title: 'RavenLabsHQ'
  });
  return marker;
 };

 return (
   <div style={{ height: '50vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAMbzDcfop_dN_Cbp4GI1JwZSaPqjUT7wY' }}
      defaultCenter={{ lat: latitude, lng: longitude }}
      defaultZoom={16}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
    >
    </GoogleMapReact>
   </div>
 );
};

export default GoogleMaps;