import {
  ArcGraphic,
  ArcGraphicsLayer,
  ArcMapView,
  createPoint,
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

  return (
    <ArcMapView>
      <ArcGraphicsLayer>
        <ArcGraphic geometry={point} symbol={simpleMarkerSymbol} />
      </ArcGraphicsLayer>
    </ArcMapView>
  );
}

export default App;
