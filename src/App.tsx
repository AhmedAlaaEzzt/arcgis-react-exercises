import { useState } from "react";

import {
  ArcGraphic,
  ArcGraphicsLayer,
  ArcMapView,
  createPoint,
  createPolygon,
  createPolyline,
  createSimpleFillSymbol,
  createSimpleLineSymbol,
  createSimpleMarkerSymbol,
} from "./ArcGIS-ReactKit";
import "./App.css";
import DropdownSelector from "./components/DropdownSelector";
import { basemaps } from "./data";

function App() {
  const [basemap, setBasemap] = useState<string>("satellite");
  const point = createPoint({
    longitude: 55,
    latitude: 25,
  });

  const simpleMarkerSymbol = createSimpleMarkerSymbol({
    color: "blue",
  });

  const polyline = createPolyline({
    paths: [
      [
        [55.01972588152597, 25.03419725426069],
        [54.9653361125938, 25.049087857704478],
        [54.944834050161006, 25.000418053803813],
      ],
    ],
  });

  const simpleLineSymbol = createSimpleLineSymbol({
    color: "blue",
    width: 3,
  });

  const polygon = createPolygon({
    rings: [
      [
        [54.99484672291234, 25.001548254997985],
        [54.98948674805712, 24.99896433116001],
        [55.00100499189463, 24.980978716284596],
        [55.00568071464073, 24.983149533564287],
        [54.99484672291234, 25.001548254997985],
      ],
    ],
  });

  const simpleFillSymbol = createSimpleFillSymbol({
    color: "blue",
  });

  return (
    <div className="position-relative">
      <DropdownSelector
        defaultValue="Select Basemap"
        options={basemaps}
        onChange={setBasemap}
      />
      <ArcMapView mapProperties={{ basemap }}>
        <ArcGraphicsLayer>
          <ArcGraphic geometry={point} symbol={simpleMarkerSymbol} />
          <ArcGraphic geometry={polyline} symbol={simpleLineSymbol} />
          <ArcGraphic geometry={polygon} symbol={simpleFillSymbol} />
        </ArcGraphicsLayer>
      </ArcMapView>
    </div>
  );
}

export default App;
