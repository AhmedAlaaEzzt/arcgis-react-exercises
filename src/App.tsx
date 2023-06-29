import { ArcGraphicsLayer, ArcMapView } from "./ArcGIS-Components";
import "./App.css";

function App() {
  return (
    <ArcMapView>
      <ArcGraphicsLayer />
    </ArcMapView>
  );
}

export default App;
