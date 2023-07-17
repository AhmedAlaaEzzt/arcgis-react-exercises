import Polyline from "@arcgis/core/geometry/Polyline";

export const createPolyline = (polylineProperties: __esri.PolylineProperties) => new Polyline(polylineProperties);
