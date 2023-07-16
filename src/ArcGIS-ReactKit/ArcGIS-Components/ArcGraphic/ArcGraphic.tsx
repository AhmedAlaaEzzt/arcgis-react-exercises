import { useContext, useEffect, useState } from "react";

import Graphic from "@arcgis/core/Graphic";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";

import { GraphicsLayerContext } from "../Contexts";

export const ArcGraphic = (graphicProperties: __esri.GraphicProperties) => {
  const { geometry } = graphicProperties;
  const { graphicsLayer } = useContext(GraphicsLayerContext);
  const [graphic, setGraphic] = useState<__esri.Graphic | undefined>();

  useEffect(() => {
    const simpleMarkerSymbol = new SimpleMarkerSymbol({
      color: "red",
    });

    const graphicPoint = new Graphic({
      geometry,
      symbol: simpleMarkerSymbol,
    });

    setGraphic(graphicPoint);

    return () => {
      console.log("ArcGraphic unmounting");
    };
  }, []);

  useEffect(() => {
    if (!graphic || !graphicsLayer) return;
    graphicsLayer.add(graphic);
  }, [graphic, graphicsLayer]);

  return <></>;
};
