import { useContext, useEffect, useState } from "react";

import Graphic from "@arcgis/core/Graphic";

import { GraphicsLayerContext } from "../Contexts";

export const ArcGraphic = (graphicProperties: __esri.GraphicProperties) => {
  const { graphicsLayer } = useContext(GraphicsLayerContext);
  const [graphic, setGraphic] = useState<__esri.Graphic | undefined>();

  useEffect(() => {
    const graphicPoint = new Graphic(graphicProperties);

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
