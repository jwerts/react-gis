import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";
import { useEffect } from "react";
import { useMapContext } from "./MapContext";

export default function EsriMap() {
  const { map, setMap } = useMapContext();

  useEffect(() => {
    if (map) {
      // Wait for the map to be ready
      map.addEventListener('arcgisViewReadyChange', (event: any) => {
        console.log('Map is ready!', (map as any).map);
      });
    }
  }, [map]);

  return (
    <arcgis-map id='arcgisMap' ref={setMap} basemap="topo-vector" center="-82.605143,35.507437" zoom={15}>
      <arcgis-zoom position="top-left" />
      <arcgis-search position="top-right" />
      <arcgis-legend position="bottom-left" />
    </arcgis-map>
  );
}