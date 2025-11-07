import { useEffect, useState } from "react";
import { useMapContext } from "./MapContext";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import { Point } from "@arcgis/core/geometry";

export default function Hello() {
  const { map, setMap } = useMapContext();
  let pointSize = 5;

  const doSomething = () => {
    console.log('hello', map);
    const esriMap = (map as any).map;
    const layer = new GraphicsLayer();
    const graphic = new Graphic({
      geometry: new Point({
        latitude: 35.507437,
        longitude: -82.605143
      }),
      symbol: new SimpleMarkerSymbol({
        size: pointSize++
      })
    })
    layer.add(graphic);
    esriMap.layers.add(layer);
  }

  return (
    <button onClick={doSomething}>Add Point</button>
  )
}