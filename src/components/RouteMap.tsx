
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface RouteMapProps {
  start: string;
  destination: string;
  routeId?: number;
  isVisible: boolean;
}

// Using a Mapbox public token for demo purposes only - normally you would use an environment variable
// This is a restricted token that will only work for demo purposes
const MAPBOX_TOKEN = 'pk.eyJ1IjoibG92YWJsZS1kZXYiLCJhIjoiY2xuaWE0ZHB4MDJ3MDJrcGR4ZnhscnV2cyJ9.a3kh-GxONt6FhLV_aMFgIw';

// Predefined city coordinates for demonstration
const CITY_COORDINATES: Record<string, [number, number]> = {
  'New York': [-74.006, 40.7128],
  'Chicago': [-87.6298, 41.8781],
  'Los Angeles': [-118.2437, 34.0522],
  'Miami': [-80.1918, 25.7617],
  'Seattle': [-122.3321, 47.6062],
  'Austin': [-97.7431, 30.2672],
  'Boston': [-71.0589, 42.3601],
  'Denver': [-104.9903, 39.7392],
  'San Francisco': [-122.4194, 37.7749],
  'Washington DC': [-77.0369, 38.9072]
};

const RouteMap = ({ start, destination, routeId, isVisible }: RouteMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  // Get coordinates for start and destination, or use defaults
  const getCoordinates = (location: string): [number, number] => {
    return CITY_COORDINATES[location] || [-74.006, 40.7128]; // Default to NYC
  };

  useEffect(() => {
    if (!mapContainer.current || !isVisible) return;

    // Set the Mapbox token
    mapboxgl.accessToken = MAPBOX_TOKEN;
    
    if (map.current) return;
    
    // Initialize map with start location
    const startCoords = getCoordinates(start);
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: startCoords,
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, [isVisible, start]);

  // Effect to handle route display when start, destination, or routeId changes
  useEffect(() => {
    if (!map.current || !start || !destination) return;
    
    const startCoords = getCoordinates(start);
    const destCoords = getCoordinates(destination);
    
    // Create route based on selected option and coordinates
    const getRouteCoordinates = () => {
      // Create a base route between the two points
      const directPath: [number, number][] = [
        startCoords,
        destCoords
      ];
      
      // If route type is specified, create variations
      if (routeId === 2) {
        // Eco-friendly route (slightly different)
        const midLat = (startCoords[1] + destCoords[1]) / 2;
        const midLng = (startCoords[0] + destCoords[0]) / 2;
        
        // Add a slight detour
        return [
          startCoords,
          [midLng + 0.02, midLat - 0.01],
          [midLng + 0.01, midLat + 0.02],
          destCoords,
        ] as [number, number][];
      } else if (routeId === 3) {
        // Scenic route (more waypoints)
        const midLat = (startCoords[1] + destCoords[1]) / 2;
        const midLng = (startCoords[0] + destCoords[0]) / 2;
        
        // Add multiple waypoints for a scenic route
        return [
          startCoords,
          [startCoords[0] + 0.02, startCoords[1] + 0.01],
          [midLng - 0.03, midLat - 0.02],
          [midLng, midLat + 0.02],
          [midLng + 0.03, midLat],
          [destCoords[0] - 0.01, destCoords[1] - 0.01],
          destCoords,
        ] as [number, number][];
      }
      
      return directPath;
    };
    
    const coordinates = getRouteCoordinates();
    
    // Add markers for start and end points
    if (map.current) {
      // Remove existing markers if any
      const markers = document.querySelectorAll('.mapboxgl-marker');
      markers.forEach(marker => marker.remove());
      
      // Add start marker
      new mapboxgl.Marker({ color: '#3FB950' })
        .setLngLat(coordinates[0])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>Start: ${start}</h3>`))
        .addTo(map.current);
      
      // Add end marker
      new mapboxgl.Marker({ color: '#E74C3C' })
        .setLngLat(coordinates[coordinates.length - 1])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>Destination: ${destination}</h3>`))
        .addTo(map.current);
      
      // Fit bounds to the route
      const bounds = coordinates.reduce((bounds, coord) => {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
      
      map.current.fitBounds(bounds, {
        padding: 60,
        duration: 1000
      });
      
      // Add the route line
      const routeColor = routeId === 2 ? '#3FB950' : routeId === 3 ? '#9D4EDD' : '#3498DB';
      
      // Remove existing route layers if any
      if (map.current.getLayer('route')) {
        map.current.removeLayer('route');
      }
      
      if (map.current.getSource('route')) {
        map.current.removeSource('route');
      }
      
      const addRouteLayer = () => {
        if (map.current && !map.current.getSource('route')) {
          map.current.addSource('route', {
            'type': 'geojson',
            'data': {
              'type': 'Feature',
              'properties': {},
              'geometry': {
                'type': 'LineString',
                'coordinates': coordinates
              }
            }
          });
          
          map.current.addLayer({
            'id': 'route',
            'type': 'line',
            'source': 'route',
            'layout': {
              'line-join': 'round',
              'line-cap': 'round'
            },
            'paint': {
              'line-color': routeColor,
              'line-width': 5,
              'line-opacity': 0.8
            }
          });
        }
      };
      
      // Check if the map is loaded
      if (map.current.isStyleLoaded()) {
        addRouteLayer();
      } else {
        map.current.on('style.load', addRouteLayer);
      }
    }
  }, [start, destination, routeId]);

  return (
    <div className="relative h-[400px] border rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-2 left-2 bg-black/70 text-xs text-white px-2 py-1 rounded">
        Demo Map ({start} to {destination})
      </div>
    </div>
  );
};

export default RouteMap;
