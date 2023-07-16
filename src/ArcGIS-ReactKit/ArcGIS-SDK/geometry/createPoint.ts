import Point from "@arcgis/core/geometry/Point";

export const createPoint = (pointProperties: __esri.PointProperties) => new Point(pointProperties);
