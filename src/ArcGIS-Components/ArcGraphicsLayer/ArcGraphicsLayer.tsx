import { useContext, useEffect, useState } from "react";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

import { MapViewContext } from "../Contexts";

export const ArcGraphicsLayer = () => {
  const { view } = useContext(MapViewContext);

  const [graphicsLayer, setGraphicsLayer] = useState<
    __esri.GraphicsLayer | undefined
  >();

  useEffect(() => {
    const _graphicsLayer = new GraphicsLayer();
    setGraphicsLayer(_graphicsLayer);

    const point = new Point({
      longitude: 55,
      latitude: 25,
    });

    const simpleMarkerSymbol = new SimpleMarkerSymbol({
      color: "red",
    });

    const graphicPoint = new Graphic({
      geometry: point,
      symbol: simpleMarkerSymbol,
    });

    _graphicsLayer.add(graphicPoint);

    return () => {
      console.log("ArcGraphicsLayer unmounting");
    };
  }, []);

  useEffect(() => {
    if (!view || !graphicsLayer) return;
    view.map.add(graphicsLayer);
  }, [view, graphicsLayer]);

  return <></>;
};
