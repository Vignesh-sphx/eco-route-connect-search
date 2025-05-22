
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface RouteMapProps {
  start: string;
  destination: string;
  routeId?: number;
  isVisible: boolean;
}

// Demo token for educational purposes only
const DEMO_MAPBOX_TOKEN = 'pk.eyJ1IjoiZGVtby11c2VyIiwiYSI6ImNrbmhucno5dzBwNWgycXBmMXpld3FrdWEifQ.iBg0GI6-pYZfJJU-OZj0Pg';

const RouteMap = ({ start, destination, routeId, isVisible }: RouteMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !isVisible) return;

    // Initialize the map with the demo token
    mapboxgl.accessToken = DEMO_MAPBOX_TOKEN;
    
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40], // Default center (will be updated)
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
  }, [isVisible]);

  // Effect to handle route display when start, destination, or routeId changes
  useEffect(() => {
    if (!map.current || !start || !destination) return;
    
    // This would typically call an API to get the route
    // For demo purposes, we'll create mock routes
    
    // Mock route coordinates based on routeId
    const getRouteCoordinates = () => {
      // Starting with a base route
      const baseRoute: [number, number][] = [
        [-74.006, 40.7128], // NYC
        [-74.01, 40.72],
        [-74.02, 40.73],
        [-74.03, 40.735],
        [-74.04, 40.74], // End point
      ];
      
      // Modify the route slightly based on routeId
      if (routeId === 2) {
        // Eco-friendly route (slightly different)
        return [
          [-74.006, 40.7128],
          [-74.015, 40.72],
          [-74.025, 40.725],
          [-74.035, 40.735],
          [-74.04, 40.74],
        ] as [number, number][];
      } else if (routeId === 3) {
        // Scenic route (more waypoints)
        return [
          [-74.006, 40.7128],
          [-74.01, 40.715],
          [-74.015, 40.72],
          [-74.02, 40.725],
          [-74.025, 40.73],
          [-74.03, 40.735],
          [-74.035, 40.738],
          [-74.04, 40.74],
        ] as [number, number][];
      }
      
      return baseRoute;
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
      if (map.current.getSource('route')) {
        map.current.removeLayer('route');
        map.current.removeSource('route');
      }
      
      map.current.on('load', () => {
        // Only add the source and layer if they don't exist yet
        if (!map.current?.getSource('route')) {
          map.current?.addSource('route', {
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
          
          map.current?.addLayer({
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
      });
    }
  }, [start, destination, routeId]);

  return (
    <div className="relative h-[400px] border rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-2 left-2 bg-black/10 text-xs text-white px-2 py-1 rounded">
        Demo Map (Simulated Routes)
      </div>
    </div>
  );
};

export default RouteMap;
