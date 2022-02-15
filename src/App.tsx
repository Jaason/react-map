import React from 'react';
import './App.css';

import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
  apiKey: '',
  version: 'weekly',
  libraries: ['places']
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0
  },
  zoom: 4
};

// Promise
loader
  .load()
  .then((google) => {
    new google.maps.Map(document.getElementById('map'), mapOptions);
  })
  .catch((e) => {
    // do something
    console.log(e);
  });

function App() {
  return (
    <div className="App">
      <div id="map" className="map"></div>
    </div>
  );
}

export default App;
