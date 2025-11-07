/// <reference types="@arcgis/map-components/dist/types/react" />
/// <reference types="@esri/calcite-components/dist/types/react" />

import EsriMap from "./EsriMap";
import Hello from "./Hello";
import Coordinate from "./Coordinate";
import { MapProvider } from "./MapContext";

export default function App() {
  return (
    <MapProvider>
      <div style={{ position: "absolute", zIndex: 99, top: 100, left: 15 }}>
        <Hello />
      </div>
      <EsriMap />
      <Coordinate />
    </MapProvider>
  );
}