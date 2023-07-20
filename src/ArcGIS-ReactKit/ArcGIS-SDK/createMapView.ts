import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

interface ICreateMapView {
    container: HTMLDivElement,
    mapProperties?: __esri.MapProperties,
}

export const createMapView = (args: ICreateMapView) => {
    const { mapProperties, container } = args;
    const map = new Map({ basemap: 'osm', ...mapProperties });

    return new MapView({
        map: map,
        container: container,
        center: [55, 25],
        zoom: 13,
    });

} 