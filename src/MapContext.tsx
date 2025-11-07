import { createContext, useContext, useRef, useState, ReactNode } from 'react';

// Type for the ArcGIS Map web component element
declare global {
  interface HTMLArcgisMapElement extends HTMLElement {
    // Add specific properties if needed, or keep minimal
  }
}

interface MapContextType {
  map: HTMLArcgisMapElement | null;
  setMap: (ref: HTMLArcgisMapElement | null) => void;
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
  const [map, setMap] = useState<HTMLArcgisMapElement | null>(null);

  return (
    <MapContext.Provider value={{ map, setMap }}>
      {children}
    </MapContext.Provider>
  );
};