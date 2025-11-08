import { useEffect, useState } from "react";
import { useMapContext } from "./MapContext";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

export default function Coordinate() {
  const { view } = useMapContext();

  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    if (!view) return;

    setScale(view.scale);

    const onMouseMove = (event: MouseEvent) => {
      // Get the screen point from the mouse event
      const screenPoint = {
        x: event.x,
        y: event.y
      };

      // Convert screen point to map point
      const mapPoint = view.toMap(screenPoint);

      if (mapPoint && mapPoint.latitude != null && mapPoint.longitude != null) {
        setLat(mapPoint.latitude);
        setLong(mapPoint.longitude);
      }
    };

    // Add the mousemove event listener to the view container
    view.container?.addEventListener('mousemove', onMouseMove);

    const handle = reactiveUtils.watch(() => view.scale, (scale) => {
      setScale(scale);
    })

    // Cleanup function to remove the event listener
    return () => {
      view.container?.removeEventListener('mousemove', onMouseMove);
      handle.remove();
    };
  }, [view]);

  return (
    <div>
      {lat !== null && long !== null ? (
        <>
          Lat: {lat.toFixed(6)} Long: {long.toFixed(6)} Scale: {scale?.toFixed(0)}
        </>
      ) : (
        ''
      )}
    </div>
  );
}