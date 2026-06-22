import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { renderToStaticMarkup } from 'react-dom/server';
import { MapPin } from 'lucide-react';

const locations = [
  { name: "Maputo", tag: "Sede", lat: -25.9692, lng: 32.5732 },
  { name: "Beira", tag: null, lat: -19.8333, lng: 34.8333 },
  { name: "Tete", tag: null, lat: -16.1564, lng: 33.5866 },
  { name: "Pemba", tag: null, lat: -12.9740, lng: 40.5178 },
  { name: "Nacala", tag: null, lat: -14.5428, lng: 40.6728 },
  { name: "Afungi", tag: null, lat: -10.7735, lng: 40.4851 },
];

const customMarkerIcon = L.divIcon({
  html: renderToStaticMarkup(<MapPin size={32} className="text-primary fill-primary/20 drop-shadow-md" />),
  className: 'bg-transparent border-none',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export const LeafletMap = ({ className }: { className?: string }) => {
  return (
    <div className={`overflow-hidden rounded-3xl border border-border shadow-lg relative ${className}`}>
      <MapContainer 
        center={[-18.6657, 35.5296]} 
        zoom={5} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.name} position={[loc.lat, loc.lng]} icon={customMarkerIcon}>
            <Popup className="font-sans font-medium">
              <div className="font-bold text-foreground text-base mb-1">{loc.name}</div>
              {loc.tag && <span className="text-[10px] bg-secondary/20 text-secondary-dark px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">{loc.tag}</span>}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
