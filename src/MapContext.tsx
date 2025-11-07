import { createContext, useContext, useRef, useState, ReactNode } from 'react';

// Type for the ArcGIS Map web component element
declare global {
  interface HTMLArcgisMapElement extends HTMLElement {
    // Add specific properties if needed, or keep minimal
  }
}

interface MapContextType {
  map: any;
  setMap: any;
  view: any;
  setView: any;
  mapElement: HTMLArcgisMapElement | null;
  setMapElement: (ref: HTMLArcgisMapElement | null) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};

interface MapProviderProps {
  children: ReactNode;
}

export const MapProvider = ({ children }: MapProviderProps) => {
  const [mapElement, setMapElement] = useState<HTMLArcgisMapElement | null>(null);
  const [map, setMap] = useState<any>(null);
  const [view, setView] = useState<any>(null);

  return (
    <MapContext.Provider value={{ mapElement: mapElement, setMapElement: setMapElement, map, setMap, view, setView }}>
      {children}
    </MapContext.Provider>
  );
};