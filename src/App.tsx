import React from 'react';
import './App.css';

import { Loader } from '@googlemaps/js-api-loader';
import { Map } from './components/Map';
import { AppProps } from './common/types/types';
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

export const App: React.FC<AppProps> = (props) => {
  const { customHeight } = props;
  return <Map customHeight={customHeight}>map goes here</Map>;
};
