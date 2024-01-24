'use client';

import Map, { Marker, NavigationControl, ViewStateChangeEvent } from 'react-map-gl';
import { useState } from 'react';
import Image from 'next/image';

import style from './map.module.scss';
import 'mapbox-gl/dist/mapbox-gl.css';
import { CONTACTS_LOCATIONS } from './constants';

export const initialCoordinatesMap = {
  latitude: 53.9022,
  longitude: 27.5619,
  zoom: 5,
  pitch: 0,
  bearing: 0,
  padding: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export function MapComponent() {
  const [viewState, setViewState] = useState(initialCoordinatesMap);

  const handleZoom = (event: ViewStateChangeEvent) => {
    setViewState(event.viewState);
  };

  return (
    <div className={style.mapSection} data-cy='contactMap'>
      <Map
        {...viewState}
        onMove={handleZoom}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_TOKEN ?? ''}
        mapStyle='mapbox://styles/mapbox/streets-v12'
      >
        {CONTACTS_LOCATIONS.map((location) => (
          <Marker key={location.id} longitude={location.longitude} latitude={location.latitude}>
            <button type='button' className={style.markerBtn}>
              <Image src='/icons/marker.svg' alt='marker of map' width={25} height={25} />
            </button>
          </Marker>
        ))}
        <NavigationControl />
      </Map>
    </div>
  );
}
