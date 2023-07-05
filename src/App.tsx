import { ArcGraphic, ArcGraphicsLayer, ArcMapView } from "./ArcGIS-Components";
import "./App.css";

function App() {
  return (
    <ArcMapView>
      <ArcGraphicsLayer>
        <ArcGraphic />
      </ArcGraphicsLayer>
    </ArcMapView>
  );
}

export default App;
