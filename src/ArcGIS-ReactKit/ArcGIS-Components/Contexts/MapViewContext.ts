import { createContext } from "react";

interface IViewContext {
    view: __esri.MapView
}



export const MapViewContext = createContext({} as IViewContext)