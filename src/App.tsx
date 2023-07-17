import {
  ArcGraphic,
  ArcGraphicsLayer,
  ArcMapView,
  createPoint,
  createPolyline,
  createSimpleLineSymbol,
  createSimpleMarkerSymbol,
} from "./ArcGIS-ReactKit";
import "./App.css";

function App() {
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

  return (
    <ArcMapView>
      <ArcGraphicsLayer>
        <ArcGraphic geometry={point} symbol={simpleMarkerSymbol} />
        <ArcGraphic geometry={polyline} symbol={simpleLineSymbol} />
      </ArcGraphicsLayer>
    </ArcMapView>
  );
}

export default App;
