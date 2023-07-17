import Polygon from "@arcgis/core/geometry/Polygon";

export const createPolygon = (polygonProperties: __esri.PolygonProperties) => new Polygon(polygonProperties); 
