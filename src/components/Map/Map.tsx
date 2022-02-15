import React, { ReactNode } from 'react';

export const Map: React.FC<MapProps> = ({ children, customHeight }) => {
  return (
    <div style={{ height: customHeight || '500px' }} id="map" className="map">
      {children}
    </div>
  );
};

type MapProps = {
  children: ReactNode;
  customHeight?: string;
};
