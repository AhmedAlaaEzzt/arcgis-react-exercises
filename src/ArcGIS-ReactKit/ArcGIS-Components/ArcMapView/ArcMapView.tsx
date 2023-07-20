import { useEffect, useRef, useState } from "react";

import Basemap from "@arcgis/core/Basemap";

import { createMapView } from "../../ArcGIS-SDK";

import { MapViewContext } from "../Contexts";

import "./ArcMapView.css";

interface IArcMapViewProps {
  children?: React.ReactNode;
  mapProperties?: __esri.MapProperties;
}

export const ArcMapView = (props: IArcMapViewProps) => {
  const { children, mapProperties } = props;

  const mapRef = useRef(null);

  const [view, setView] = useState<__esri.MapView | undefined>();

  useEffect(() => {
    if (!mapRef?.current) return;

    const _view = createMapView({ mapProperties, container: mapRef.current });
    setView(_view);

    return () => _view && _view.destroy();
  }, []);

  useEffect(() => {
    if (!view || !mapProperties) return;

    view.map.basemap = Basemap.fromId(mapProperties.basemap as string);
  }, [view, mapProperties]);

  return (
    <div className="viewDiv" ref={mapRef}>
      <MapViewContext.Provider value={{ view }}>
        {children}
      </MapViewContext.Provider>
    </div>
  );
};
