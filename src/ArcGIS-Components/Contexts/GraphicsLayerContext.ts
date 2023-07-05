import { createContext } from "react";

interface IGraphicsLayerContext {
    graphicsLayer: __esri.GraphicsLayer
}


export const GraphicsLayerContext = createContext({} as IGraphicsLayerContext)