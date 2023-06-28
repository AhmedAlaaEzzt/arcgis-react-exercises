import { useEffect, useRef } from "react";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

import { createMapView } from "../../ArcGIS-SDK";

import "./ArcMapView.css";

export const ArcMapView = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (!mapRef?.current) return;

    const view = createMapView(mapRef.current);
    const graphicsLayer = new GraphicsLayer();
    view.map.add(graphicsLayer);

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

    graphicsLayer.add(graphicPoint);

    return () => view && view.destroy();
  }, []);
  return <div className="viewDiv" ref={mapRef}></div>;
};
