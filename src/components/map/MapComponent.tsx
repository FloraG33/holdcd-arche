import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { Icon } from 'leaflet';
import { useEffect, useRef } from 'react';

interface LeafletMapProps {
  lat: number;
  lng: number;
  address: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ lat, lng, address }) => {
  const mapRef = useRef<L.Map>(null);
  const markerRef = useRef<L.Marker>(null);

  useEffect(() => {
    // Ouvrir le popup automatiquement après un court délai
    const timer = setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, 100); // Ajustez le délai si nécessaire

    return () => clearTimeout(timer); // Nettoyer le timer à la démonte
  }, []);

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: '240px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={[lat, lng]}
        ref={markerRef}
        icon={new Icon({
            iconUrl: '/icons/marker.png',
            iconSize: [37, 37],
            iconAnchor: [18, 37],
            popupAnchor: [0, -37],
        })}
      >
        <Popup>
          {address}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
