import { AppProps } from '../common/types/types';
import { createContext } from 'react';

const initialValue: AppPropsContextValue = {
  googleMapKey: ''
};

export const AppPropsContext = createContext(initialValue);

export const AppPropsContextProvider = AppPropsContext.Provider;

type AppPropsContextValue = AppProps;
