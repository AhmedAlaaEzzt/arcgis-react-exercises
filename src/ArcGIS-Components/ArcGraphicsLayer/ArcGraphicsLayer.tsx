import { useContext, useEffect, useState } from "react";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";

import { GraphicsLayerContext, MapViewContext } from "../Contexts";

interface IArcGraphicsLayerProps {
  children?: React.ReactNode;
}

export const ArcGraphicsLayer = (props: IArcGraphicsLayerProps) => {
  const { children } = props;
  const { view } = useContext(MapViewContext);

  const [graphicsLayer, setGraphicsLayer] = useState<
    __esri.GraphicsLayer | undefined
  >();

  useEffect(() => {
    const _graphicsLayer = new GraphicsLayer();
    setGraphicsLayer(_graphicsLayer);

    return () => {
      console.log("ArcGraphicsLayer unmounting");
    };
  }, []);

  useEffect(() => {
    if (!view || !graphicsLayer) return;
    view.map.add(graphicsLayer);
  }, [view, graphicsLayer]);

  return (
    <>
      {graphicsLayer && (
        <GraphicsLayerContext.Provider value={{ graphicsLayer }}>
          {children}
        </GraphicsLayerContext.Provider>
      )}
    </>
  );
};
