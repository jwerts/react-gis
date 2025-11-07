import { useEffect, useState } from "react";
import { useMapContext } from "./MapContext";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { Point } from "@arcgis/core/geometry";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";

export default function Coordinate() {
  const { map, view } = useMapContext();

  const [lat, setLat] = useState<number | nullish>(null);
  const [long, setLong] = useState<number | nullish>(null);

  let pointSize = 5;

  const latitude = // /reactive tools

    useEffect(() => {
      if (!view) return;

      // Wait for the map to be ready
      let handle: IHandle;
      // map.addEventListener('arcgisViewReadyChange', (event: any) => {
      handle = reactiveUtils.watch(() => view.center, (center) => {
        setLat(center.latitude);
        setLong(center.longitude);
      })
      // });

      return () => {
        if (handle) handle.remove();
      }
    }, [view]);

  return (
    <div>{lat} {long}</div>
  )
}