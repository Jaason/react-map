import React from 'react';
import './App.css';
import { Map } from './components/Map';
import { AppProps } from './common/types/types';
import { AppPropsContextProvider } from './context/AppPropsContextProvider';
import { GoogleApiProvider } from './context/GoogleApiContextProvider';
import { MapProvider } from './context/MapContextProvider';
import GetData from './components/Map/Home';

export const App: React.FC<AppProps> = (props) => {
  const { customHeight } = props;

  return (
    <AppPropsContextProvider value={props}>
      <GoogleApiProvider>
        <MapProvider>
          {/* <Filters /> */}
          <Map customHeight={customHeight}>map goes here{/* <PointsAndClusters /> */}</Map>

          <GetData />
        </MapProvider>
      </GoogleApiProvider>
    </AppPropsContextProvider>
  );
};
