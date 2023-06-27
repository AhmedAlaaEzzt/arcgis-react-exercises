import { useEffect, useRef } from "react";

import { createMapView } from "../../ArcGIS-SDK";

import "./ArcMapView.css";

export const ArcMapView = () => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (!mapRef?.current) return;

    const view = createMapView(mapRef.current);

    return () => view && view.destroy();
  }, []);
  return <div className="viewDiv" ref={mapRef}></div>;
};
