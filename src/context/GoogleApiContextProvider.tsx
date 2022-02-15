import { Loader } from '@googlemaps/js-api-loader';
import React, { useEffect, createContext, useState, useContext } from 'react';
import { Google } from './../common/types/map';
import { AppPropsContext } from './AppPropsContextProvider';

export const GoogleApiContext = createContext<GoogleApiContextValue>({
  googleApi: null
});

export const GoogleApiProvider: React.FC = ({ children }) => {
  const { googleMapKey } = useContext(AppPropsContext);
  const [googleApi, setGoogleApi] = useState<Google | null>(null);

  const loadGoogleScript = (): Promise<Google> => {
    const loader = new Loader({ apiKey: googleMapKey });
    return loader.load();
  };

  useEffect(() => {
    loadGoogleScript().then(setGoogleApi);
  }, []);

  return <GoogleApiContext.Provider value={{ googleApi }}>{children}</GoogleApiContext.Provider>;
};

type GoogleApiContextValue = {
  googleApi: Google | null;
};
