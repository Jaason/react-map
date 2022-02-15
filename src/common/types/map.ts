export type MapOptions = google.maps.MapOptions;
export type MapInstance = google.maps.Map & {
  addCustomEventListener: (eventName: string, handler: () => void) => MapsEventListener;
  triggerCustomEvent: (eventName: string) => void;
};
export type LatLngLiteral = google.maps.LatLngLiteral;
export type LatLngBounds = google.maps.LatLngBounds;
export type MapMouseEvent = google.maps.MapMouseEvent;
export type AutocompleteInstance = google.maps.places.Autocomplete;
export type MarkerInstance = google.maps.Marker;
export type MarkerLabel = google.maps.MarkerLabel;
export type MapsEventListener = google.maps.MapsEventListener;
export type Google = typeof google;
