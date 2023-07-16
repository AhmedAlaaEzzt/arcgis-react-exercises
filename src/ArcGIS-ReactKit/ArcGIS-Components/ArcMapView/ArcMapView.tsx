import { useEffect, useRef, useState } from "react";

import { createMapView } from "../../ArcGIS-SDK";

import { MapViewContext } from "../Contexts";

import "./ArcMapView.css";

interface IArcMapViewProps {
  children?: React.ReactNode;
}

export const ArcMapView = (props: IArcMapViewProps) => {
  const { children } = props;

  const mapRef = useRef(null);

  const [view, setView] = useState<__esri.MapView | undefined>();

  useEffect(() => {
    if (!mapRef?.current) return;

    const _view = createMapView(mapRef.current);
    setView(_view);

    return () => _view && _view.destroy();
  }, []);
  return (
    <div className="viewDiv" ref={mapRef}>
      <MapViewContext.Provider value={{ view }}>
        {children}
      </MapViewContext.Provider>
    </div>
  );
};
