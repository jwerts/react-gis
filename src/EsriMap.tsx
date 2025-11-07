import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-search";
import { useEffect } from "react";
import { useMapContext } from "./MapContext";

export default function EsriMap() {
  const { mapElement, setMapElement, map, setMap, view, setView } = useMapContext();

  useEffect(() => {
    if (mapElement) {
      // Wait for the map to be ready
      mapElement.addEventListener('arcgisViewReadyChange', (event: any) => {
        console.log('Map is ready!', mapElement);
        setMap((mapElement as any).map);
        setView((mapElement as any).view);
      });
    }
  }, [mapElement]);

  return (
    <arcgis-map id='arcgisMap' ref={setMapElement} basemap="topo-vector" center="-82.605143,35.507437" zoom={15}>
      <arcgis-zoom position="top-left" />
      <arcgis-search position="top-right" />
      <arcgis-legend position="bottom-left" />
    </arcgis-map>
  );
}