import React, { useContext, useState, createContext, useEffect } from 'react';
import { GoogleApiContext } from './../context/GoogleApiContextProvider';
import { MapInstance, MapOptions, MapsEventListener } from './../common/types/map';
import { AppPropsContext } from './AppPropsContextProvider';

export const MapContext = createContext<MapContextValue>({
  mapInstance: null
});

export const MapProvider: React.FC = ({ children }) => {
  const { customMapOptions } = useContext(AppPropsContext);
  const { googleApi } = useContext(GoogleApiContext);
  const [mapInstance, setMapInstance] = useState<MapInstance | null>(null);

  const loadMap = (): void => {
    const mapContainer = document.getElementById('map') as HTMLDivElement;

    if (mapContainer) {
      const map = new google.maps.Map(
        mapContainer,
        createMapOptions(customMapOptions || {})
      ) as unknown as MapInstance;

      map.addCustomEventListener = (eventName: string, handler: () => void): MapsEventListener => {
        return google.maps.event.addDomListener(map, eventName, handler);
      };

      map.triggerCustomEvent = (eventName: string): void => {
        google.maps.event.trigger(map, eventName);
      };

      setMapInstance(map);
    } else {
      throw new Error('Map container not exist.');
    }
  };
  useEffect(() => {
    if (googleApi) {
      loadMap();
    }
  }, [googleApi]);

  return <MapContext.Provider value={{ mapInstance }}>{children}</MapContext.Provider>;
};

const createMapOptions = (customMapOptions: Partial<MapOptions>): Partial<MapOptions> => ({
  zoom: 10,
  center: {
    lat: 51.919438,
    lng: 19.145136
  },
  fullscreenControl: false,
  mapTypeControl: false,
  gestureHandling: 'greedy',
  ...customMapOptions
});

type MapContextValue = {
  mapInstance: MapInstance | null;
};
