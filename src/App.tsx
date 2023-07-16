import {
  ArcGraphic,
  ArcGraphicsLayer,
  ArcMapView,
  createPoint,
} from "./ArcGIS-ReactKit";
import "./App.css";

function App() {
  const point = createPoint({
    longitude: 55,
    latitude: 25,
  });

  return (
    <ArcMapView>
      <ArcGraphicsLayer>
        <ArcGraphic geometry={point} />
      </ArcGraphicsLayer>
    </ArcMapView>
  );
}

export default App;
